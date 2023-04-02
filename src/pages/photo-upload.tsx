import { wind } from "tailwindest";
import { Card, CardBody } from "../daisy-typed/card";
import { daisy } from "../daisy-typed/core";
import { Divider } from "../daisy-typed/divider";

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
      <div class={daisy(Card, [], wind({boxShadow: "shadow-xl"}).class(), "bg-base-100")}>
        <div class={daisy(CardBody)}>
          <article class="prose">
            <h1 class={wind({ alignSelf: "self-center" }).class()}>Photo Upload</h1>
            <div class={daisy(Divider, [], wind({margin: "m-0"}).class())}></div>
            <h2>🚧 Under construction</h2>
            <p>This is where you'll be able to upload photos after the event! Nothing is set up now.</p>
          </article>
        </div>
      </div>
    </div>
  );
}