import { wind } from "tailwindest";
import { daisy } from "../daisy-typed/daisy-typed";
import { Icon } from "../components/icon";

export default function PhotoUpload() {
  return (
    <div class={wind({
      display: "flex",
      paddingY: "py-16",
      flexDirection: "flex-col",
      minHeight: "min-h-screen",
      alignItems: "items-center",
      backgroundImage: "bg-gradient-to-r",
      backgroundImageGradientStart: "from-fuchsia-500",
      backgroundImageGradientEnd: "to-violet-500"
    }).class()}>
      <div class={daisy("card")({addedClass: wind({boxShadow: "shadow-xl"}).class(), color: "bg-base-100"})}>
        <div class={daisy("card-body")({})}>
          <article class={daisy("prose")({})}>
            <h1>Photos</h1>
            <div class={daisy("divider")({addedClass: wind({margin: "m-0"}).class()})}/>
            <p>Click the below button to go to our shared Google Photos album where you can check out the photos taken by our photographers or share photos that you took!</p>
          </article>
        </div>
        <div class={daisy("card-actions")({addedClass: wind({justifyContent: "justify-center", gap: "gap-5"}).class()})}>
          <a
            href="https://photos.app.goo.gl/L5Y7QXWzGCpM6Ve2A"
            class={daisy("btn")({
              modifiers: ["primary", "large"],
              addedClass: wind({gap: "gap-2", marginBottom: "mb-10"}).class()
            })}
          >
            <Icon icon="link"/>
            Go to Google Photos
          </a>
        </div>
      </div>
    </div>
  );
}