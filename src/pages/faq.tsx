import { wind } from "tailwindest";
import { Card, CardBody } from "../daisy-typed/card";
import { daisy, daisyColor } from "../daisy-typed/core";
import { Divider } from "../daisy-typed/divider";

export default function FAQ() {
  return (
    <div class={wind({
      display: "flex",
      paddingY: "py-16",
      flexDirection: "flex-col",
      minHeight: "min-h-screen",
      alignItems: "items-center",
      backgroundImage: "bg-gradient-to-r",
      backgroundImageGradientStart: "from-purple-500",
      backgroundImageGradientEnd: "to-pink-500"
    }).class()}>
      <div class={daisy(Card, [], wind({boxShadow: "shadow-xl"}).class(), "bg-base-100")}>
        <div class={daisy(CardBody)}>
          <article class="prose">
            <h1 class={wind({ alignSelf: "self-center" }).class()}>FAQ</h1>
            <div class={daisy(Divider, [], wind({margin: "m-0"}).class())}></div>
            <h2>What is this Wedding Celebration?</h2>
            <p>Although we married in a small ceremony earlier this year, we are very excited to celebrate our marriage with all of our friends and family in a fun, casual, party-like atmosphere in our new city of Seattle! We’ve rented out Carkeek Park for the day, which features stunning views of Puget Sound and the Olympic Mountains, and we will be providing lots of great food, activities, and opportunities to reconnect with old friends.</p>
            <h2>Are +1’s/guests allowed?</h2>
            <p>Absolutely! Just be sure to have them complete the RSVP form as well so we can have an accurate headcount.</p>
            <h2>What attire is appropriate?</h2>
            <p>Casual, or whatever you’d wear to an outdoor summer barbecue! August in Seattle is typically in the 70’s and sunny.</p>
            <h2>If we are visiting from out of town, where should we stay?</h2>
            <p>Check out our Travel + Lodging page for more info on where to stay in Seattle, how to get around, etc.</p>
            <h2>What else is there to do around Seattle while we’re in town?</h2>
            <p>We’re glad you asked! There’s so much to do in the Seattle area, so we highly recommend staying the whole weekend (or longer!). Check out our Things to Do page for some ideas to get you started.</p>
            <h2>Do you have a gift registry?</h2>
            <p>Gifts are NOT expected / necessary; your presence at our party and in our lives is gift enough ❤️ If you’d still like to give a gift of some sort, we’ve given a few ideas on our Registry page.</p>
          </article>
        </div>
      </div>
    </div>
  );
}