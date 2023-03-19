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
        <div class="card mx-5 w-60 shadow-xl bg-primary bg-opacity-40">
          <figure class="px-10 pt-10 h-60 w-60">
            <img class="rounded-xl" src={person.imageUrl} alt={"Picture of " + person.name} />
          </figure>
          <div class="card-body bg-secondary-100">
            <h2 class="card-title">{person.name}</h2>
            <p>{person.blurb}</p>
          </div>
        </div>
      }</For>
    </div>
  );
}