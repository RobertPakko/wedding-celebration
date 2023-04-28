import { wind } from "tailwindest";
import { daisy } from "../daisy-typed/daisy-typed";
import html from "solid-js/html";

const twitchEmbed = () => html`
<div id="twitch-embed"></div>
<script src="https://player.twitch.tv/js/embed/v1.js"></script>
<script type="text/javascript">
  new Twitch.Player("twitch-embed", {
    channel: "hclafton"
  });
</script>
`;

export default function Chickens() {
  return (
    <div class={wind({
      display: "flex",
      paddingY: "py-16",
      flexDirection: "flex-col",
      minHeight: "min-h-screen",
      alignItems: "items-center",
      backgroundImage: "bg-gradient-to-r",
      backgroundImageGradientStart: "from-pink-500",
      backgroundImageGradientEnd: "to-emerald-500"
    }).class()}>
      <div class={daisy("card")({addedClass: wind({boxShadow: "shadow-xl"}).class(), color: "bg-base-100"})}>
        <div class={daisy("card-body")({})}>
          <iframe src="https://player.twitch.tv/?channel=hclafton&parent=wedding.haleyandrob.com" allowfullscreen={true} height="378" width="620"/>
        </div>
      </div>
    </div>
  );
}