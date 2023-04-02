import { RSVPRef } from "../App";
import { wind } from "tailwindest";
import { daisy } from "../daisy-typed/daisy-typed";
import { Icon } from "../components/icon";

const account = import.meta.env.VITE_STORAGE_ACCOUNT;
const sasToken = import.meta.env.VITE_SAS_TOKEN;
const assetContainer = import.meta.env.VITE_ASSET_CONTAINER;

const imageUrl = `https://${account}-secondary.blob.core.windows.net/${assetContainer}/Seattle.jpg${sasToken}`

export default function Home() {
  return (
    <div class={daisy("hero")({addedClass: wind({height: "h-screen"}).class()})} style={`background-image: url(${imageUrl});`}>
      <div class={daisy("hero-overlay")({addedClass: "bg-opacity-60"})}></div>
      <div class={daisy("hero-content")({addedClass: wind({
        display: "flex",
        flexDirection: "flex-col",
        width: "w-full",
        maxWidth: "max-w-screen-2xl",
        height: "h-full",
        alignContent: "content-center",
      }).class()})}>
        <div class={daisy("card")({color: "bg-base-100", addedClass: "lg:card-side " + wind({boxShadow: "shadow-xl"}).class()})}>
          <figure class={wind({maxWidth: "max-w-screen-md"}).class()}>
            <img
              src={`https://${account}-secondary.blob.core.windows.net/${assetContainer}/${"carkeek_park.jpg"}${sasToken}`}
            />
          </figure>
          <div class={daisy("card-body")({addedClass: daisy("prose")({addedClass: "[&>*]:m-0"})})}>
            <h1 class={wind({ alignSelf: "self-center" }).class()}>You're Invited!</h1>
            <div class={daisy("divider")({addedClass: wind({margin: "m-0"}).class()})}/>
            <h2>Haley and Rob's Wedding Celebration</h2>
            <p>We married in an intimate ceremony in Michigan this winter, but we'd love for you to come celebrate with us in Seattle this summer!</p>
            <h2>Where:</h2>
            <p>Sunday, August 6th, 2023 Noon to Evening</p>
            <h2>When:</h2>
            <p>Carkeek Park<br/>950 NW Carkeek Park Rd<br/>Seattle, WA 98177</p>
            <div class={daisy("card-actions")({addedClass: wind({justifyContent: "justify-end", gap: "gap-5"}).class()})}>
              <a href={RSVPRef} class={daisy("btn")({modifiers: ["primary"], addedClass: wind({gap: "gap-2"}).class()})}>
                <Icon icon="checkCircle"/>
                RSVP
              </a>
              <a class={daisy("btn")({modifiers: ["secondary"], addedClass: wind({gap: "gap-2"}).class()})} target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NG5mdWJrN3E2cjJiZ2FjdWZlNjFsb2FhcW4gcm9iZXJ0cGFra29AbQ&amp;tmsrc=robertpakko%40gmail.com">
                <Icon icon="calendar"/>
                Add to Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}