import { Component, Show } from "solid-js"
import { HomeRef, drawerId } from "../App"
import { Icon } from "./icon"
import { daisy } from "../daisy-typed/daisy-typed"
import { wind } from "tailwindest"

const headerButtonClass = daisy("btn")({modifiers: ["square", "ghost"], color: "bg-base-100", addedClass: wind({boxShadow: "shadow-xl"}).class()});

export const NavBarComponent: Component = () => {
  return (
      <div class={daisy("navbar")({
        addedClass: wind({
          position: "absolute",
          marginTop: "mt-0",
          zIndex: "z-10"
        }).class()
      })}>
        <div>
          <label for={drawerId} class={headerButtonClass}>
            <Icon icon="threeBars"/>
          </label>
        </div>
        <div class={wind({flexGrow: "grow"}).class()}/>
        <Show when={window.location.pathname === HomeRef}>
          <div>
            <button class={headerButtonClass}>
              <a href="https://github.com/RobertPakko/wedding-celebration" target="_blank"><Icon icon="diamondStack"/></a>
            </button>
          </div>
        </Show>
      </div>
  )
}