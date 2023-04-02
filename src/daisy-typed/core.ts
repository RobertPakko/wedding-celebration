type DaisyColorPrefixes = "bg" | "text";
type DaisyColors = "primary"
    | "primary-focus"
    | "primary-content"
    | "secondary"
    | "secondary-focus"
    | "secondary-content"
    | "accent"
    | "accent-focus"
    | "accent-content"
    | "neutral"
    | "neutral-focus"
    | "neutral-content"
    | "base-100"
    | "base-200"
    | "base-300"
    | "base-content"
    | "info"
    | "info-content"
    | "success"
    | "success-content"
    | "warning"
    | "warning-content"
    | "error"
    | "error-content";

type DaisyColorType = `${DaisyColorPrefixes}-${DaisyColors}`;

export const daisyColor = (color: DaisyColorType, addedClasses: string = ""): string => `${color} ${addedClasses}`;

export interface DaisyComponent<T> {
  name: string,
  modifiers: {[K in keyof T]: string},
}

// Creates a space seperated string with component names, component modifiers, and additional class string if desired
export function daisy<T>(component: DaisyComponent<T>, modifiers: (keyof T)[] = [], addedClass: string = "", color: DaisyColorType | "" = ""): string {
    return [component.name].concat(modifiers.map(x => component.modifiers[x])).join(" ") + ` ${color}` + ` ${addedClass}`;
};

