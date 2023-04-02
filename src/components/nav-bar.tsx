import { Component, Show } from "solid-js"
import { HomeRef, drawerId } from "../App"
import { twd, tw } from "../styles"
import { Icon, ICON } from "./icon"
import { daisy, daisyColor } from "../daisy-typed/core"
import { NavBar } from "../daisy-typed/nav-bar"
import { wind } from "tailwindest"
import { Button } from "../daisy-typed/button"

export const NavBarComponent: Component = () => {
  return (
      <div class={daisy(NavBar, [], wind({
        position: "absolute",
        marginTop: "mt-0",
        zIndex: "z-10"
      }).class())}>
        <div class={tw(["flex-none"])}>
          <label for={drawerId} class={daisy(Button, ["square", "ghost"], daisyColor("bg-base-100", wind({boxShadow: "shadow-xl"}).class()))}>
            <Icon icon={ICON.ThreeBars}/>
          </label>
        </div>
        <div class={tw(["flex-1"])}/>
        <Show when={window.location.pathname === HomeRef}>
          <div class={tw(["flex-none"])}>
            <button class={daisy(Button, ["square", "ghost"], daisyColor("bg-base-100", wind({boxShadow: "shadow-xl"}).class()))}>
              <Icon icon={ICON.DiamondStack}/>
            </button>
          </div>
        </Show>
      </div>
  )
}