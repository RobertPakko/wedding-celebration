import { AzureSASCredential, TableClient, TableEntity } from "@azure/data-tables";
import { createSignal, Show } from "solid-js";

type CardColor = "" | "Primary" | "Secondary" | "Accent" | "Neutral" | "Base";
type DietaryRestriction = "None" | "Vegetarian" | "Vegan" | "GlutenFree" | "Other";

interface RSVP {
  imageUrl: string
  firstName: string
  lastName: string
  blurb: string
  email: string
  cardColor: CardColor
  dietaryRestriction: DietaryRestriction
  dietaryRestrictionOther: string
  addToAttendees: boolean
}

const account = "rhweddingstorage";
const sasToken = "";
const tableName = "rsvp";
const partitionKey = tableName;

export default function RSVP() {
  const client = new TableClient(
    `https://${account}.table.core.windows.net`,
    tableName,
    new AzureSASCredential(sasToken)
  );


  const [data, setData] = createSignal<RSVP>({
    firstName: "",
    lastName: "",
    blurb: "",
    email: "",
    imageUrl: "",
    cardColor: "",
    dietaryRestriction: "None",
    dietaryRestrictionOther: "",
    addToAttendees: true
  });

  const uploadData = (): void => {
    const marker: TableEntity = {
      partitionKey,
      rowKey: "3",
      name: "Markers3",
      price: 5.0,
      quantity: 34
    };

    client.createEntity(marker).then((): void => {
      console.log("Successfully created");
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
    console.log(getButtonStyle("Accent", "btn-accent"));

    setData({
      ...data(),
      cardColor: selection
    });
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
                  <input type="file" class="file-input file-input-primary file-input-lg w-full max-w-xs" />
                </div>
              </div>
              <textarea class="flex-1 mx-5 textarea textarea-bordered text-lg" placeholder="Tell us how you know Rob & Haley!" value={data().blurb} onChange={updateFormField("blurb")}/>
            </div>
            <div class="divider" />
          </div>
        </Show>
        <div class="flex-none">
          <button class="btn btn-primary btn-lg btn-wide" onClick={uploadData}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}