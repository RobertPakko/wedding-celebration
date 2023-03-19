import { createSignal, For } from "solid-js";

interface Person {
  imageUrl: string
  name: string
  blurb: string
}

export default function Attendees() {
  const [people, setPeople] = createSignal<Person[]>([
    { name: "Robert Pakko", blurb: "The groom!", imageUrl: "/src/assets/Rob.jpg" },
    { name: "Haley Clafton", blurb: "The bride!", imageUrl: "/src/assets/Haley.jpg" }
  ]);

  return (
    <div class="m-12 flex flex-wrap">
      <For each={people()}>{(person) =>
        <div class="card mx-5 w-[200px] shadow-xl bg-primary bg-opacity-40">
          <figure class="px-[20px] pt-[20px] h-[180px]">
            <img class="rounded-xl" src={person.imageUrl} alt={"Picture of " + person.name} />
          </figure>
          <div class="card-body p-5">
            <h2 class="text-sm card-title">{person.name}</h2>
            <p class="text-sm">{person.blurb}</p>
          </div>
        </div>
      }</For>
    </div>
  );
}