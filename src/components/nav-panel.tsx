import { drawerId } from "../App";
import { Icon, ICON } from "./icon";

export const NavPanel = () => {
  return (
    <>
      <label for={drawerId} class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <li><a><Icon icon={ICON.Home}/>Home</a></li>
        <li><a><Icon icon={ICON.ClipboardCheck}/>RSVP</a></li>
        <li><a><Icon icon={ICON.ClipboardCheck}/>Travel & Lodging</a></li>
        <li><a><Icon icon={ICON.Globe}/>Things To Do</a></li>
        <li><a><Icon icon={ICON.Gift}/>FAQ</a></li>
        <li><a><Icon icon={ICON.Gift}/>Registry</a></li>
      </ul>
    </>
  );
};