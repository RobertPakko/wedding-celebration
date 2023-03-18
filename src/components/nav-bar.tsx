import { twd, tw } from "../styles"
import { Icon, ICON } from "./icon"

export const NavBar = () => {
  return (
    <div class={twd(["navbar", "bg-base-100"])}>
      <div class={tw(["flex-none"])}>
        <label htmlFor="my-drawer" class={twd(["btn", "btn-square", "btn-ghost"])}>
          <Icon icon={ICON.ThreeBars}/>
        </label>
      </div>
      <div class={tw(["flex-1"])}>
        <a class={twd(["btn", "btn-ghost"], ["normal-case", "text-x1"])}>Robert and Haley Wedding Celebration</a>
      </div>
      <div class={tw(["flex-none"])}>
        <button class={twd(["btn", "btn-square", "btn-ghost"])}>
          <Icon icon={ICON.CircleStack}/>
        </button>
      </div>
    </div>
  )
}