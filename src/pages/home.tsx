import * as Styles from "./home.styles"
import { Button } from "../daisy-typed/button";
import { daisy } from "../daisy-typed/core";
import { RSVPRef } from "../App";
import { HeroContainer, HeroOverlay } from "../daisy-typed/hero";
import { wind } from "tailwindest";

const account = import.meta.env.VITE_STORAGE_ACCOUNT;
const sasToken = import.meta.env.VITE_SAS_TOKEN;
const assetContainer = import.meta.env.VITE_ASSET_CONTAINER;

const imageUrl = `https://${account}.blob.core.windows.net/${assetContainer}/Seattle.jpg${sasToken}`

export default function Home() {
  return (
    <div class={daisy(HeroContainer, [], Styles.background)} style={`background-image: url(${imageUrl});`}>
      <div class={daisy(HeroOverlay, [], Styles.overlay)}></div>
      <div class={daisy(HeroContainer, [], Styles.contentContainer)}>
        <h1 class={Styles.h1}>You're Invited</h1>
        <h2 class={Styles.h2}>To Haley and Rob's Wedding Celebration</h2>
        <h2 class={Styles.h2}>At Noon on August 6th, 2023</h2>
        <h2 class={Styles.h2}>In Carkeek Park, Seattle</h2>
        <div class={wind({display: "flex", gap: "gap-10"}).class()}>
          <a href={RSVPRef} class={daisy(Button, ["primary", "large", "wide"], Styles.button)}>RSVP</a>
          <a class={daisy(Button, ["secondary", "large", "wide"], Styles.button)} target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MzgwYTFvZ29tZzNmNWszMmh0YmZla2dhNHMgcm9iZXJ0cGFra29AbQ&amp;tmsrc=robertpakko%40gmail.com">Add to Calendar</a>
        </div>
      </div>
    </div>
  );
}