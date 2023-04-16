import { AzureSASCredential, TableClient } from "@azure/data-tables";
import { createSignal, For, onMount, Show } from "solid-js";
import { CardColor } from "./rsvp";
import { wind } from "tailwindest";
import { daisy } from "../daisy-typed/daisy-typed";

const account = import.meta.env.VITE_STORAGE_ACCOUNT;
const sasToken = import.meta.env.VITE_SAS_TOKEN;
const tableName = import.meta.env.VITE_TABLE_NAME;
const blobContainer = import.meta.env.VITE_BLOB_CONTAINER;

export interface Person {
  imageRef: string
  firstName: string
  cardColor: CardColor
  lastName: string
  blurb: string
  rowkey: number
}

export default function Attendees() {
  const tableClient = new TableClient(
    `https://${account}.table.core.windows.net`,
    tableName,
    new AzureSASCredential(sasToken)
  );

  const [people, setPeople] = createSignal<Person[]>([]);

  onMount(async () => {
    const attendees = tableClient.listEntities({
      queryOptions: {
        select: ["firstName", "lastName", "blurb", "cardColor", "imageRef", "rowkey"],
        filter: "addToAttendees eq true and ableToAttend eq true"
      }
    });

    const tempArr: Person[] = [];

    for await (const person of attendees) {
      tempArr.push(person as unknown as Person);
    }

    tempArr.sort((a, b): number => {
      if(a.imageRef !== "") {
        return -1;
      } else if(b.imageRef !== "") {
        return 1;
      } else if(a.blurb !== "") {
        return -1;
      } else if(b.blurb !== "") {
        return 1;
      } else {
        return a.rowkey - b.rowkey;
      }
    });

    setPeople(tempArr);
  });

  const getCardStyle = (color: CardColor): string => {
    switch(color) {
      case "Secondary": return daisy("card")({color: "bg-secondary"});
      case "Accent": return daisy("card")({color: "bg-accent"});
      case "Base": return daisy("card")({color: "bg-base-300"});
      case "Neutral": return daisy("card")({color: "bg-neutral", addedClass: "text-neutral-content"});
      default: return daisy("card")({color: "bg-primary"});
    }
  }

  return (
    <div class={wind({
      display: "flex",
      flexWrap: "flex-wrap",
      justifyContent: "justify-evenly",
      paddingY: "py-16",
      gap: "gap-10",
      minHeight: "min-h-screen",
      backgroundImage: "bg-gradient-to-r",
      backgroundImageGradientStart: "from-violet-500",
      backgroundImageGradientEnd: "to-cyan-500"
    }).class()}>
      <For each={people()}>{(person) =>
        <div class={wind({boxShadow: "shadow-xl", padding: "p-6", width: "w-64", height: "h-96"}).class() + " " + getCardStyle(person.cardColor)}>
          <Show when={person.imageRef !== ""}>
            <div class={daisy("avatar")({addedClass: wind({alignSelf: "self-center"}).class() })}>
              <div class={daisy("mask")({modifiers: ["squircle"], addedClass: wind({width: "w-44"}).class()})}>
                <img
                  src={`https://${account}.blob.core.windows.net/${blobContainer}/${person.imageRef + sasToken}`}
                  alt={"Picture of " + person.firstName + " " + person.lastName}
                />
              </div>
            </div>
          </Show>
          <Show when={person.imageRef === ""}>
            <div class={daisy("avatar")({modifiers: ["placeholder"], addedClass: wind({alignSelf: "self-center"}).class()})}>
              <div class={daisy("mask")({
                color: "bg-base-100",
                modifiers: ["squircle"],
                addedClass: wind({width: "w-44"
              }).class()})}>
                <span class={daisy("")({color: "text-neutral", addedClass: wind({fontSize: "text-3xl"}).class()})}>
                  {(person.firstName ? person.firstName[0] : "") + " " + (person.lastName ? person.lastName[0] : "")}
                </span>
              </div>
            </div>
          </Show>
          <div class={daisy("card-body")({addedClass: wind({paddingX: "px-0", paddingBottom: "pb-0", paddingTop: "pt-3"}).class()})}>
            <h2 class={daisy("card-title")({addedClass: wind({alignSelf: "self-center"}).class()}) + " whitespace-nowrap"}>{person.firstName + " " + person.lastName}</h2>
            <Show when={person.blurb !== ""}>
              <p class={daisy("")({color: "text-base-content", addedClass: daisy("")({color: "bg-base-100", addedClass: wind({
                overflow: "overflow-y-auto",
                height: "h-28",
                borderRadius: "rounded-md",
                padding: "p-2"
              }).class()})})}>
                {person.blurb}
              </p>
            </Show>
          </div>
        </div>
      }</For>
      <Show when={people().length > 0}>
        <div class={wind({boxShadow: "shadow-xl", padding: "p-6", width: "w-64", height: "h-96"}).class() + " " + daisy("card")({"color": "bg-base-100"})}>
          <div class={daisy("card-body")({addedClass: wind({paddingX: "px-0", paddingBottom: "pb-0", paddingTop: "pt-3"}).class()})}>
            <h2 class={daisy("card-title")({})}>Problem with RSVP?</h2>
            <p>
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
      </Show>
    </div>
  );
}
