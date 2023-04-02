import { wind } from "tailwindest";
import { Card, CardBody } from "../daisy-typed/card";
import { daisy } from "../daisy-typed/core";
import { Divider } from "../daisy-typed/divider";

export default function TravelAndLodging() {
  return (
    <div class={wind({
      display: "flex",
      paddingY: "py-16",
      flexDirection: "flex-col",
      minHeight: "min-h-screen",
      alignItems: "items-center",
      backgroundImage: "bg-gradient-to-r",
      backgroundImageGradientStart: "from-cyan-500",
      backgroundImageGradientEnd: "to-blue-500"
    }).class()}>
      <div class={daisy(Card, [], wind({boxShadow: "shadow-xl"}).class(), "bg-base-100")}>
        <div class={daisy(CardBody)}>
          <article class="prose">
            <h1 class={wind({ alignSelf: "self-center" }).class()}>Travel and Lodging</h1>
            <div class={daisy(Divider, [], wind({margin: "m-0"}).class())}></div>
            <h2>🛬 Flying Into Seattle</h2>
            <p>Seattle’s major airport is the Seattle-Tacoma International Airport (SEA).</p>
            <p>To get to the city from the airport, we recommend taking the 1 Line, a Light Rail Train that runs directly from the airport to downtown and beyond. The Light Rail takes about 30 minutes to run from the airport to downtown.</p>
            <p>Alternatively, if you choose to rent a car or use ride share, it’s about a 20 minute drive from the airport to downtown.</p>
            <h2>🚏 Getting Around Seattle</h2>
            <p>There are lots of ways to get around Seattle without a car, including the Light Rail, King County Buses, Seattle Streetcars, Bike & Scooter Sharing, and even the Seattle Center Monorail! More info about these options can be found here.</p>
            <h2>🏞️ Getting to Carkeek Park</h2>
            <p>Carkeek Park is in the Broadview Neighborhood of Seattle, a bit north of downtown. The easiest way to get to the park is by car (~20 minutes from downtown, plenty of parking available), or there are bus route options as well (check your Maps app for best options).</p>
            <h2>🏨 Lodging</h2>
            <p>Hotel, Airbnb, staying with a friend – all up to you! There are countless options for accommodations in Seattle. Here are some popular neighborhoods to consider:</p>
            <ul>
              <li>Belltown (close to Pike Place Market and Seattle Center)</li>
              <li>Fremont (fun, quirky neighborhood featuring its namesake Troll)</li>
              <li>Ballard (former fishing village turned cute, lively neighborhood)</li>
              <li>Capitol Hill (“hip” area, great spot for nightlife)</li>
              <li>South Lake Union (“tech campus” area, good bars and restaurants but quieter at night)</li>
              <li>Lower Queen Anne (similar to Belltown, but more residential)</li>
              <li>Queen Anne (up the hill from Lower Queen Anne)</li>
              <li>Wallingford (funky bars and restaurants, more residential neighborhood)</li>
              <li>Phinney Ridge (quieter neighborhood, closer to Carkeek Park)</li>
              <li>Greenlake (quieter neighborhood, closer to Carkeek Park)</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}