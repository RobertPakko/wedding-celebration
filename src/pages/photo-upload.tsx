import { wind } from "tailwindest";
import { daisy } from "../daisy-typed/daisy-typed";

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
            <h1>Photo Upload</h1>
            <div class={daisy("divider")({addedClass: wind({margin: "m-0"}).class()})}/>
            <h2>🚧 Under construction</h2>
            <p>This is where you'll be able to upload photos after the event! Nothing is set up now.</p>
          </article>
        </div>
      </div>
    </div>
  );
}