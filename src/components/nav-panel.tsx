import { drawerId } from "../App";

export const NavPanel = () => {
  return (
    <>
      <label for={drawerId} class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </>
  );
};