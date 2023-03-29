import { AzureSASCredential, TableClient, TableEntity } from "@azure/data-tables";
import { BlobServiceClient, newPipeline } from "@azure/storage-blob";
import { createSignal, Show } from "solid-js";
import { Person } from "./attendees";
import { ImageTools } from "../services/image-tools";

export type CardColor = "" | "Primary" | "Secondary" | "Accent" | "Neutral" | "Base";
type DietaryRestriction = "None" | "Vegetarian" | "Vegan" | "GlutenFree" | "Other";

interface RSVP extends Person {
  imageRef: string
  firstName: string
  lastName: string
  blurb: string
  email: string
  cardColor: CardColor
  dietaryRestriction: DietaryRestriction
  dietaryRestrictionOther: string
  addToAttendees: boolean
}

const account = import.meta.env.VITE_STORAGE_ACCOUNT;
const sasToken = import.meta.env.VITE_SAS_TOKEN;
const tableName = import.meta.env.VITE_TABLE_NAME;
const partitionKey = import.meta.env.VITE_PARTITION_KEY;
const blobContainer = import.meta.env.VITE_BLOB_CONTAINER;

const defaultRsvpData: RSVP = {
  firstName: "",
  lastName: "",
  blurb: "",
  email: "",
  imageRef: "",
  cardColor: "",
  dietaryRestriction: "None",
  dietaryRestrictionOther: "",
  addToAttendees: true
};

export default function RSVP() {
  const tableClient = new TableClient(
    `https://${account}.table.core.windows.net`,
    tableName,
    new AzureSASCredential(sasToken)
  );

  const blobClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net${sasToken}`,
    newPipeline()
  );

  const containerClient = blobClient.getContainerClient(blobContainer);

  const [isLoading, setIsLoading] = createSignal(false);

  const [data, setData] = createSignal<RSVP>(defaultRsvpData);

  const uploadData = (): void => {
    setIsLoading(true);

    const rsvp: TableEntity = {
      partitionKey,
      rowKey: new Date().getTime().toString(),
      ... data()
    };

    tableClient.createEntity(rsvp).then((): void => {
      setData(defaultRsvpData);
      console.log("Successfully created");
    }).finally((): void => {
      setIsLoading(false);
    });
  }

  const updateFormField = (fieldName: keyof RSVP) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    setData({
      ...data(),
      [fieldName]: inputElement.value
    });
  };

  const updateCheckbox = (fieldName: keyof RSVP) => () => {
    setData({
      ...data(),
      [fieldName]: !data()[fieldName]
    });
  }

  const updateDietaryRestriction = (selection: DietaryRestriction) => () => {
    setData({
      ...data(),
      dietaryRestriction: selection
    });
  }

  const updateCardColor = (selection: CardColor) => () => {
    setData({
      ...data(),
      cardColor: selection
    });
  }

  const updateImage = async (e: Event): Promise<void> => {
    setIsLoading(true);
    const target = e.target as HTMLInputElement;

    if(!target.files || target.files.length === 0) return;

    const file = target.files[0];

    ImageTools.resize(file, {width: 300, height: 300}, (blob: File, success: boolean) => {
      if(success) {
        const blobName = `${file.name} - ${new Date().getTime().toString()}`;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        blockBlobClient.uploadData(blob).then((res): void => {
          setData({
            ...data(),
            "imageRef": blobName
          })
        }).finally((): void => {
          setIsLoading(false);
        });
      } else {
        console.log("Image failed to resize");
        //TODO: do something about this
      }
    })
  }

  const getButtonStyle = (type: CardColor, inputClass: string): string => {
    const base = "self-center btn ";

    if(data().cardColor === type || data().cardColor === "") {
      return base + "mask mask-heart " + inputClass;
    } else {
      return base + "btn-xs btn-circle " + inputClass;
    }
  }

  return (
    <div class="w-full min-h-full bg-secondary bg-opacity-40">
      <div class="p-20 flex flex-col justify-between text-center gap-8">
        <h1 class="flex-none text-4xl font-extrabold md:text-6xl">RSVP</h1>
        <div class="flex-none">
          <div class="flex flex-wrap justify-between">
            <input type="text" placeholder="First Name" class="input input-bordered w-full max-w-xs" value={data().firstName} onChange={updateFormField("firstName")} />
            <input type="text" placeholder="Last Name" class="input input-bordered w-full max-w-xs" value={data().lastName} onChange={updateFormField("lastName")} />
            <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" value={data().email} onChange={updateFormField("email")} />
          </div>
        </div>
        <div class="flex-none form-control">
          <div class="flex flex-wrap justify-between">
            <div class="dropdown dropdown-hover">
              <label tabindex="0" class="btn m-1">{"Dietary Restriction: " + data().dietaryRestriction}</label>
              <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a onClick={updateDietaryRestriction("None")}>None</a></li>
                <li><a onClick={updateDietaryRestriction("Vegetarian")}>Vegetarian</a></li>
                <li><a onClick={updateDietaryRestriction("Vegan")}>Vegan</a></li>
                <li><a onClick={updateDietaryRestriction("GlutenFree")}>Gluten-Free</a></li>
                <li><a onClick={updateDietaryRestriction("Other")}>Other</a></li>
              </ul>
            </div>
            <Show when={data().dietaryRestriction === "Other"}>
              <input type="text" placeholder="Please specify" class="input input-bordered w-full max-w-[200px]" value={data().dietaryRestrictionOther} onChange={updateFormField("dietaryRestrictionOther")} />
            </Show>
            <div class="flex-none">
              <label class="label cursor-pointer">
                <span class="label-text font-bold text-xl mr-5">Add me to the public attendees list (recommended!)</span>
                <input type="checkbox" class="checkbox checkbox-primary checkbox-lg" checked={data().addToAttendees} onClick={updateCheckbox("addToAttendees")} />
              </label>
            </div>
          </div>
        </div>
        <Show when={data().addToAttendees}>
          <div>
            <div class="divider" />
            <div class="flex justify-around bg-base-300 rounded-box p-8">
              <div class="flex flex-col gap-3">
                <div>
                  <label class="label">
                    <span class="label-text text-lg font-bold">Select a color for your card on the attendees page</span>
                  </label>
                  <div class="flex justify-around bg-base-100 rounded-box p-3">
                    <button onClick={updateCardColor("Primary")} class={getButtonStyle("Primary", "btn-primary")} />
                    <button onClick={updateCardColor("Secondary")} class={getButtonStyle("Secondary", "btn-secondary")} />
                    <button onClick={updateCardColor("Accent")} class={getButtonStyle("Accent", "btn-accent")} />
                    <button onClick={updateCardColor("Neutral")} class={getButtonStyle("Neutral", "bg-neutral")} />
                    <button onClick={updateCardColor("Base")} class={getButtonStyle("Base", "btn-active btn-ghost")} />
                  </div>
                </div>
                <div>
                  <label class="label">
                    <span class="label-text text-lg font-bold">Upload a photo of yourself for the attendees page</span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                    class="file-input file-input-primary file-input-lg w-full max-w-xs"
                  />
                </div>
              </div>
              <textarea class="flex-1 mx-5 textarea textarea-bordered text-lg" placeholder="Tell us how you know Rob & Haley!" value={data().blurb} onChange={updateFormField("blurb")}/>
            </div>
            <div class="divider" />
          </div>
        </Show>
        <div class="flex-none">
          <button class={"btn btn-primary btn-lg btn-wide" + (isLoading() ? " btn-disabled" : "")} onClick={uploadData}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}