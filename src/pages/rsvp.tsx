import { AzureSASCredential, TableClient, TableEntity } from "@azure/data-tables";
import { BlobServiceClient, newPipeline } from "@azure/storage-blob";
import { createSignal, Show } from "solid-js";
import { Person } from "./attendees";
import { ImageTools } from "../services/image-tools";
import { wind } from "tailwindest";
import { daisy } from "../daisy-typed/daisy-typed";
import { Icon } from "../components/icon";

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
  ableToAttend: boolean,
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
  ableToAttend: true,
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
  const [showToast, setShowToast] = createSignal(false);

  const [data, setData] = createSignal<RSVP>(defaultRsvpData);

  const uploadData = (): void => {
    setIsLoading(true);

    const rsvp: TableEntity = {
      partitionKey,
      rowKey: new Date().getTime().toString(),
      ...data()
    };

    tableClient.createEntity(rsvp).then((): void => {
      setData(defaultRsvpData);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
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

    if (!target.files || target.files.length === 0) return;

    const file = target.files[0];

    ImageTools.resize(file, { width: 500, height: 500 }, (blob: File, success: boolean) => {
      if (success) {
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
        // I've never had this happen so I'm not gonna put an alert here
        console.log("Image failed to resize");
      }
    })
  }

  const getButtonStyle = (type: CardColor, inputClass: string): string => {
    const base = "self-center btn ";

    if (data().cardColor === type || data().cardColor === "") {
      return base + "mask mask-heart " + inputClass;
    } else {
      return base + "btn-sm btn-circle " + inputClass;
    }
  }

  return (
    <div class={wind({
      display: "flex",
      flexDirection: "flex-col",
      minHeight: "min-h-screen",
      paddingY: "py-16",
      alignItems: "items-center",
      backgroundImage: "bg-gradient-to-r",
      backgroundImageGradientStart: "from-emerald-500",
      backgroundImageGradientEnd: "to-pink-500"
    }).class()}>
      <div class={daisy("card")({addedClass: wind({boxShadow: "shadow-xl", maxWidth: "max-w-[100%]"}).class(), color: "bg-base-100"})}>
        <div class={daisy("card-body")({addedClass: wind({
          display: "flex",
          flexDirection: "flex-col",
          alignItems: "items-center",
          gap: "gap-10"
        }).class()})}>
          <article class={daisy("prose")({addedClass: wind({width: "w-full"}).class()})}>
            <h1 class={wind({textAlign: "text-center"}).class()}>RSVP</h1>
            <div class={daisy("divider")({addedClass: wind({margin: "m-0"}).class()})}/>
          </article>
          <div class={wind({display: "flex", flexWrap: "flex-wrap", gap: "gap-10", justifyContent: "justify-evenly"}).class()}>
            <input
              type="text"
              placeholder="First Name"
              value={data().firstName}
              onChange={updateFormField("firstName")}
              class={daisy("input")({modifiers: ["bordered"]})}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={data().lastName}
              onChange={updateFormField("lastName")}
              class={daisy("input")({modifiers: ["bordered"]})}
            />
            <input
              type="text"
              placeholder="Email"
              value={data().email}
              onChange={updateFormField("email")}
              class={daisy("input")({modifiers: ["bordered"]})}
            />
          </div>
          <div class={wind({display: "flex", flexWrap: "flex-wrap", gap: "gap-10", justifyContent: "justify-evenly"}).class()}>
            <label class={daisy("label")({})}>
              <span class={daisy("label-text")({addedClass: wind({
                fontWeight: "font-bold",
                fontSize: "text-lg",
                marginRight: "mr-5"
              }).class()})}>
                Will you be able to attend?
              </span>
            </label>
            <label class={daisy("label")({modifiers: ["cursorPointer"]})}>
              <span class={daisy("label-text")({addedClass: wind({
                marginRight: "mr-5",
                fontWeight: "font-bold",
                fontSize: "text-lg"
              }).class()})}>
                Yes
              </span>
              <input
                type="radio"
                name="radio-10"
                class="radio checked:bg-green-500"
                checked={data().ableToAttend === true}
                onClick={() => setData({
                  ...data(),
                  "ableToAttend": true
                })}
              />
            </label>
            <label class={daisy("label")({modifiers: ["cursorPointer"]})}>
              <span class={daisy("label-text")({addedClass: wind({
                marginRight: "mr-5",
                fontWeight: "font-bold",
                fontSize: "text-lg"
              }).class()})}>No</span>
              <input
                type="radio"
                name="radio-10"
                class="radio checked:bg-red-500"
                checked={data().ableToAttend === false}
                onClick={() => setData({
                  ...data(),
                  "ableToAttend": false
                })}
              />
            </label>
          </div>
          <Show when={data().ableToAttend}>
            <div class={daisy("divider")({addedClass: wind({margin: "m-0"}).class()})}/>
            <div class={wind({display: "flex", flexWrap: "flex-wrap", gap: "gap-10"}).class()}>
              <div class={daisy("dropdown")({modifiers: ["hover"]})}>
                <label tabindex="0" class={daisy("btn")({})}>{"Dietary Restriction: " + data().dietaryRestriction}</label>
                <ul tabindex="0" class={daisy("dropdown-content")({color: "bg-base-300", addedClass: daisy("menu")({addedClass: wind({
                    padding: "p-2",
                    boxShadow: "shadow",
                    borderRadius: "rounded-xl",
                    width: "w-52"
                  }).class()})})}>
                  <li><a onClick={updateDietaryRestriction("None")}>None</a></li>
                  <li><a onClick={updateDietaryRestriction("Vegetarian")}>Vegetarian</a></li>
                  <li><a onClick={updateDietaryRestriction("Vegan")}>Vegan</a></li>
                  <li><a onClick={updateDietaryRestriction("GlutenFree")}>Gluten-Free</a></li>
                  <li><a onClick={updateDietaryRestriction("Other")}>Other</a></li>
                </ul>
              </div>
              <Show when={data().dietaryRestriction === "Other"}>
                <input
                  type="text"
                  placeholder="Please specify"
                  value={data().dietaryRestrictionOther}
                  onChange={updateFormField("dietaryRestrictionOther")}
                  class={daisy("input")({modifiers: ["bordered"]})}
                />
              </Show>
            </div>
            <label class={daisy("label")({modifiers: ["cursorPointer"]})}>
              <span class={daisy("label-text")({addedClass: wind({
                fontWeight: "font-bold",
                fontSize: "text-xl",
                marginRight: "mr-5"
              }).class()})}>Add me to the public attendees list (recommended!)</span>
              <input
                type="checkbox"
                class={daisy("checkbox")({modifiers: ["primary", "large"]})}
                checked={data().addToAttendees}
                onClick={updateCheckbox("addToAttendees")}
              />
            </label>
            <Show when={data().addToAttendees}>
              <div class={daisy("divider")({addedClass: wind({margin: "m-0"}).class()})}/>
              <div class={wind({display: "flex", flexDirection: "flex-col", alignItems: "items-center", maxWidth: "max-w-[100%]"}).class()}>
                <label class={daisy("label")({})}>
                  <span class={daisy("label-text")({addedClass: wind({
                    fontWeight: "font-bold",
                    fontSize: "text-lg"
                  }).class()})}>Select a color for your card on the attendees page:</span>
                </label>
                <div class={wind({
                  display: "flex",
                  flexWrap: "flex-wrap",
                  justifyContent: "justify-evenly",
                  width: "w-full"
                }).class()}>
                  <button onClick={updateCardColor("Primary")} class={getButtonStyle("Primary", "btn-primary")} />
                  <button onClick={updateCardColor("Secondary")} class={getButtonStyle("Secondary", "btn-secondary")} />
                  <button onClick={updateCardColor("Accent")} class={getButtonStyle("Accent", "btn-accent")} />
                  <button onClick={updateCardColor("Neutral")} class={getButtonStyle("Neutral", "bg-neutral")} />
                  <button onClick={updateCardColor("Base")} class={getButtonStyle("Base", "btn-active btn-ghost")} />
                </div>
              </div>
              <div class={wind({display: "flex", flexDirection: "flex-col", alignItems: "items-center", maxWidth: "max-w-[100%]"}).class()}>
                <label class={daisy("label")({})}>
                  <span class={daisy("label-text")({addedClass: wind({
                    fontWeight: "font-bold",
                    fontSize: "text-lg"
                  }).class()})}>Upload a photo of yourself for the attendees page</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={updateImage}
                  class={daisy("file-input")({modifiers: ["primary", "large"], addedClass: wind({maxWidth: "max-w-[100%]"}).class()})}
                />
              </div>
              <textarea
                class={daisy("textarea")({modifiers: ["bordered", "large"], addedClass: wind({width: "w-full", minHeight: "min-h-[140px]"}).class()})}
                placeholder="Tell us how you know Haley & Rob! (or who you’re attending with)"
                value={data().blurb}
                onChange={updateFormField("blurb")}
              />
              <div class={daisy("divider")({addedClass: wind({margin: "m-0"}).class()})} />
            </Show>
          </Show>
          <button
            class={daisy("btn")({
              modifiers: ["primary", "large", "wide"],
              addedClass: isLoading() ? daisy("btn")({modifiers: ["disabled"]}) : undefined
            })}
            onClick={uploadData}
          >
            SUBMIT
          </button>
          <p class={wind({textAlign: "text-center"}).class()}>
            If you need to adjust or remove your RSVP, just reach out to Rob at <a
              class={daisy("link")({})}
              href="mailto:RobertPakko@gmail.com"
              onClick={(event) => {
                window.open('mailto:mail@domain.com', 'mail');
                event.preventDefault();
              }}
            >
              RobertPakko@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Show when={showToast()}>
        <div class={daisy("toast")({addedClass: wind({marginY: "my-10", marginX: "mx-14"}).class()})}>
          <div class={daisy("alert")({modifiers: ["success"], addedClass: wind({gapY: "gap-y-0"}).class()})}>
            <Icon icon="checkCircle"/>
            <span class={wind({
              fontWeight: "font-medium",
              fontSize: "text-lg",
              textAlign: "text-center"
            }).class()}>
              RSVP submitted successfully
            </span>
          </div>
        </div>
      </Show>
    </div>
  );
}