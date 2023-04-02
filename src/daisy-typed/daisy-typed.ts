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

const DaisyComponents = {
  "prose": {},
  "btn": {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    info: "btn-info",
    success: "btn-success",
    warning: "btn-warning",
    error: "btn-error",
    ghost: "btn-ghost",
    link: "btn-link",
    outline: "btn-outline",
    active: "btn-active",
    disabled: "btn-disabled",
    glass: "glass",
    loading: "loading",
    noAnimation: "no-animation",
    large: "btn-lg",
    medium: "btn-md",
    small: "btn-sm",
    extraSmall: "btn-xs",
    wide: "btn-wide",
    block: "btn-block",
    circle: "btn-circle",
    square: "btn-square"
  },
  "card": {},
  "card-title": {},
  "card-body": {},
  "divider": {},
  "hero": {},
  "hero-content": {},
  "hero-overlay": {},
  "navbar": {}
}

type DaisyKeys<T> = T extends keyof typeof DaisyComponents ? keyof typeof DaisyComponents[T] : never;

export const daisy = <T extends keyof typeof DaisyComponents>(componentKey: T) => {
  interface inputs {
    modifiers?: DaisyKeys<T>[],
    color?: DaisyColorType | "",
    addedClass?: string
  };

  return ({modifiers = [], color = "", addedClass = ""}: inputs) => {
    return [componentKey.toString()].concat(modifiers.map(x => DaisyComponents[componentKey][x] as string)).join(" ") + ` ${color}` + ` ${addedClass}`;
  };
};
