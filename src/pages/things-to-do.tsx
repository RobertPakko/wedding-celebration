import { wind } from "tailwindest";
import { daisy } from "../daisy-typed/daisy-typed";
import { Icon } from "../components/icon";
import { For } from "solid-js";

const account = import.meta.env.VITE_STORAGE_ACCOUNT;
const sasToken = import.meta.env.VITE_SAS_TOKEN;
const assetContainer = import.meta.env.VITE_ASSET_CONTAINER;

const content: {
  imageRef: string,
  title: string,
  tag: "Events" | "Sightseeing" | "Museums" | "Activities",
  description: string
  link: string
}[] = [
  {
    imageRef: "SeaFair.jpg",
    title: "Seafair Weekend Festival",
    tag: "Events",
    description: "Our Wedding Celebration also happens to fall on the annual Seafair Weekend Festival (you’re welcome!). On Friday or Saturday, head down to check out the Boeing Seafair Airshow (featuring the Blue Angels), Hydroplane Races, and Classic Car Show. We HIGHLY recommend it!",
    link: "https://www.seafair.org/"
  }
]

const getImageLink = (imageRef: string): string => `https://${account}.blob.core.windows.net/${assetContainer}/${imageRef}${sasToken}`

export default function ThingsToDo() {
  return (
    <div class={wind({
      display: "flex",
      paddingTop: "pt-16",
      gap: "gap-10",
      minHeight: "min-h-screen",
      backgroundImage: "bg-gradient-to-r",
      backgroundImageGradientStart: "from-yellow-500",
      backgroundImageGradientEnd: "to-emerald-500",
      "@lg": {
        padding: "lg:p-16"
      }
    }).class()}>
      <For each={content}>{(thing) =>
        <div class={daisy("card")({addedClass: wind({boxShadow: "shadow-xl", maxHeight: "max-h-[500px]", maxWidth: "max-w-prose"}).class(), color: "bg-base-100"})}>
          <figure>
            <img src={getImageLink(thing.imageRef)}/>
          </figure>
          <div class={daisy("card-body")({addedClass: daisy("prose")({})})}>
            <h2 class={daisy("card-title")({addedClass: wind({margin: "m-0"}).class()})}>
              {thing.title}
              <div class={daisy("badge")({modifiers: ["secondary"]})}>{thing.tag}</div>
            </h2>
            <p class={wind({margin: "m-0"}).class()}>{thing.description}</p>
            <div class={daisy("card-actions")({addedClass: wind({justifyContent: "justify-end"}).class()})}>
              <a href={thing.link} target="_blank" class={daisy("btn")({modifiers: ["circle", "primary"]})}>
                <Icon icon="link"/>
              </a>
            </div>
          </div>
        </div>
      }</For>
    </div>
  );
}