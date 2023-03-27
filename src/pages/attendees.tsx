import { AzureSASCredential, TableClient } from "@azure/data-tables";
import { createSignal, For, onMount } from "solid-js";
import { CardColor } from "./rsvp";

const account = import.meta.env.VITE_STORAGE_ACCOUNT;
const sasToken = import.meta.env.VITE_SAS_TOKEN;
const tableName = import.meta.env.VITE_TABLE_NAME;

export interface Person {
  imageUrl: string
  firstName: string
  cardColor: CardColor
  lastName: string
  blurb: string
}

export default function Attendees() {
  const client = new TableClient(
    `https://${account}.table.core.windows.net`,
    tableName,
    new AzureSASCredential(sasToken)
  );

  const [people, setPeople] = createSignal<Person[]>([]);

  onMount(async () => {
    const attendees = client.listEntities({
      queryOptions: {
        select: ["firstName", "lastName", "blurb", "cardColor"],
        filter: "addToAttendees eq true"
      }
    });

    const tempArr: Person[] = [];
    for await (const person of attendees) {
      tempArr.push(person as unknown as Person);
    }

    console.log(tempArr);
    setPeople(tempArr);
  });

  const getButtonStyle = (color: CardColor): string => {
    switch(color) {
      case "Secondary": return "bg-secondary bg-opacity-40";
      case "Accent": return "bg-accent bg-opacity-40";
      case "Base": return "bg-base-300";
      case "Neutral": return "bg-neutral text-neutral-content";
      default: return "bg-primary bg-opacity-40";
    }
  }

  return (
    <div class="m-12 flex flex-wrap">
      <For each={people()}>{(person) =>
        <div class={"card mx-5 w-[200px] shadow-xl " + getButtonStyle(person.cardColor)}>
          <figure class="px-[20px] pt-[20px] h-[180px]">
            <img class="rounded-xl" src={person.imageUrl} alt={"Picture of " + person.firstName + " " + person.lastName} />
          </figure>
          <div class="card-body p-5">
            <h2 class="text-sm card-title">{person.firstName + " " + person.lastName}</h2>
            <p class="text-sm">{person.blurb}</p>
          </div>
        </div>
      }</For>
    </div>
  );
}