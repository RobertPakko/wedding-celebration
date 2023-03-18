import { Component } from "solid-js"
import { drawerId } from "../App"
import { twd, tw } from "../styles"
import { Icon, ICON } from "./icon"

export const NavBar: Component = () => {
  return (
      <div class={twd(["navbar"], ["absolute", "top-0"])}>
        <div class={tw(["flex-none"])}>
          <label for={drawerId} class={twd(["btn", "btn-square", "btn-ghost", "bg-base-100"])}>
            <Icon icon={ICON.ThreeBars}/>
          </label>
        </div>
        <div class={tw(["flex-1"])}/>
        <div class={tw(["flex-none"])}>
          <button class={twd(["btn", "btn-square", "btn-ghost", "bg-base-100"])}>
            <Icon icon={ICON.DiamondStack}/>
          </button>
        </div>
      </div>
  )
}