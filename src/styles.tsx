export const tw = (attributes: (TailwindClass)[], override: string[] = []) => (attributes as string[]).concat(override).join(" ");
export const twd = (attributes: (TailwindClass | DaisyClass)[], override: string[] = []) => (attributes as string[]).concat(override).join(" ");

type Colors = "red" | "purple" | "blue" | "green";
type DaisyColors = "base";
type Luminance = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type BgColor = `bg-${Colors | DaisyColors}-${Luminance}`;
type FlexBox = "flex" | "flex-none" | `flex-${number}`;
type Layout = "block" | "inline-block" | `w-${number}` | `h-${number}`;
type SVG = "stroke-current";

type TailwindClass = BgColor | Layout | SVG | FlexBox;

type DaisyButtonModifiers = "square" | "ghost" | "lg" | "md" | "sm" | "xs" | "wide" | "block" | "circle" | "square";
type DaisyButtons = "btn" | `btn-${DaisyButtonModifiers}`;
type DaisyNavbarModifiers = "start" | "center" | "end";
type DaisyNavbar = "navbar" | `navbar-${DaisyNavbarModifiers}`;
type DaisyDrawerModifiers = "toggle" | "content" | "side" | "overlay" | "mobile" | "end";
type DaisyDrawer = "drawer" | `drawer-${DaisyDrawerModifiers}`

type DaisyClass = DaisyButtons | DaisyNavbar | DaisyDrawer;