import { RSVPRef } from "../App";
import { wind } from "tailwindest";
import { daisy } from "../daisy-typed/daisy-typed";

const account = import.meta.env.VITE_STORAGE_ACCOUNT;
const sasToken = import.meta.env.VITE_SAS_TOKEN;
const assetContainer = import.meta.env.VITE_ASSET_CONTAINER;

const imageUrl = `https://${account}.blob.core.windows.net/${assetContainer}/Seattle.jpg${sasToken}`

const h1Style = wind({
  fontSize: "text-4xl",
  fontWeight: "font-extrabold",
  "@md": {
      fontSize: "md:text-6xl"
  }
}).class()

const h2Style = wind({
  fontSize: "text-4xl",
  fontWeight: "font-bold",
  "@md": {
      fontSize: "md:text-6xl"
  }
}).class();

export default function Home() {
  return (
    <div class={daisy("hero")({addedClass: wind({height: "h-screen"}).class()})} style={`background-image: url(${imageUrl});`}>
      <div class={daisy("hero-overlay")({addedClass: "bg-opacity-60"})}></div>
      <div class={daisy("hero-content")({color: "text-neutral-content", addedClass: wind({
        position: "absolute",
        display: "flex",
        flexDirection: "flex-col",
        justifyContent: "justify-around",
        width: "w-full",
        height: "h-full",
        alignContent: "content-center",
      }).class()})}>
        <h1 class={h1Style}>You're Invited</h1>
        <h2 class={h2Style}>To Haley and Rob's Wedding Celebration</h2>
        <h2 class={h2Style}>At Noon on August 6th, 2023</h2>
        <h2 class={h2Style}>In Carkeek Park, Seattle</h2>
        <div class={wind({display: "flex", gap: "gap-10"}).class()}>
          <a href={RSVPRef} class={daisy("btn")({modifiers: ["primary", "large", "wide"], addedClass: wind({fontSize: "text-4xl"}).class()})}>RSVP</a>
          <a class={daisy("btn")({modifiers: ["secondary", "large", "wide"], addedClass: wind({fontSize: "text-4xl", width: "w-[450px]"}).class()})} target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NG5mdWJrN3E2cjJiZ2FjdWZlNjFsb2FhcW4gcm9iZXJ0cGFra29AbQ&amp;tmsrc=robertpakko%40gmail.com">Add to Calendar</a>
        </div>
      </div>
    </div>
  );
}