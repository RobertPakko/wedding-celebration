export const tw = (attributes: (TailwindClass)[], override: string[] = []) => (attributes as string[]).concat(override).join(" ");
export const twd = (attributes: (TailwindClass | DaisyClass)[], override: string[] = []) => (attributes as string[]).concat(override).join(" ");

type Colors = "red" | "purple" | "blue" | "green";
type Luminance = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type BgColor = `bg-${Colors}-${Luminance}`;

type Layout = "block" | "inline-block" | `w-${number}` | `h-${number}`;
type SVG = "stroke-current";
type TailwindClass = BgColor | Layout | SVG;

type DaisyButtonModifiers = "square" | "ghost" | "lg" | "md" | "sm" | "xs" | "wide" | "block" | "circle" | "square";
type DaisyButtons = "btn" | `btn-${DaisyButtonModifiers}`;

type DaisyClass = DaisyButtons;