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
  tag: "Events" | "Sightseeing" | "Museums" | "Activities" | "Sports" | "Theater",
  description: string
  link: string
}[] = [
  {
    imageRef: "SeaFair.jpg",
    title: "Seafair Weekend Festival",
    tag: "Events",
    description: "Our Wedding Celebration also happens to fall on the annual Seafair Weekend Festival (you’re welcome!). On Friday or Saturday, head down to check out the Boeing Seafair Airshow (featuring the Blue Angels), Hydroplane Races, and Classic Car Show. We HIGHLY recommend it!",
    link: "https://www.seafair.org/"
  },
  {
    imageRef: "kayak.webp",
    title: "Kayak or Paddleboard on Lake Union",
    tag: "Activities",
    description: "On a beautiful summer day in Seattle, there’s nothing like paddling out on Lake Union and enjoying the gorgeous views of the city skyline and Gas Works Park.",
    link: "https://www.nwoc.com/"
  },
  {
    imageRef: "hikes.jpg",
    title: "Hikes",
    tag: "Activities",
    description: "Some of the best hiking in the world is right here in the PNW. Popular hikes include Discovery Park, Rattlesnake Ledge, and Snoqualmie Falls, and but there are many others.",
    link: "https://www.wta.org/go-outside"
  },
  {
    imageRef: "pike_place_market.jpg",
    title: "Pike Place Market",
    tag: "Sightseeing",
    description: "No visit to Seattle is complete without a stop at this iconic marketplace! Check out the flying fish, the first Starbucks, or any of the great vendors.",
    link: "https://www.pikeplacemarket.org/"
  },
  {
    imageRef: "mopop.jpg",
    title: "Museum of Pop Culture (MoPOP)",
    tag: "Museums",
    description: "Museum at the Seattle Center dedicated to contemporary popular culture.",
    link: "https://www.mopop.org/"
  },
  {
    imageRef: "fremontMarket.jpg",
    title: "Fremont Sunday Market",
    tag: "Activities",
    description: "Cool farmer’s market in a quirky neighborhood to check out on Sunday morning.",
    link: "http://www.fremontmarket.com/"
  },
  {
    imageRef: "pinball.jpg",
    title: "Seattle Pinball Museum",
    tag: "Activities",
    description: "Fun spot with unlimited play for one price, featuring pinball machines from the 1950’s to the present.",
    link: "https://www.seattlepinballmuseum.com/"
  },
  {
    imageRef: "theo.jpg",
    title: "Theo Chocolate Factory",
    tag: "Activities",
    description: "Sign up for a Factory Tour to see how Theo Chocolate is made, right at their Fremont Factory!",
    link: "https://theochocolate.com/factory-tours"
  },
  {
    imageRef: "underground.jpg",
    title: "Beneath the Streets: Underground History Tours",
    tag: "Activities",
    description: "Did you know the Pioneer Square neighborhood used to be one story lower than it is today? Check out this amazing guided subterranean tour of ruins buried after the Great Seattle Fire of 1889, including storefronts and sidewalks.",
    link: "https://www.beneath-the-streets.com/"
  },
  {
    imageRef: "aquarium.jpg",
    title: "Seattle Aquarium",
    tag: "Activities",
    description: "Beautiful aquarium located right on the waterfront.",
    link: "https://www.seattleaquarium.org/"
  },
  {
    imageRef: "zoo.jpg",
    title: "Woodland Park Zoo",
    tag: "Activities",
    description: "Great zoo in the park by Green Lake.",
    link: "https://www.zoo.org/"
  },
  {
    imageRef: "olympic_sculpture_park.jpg",
    title: "Olympic Sculpture Park",
    tag: "Sightseeing",
    description: "Beautiful waterfront park to walk through with cool sculptures. Be sure to stop by the gorgeous Myrtle Edwards Park next door as well.",
    link: "https://www.seattleartmuseum.org/visit/olympic-sculpture-park"
  },
  {
    imageRef: "science_center.jpg",
    title: "Pacific Science Center",
    tag: "Museums",
    description: "Interactive science museum, fun for kids and adults alike!",
    link: "https://pacificsciencecenter.org/"
  },
  {
    imageRef: "flight_museum.jpg",
    title: "The Museum of Flight",
    tag: "Museums",
    description: "Air and space museum with over 175 aircraft and spacecraft to explore.",
    link: "https://www.museumofflight.org/"
  },
  {
    imageRef: "chihuly_garden_and_glass.jpg",
    title: "Chihuly Garden and Glass",
    tag: "Museums",
    description: "Art exhibit at the Seattle Center featuring glass sculpture works by Dale Chihuly.",
    link: "https://www.chihulygardenandglass.com/"
  },
  {
    imageRef: "mohai.png",
    title: "Museum of History & Industry (MOHAI)",
    tag: "Museums",
    description: "Museum telling Seattle’s story, from an age when Native American cultures first came into contact with Europeans to the region’s transformation into a major global hub.",
    link: "https://mohai.org/"
  },
  {
    imageRef: "art_museum.jpg",
    title: "Seattle Art Museum",
    tag: "Museums",
    description: "Art museum located in downtown Seattle near Pike Place Market.",
    link: "https://www.seattleartmuseum.org/"
  },
  {
    imageRef: "space_needle.jpg",
    title: "Space Needle",
    tag: "Sightseeing",
    description: "If you wanna see Seattle from up high and check this off your Seattle bucket list.",
    link: "https://www.museumofflight.org/"
  },
  {
    imageRef: "ol_reign.png",
    title: "OL Reign",
    tag: "Sports",
    description: "Women’s soccer game on Sunday, 8/6 at 3pm.",
    link: "https://www.olreign.com/"
  },
  {
    imageRef: "seattle_storm.png",
    title: "Seattle Storm",
    tag: "Sports",
    description: "Women’s basketball game on Saturday, 8/5 at 7pm.",
    link: "https://storm.wnba.com/"
  },
  {
    imageRef: "1776_the_musical.webp",
    title: "1776",
    tag: "Theater",
    description: "A musical by 5th Avenue Theatre.",
    link: "https://www.5thavenue.org/"
  }
];

export default function ThingsToDo() {
  return (
    <div class={wind({
      display: "flex",
      flexWrap: "flex-wrap",
      justifyContent: "justify-evenly",
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
            <img src={`https://${account}-secondary.blob.core.windows.net/${assetContainer}/${thing.imageRef}${sasToken}`}/>
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