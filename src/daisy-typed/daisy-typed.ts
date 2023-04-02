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
  "form-control": {},
  "input": {
    bordered: "input-bordered",
    ghost: "input-ghost",
    primary: "input-primary",
    secondary: "input-secondary",
    accent: "input-accent",
    info: "input-info",
    success: "input-success",
    warning: "input-warning",
    error: "input-error",
    large: "input-lg",
    medium: "input-md",
    small: "input-sm",
    extraSmall: "input-xs"
  },
  "dropdown": {
    alignEnd: "dropdown-end",
    openTop: "dropdown-top",
    openBottom: "dropdown-bottom",
    openLeft: "dropdown-left",
    openRight: "dropdown-right",
    hover: "dropdown-hover",
    forceOpen: "dropdown-open"
  },
  "dropdown-content": {
    menu: "menu"
  },
  "checkbox": {
    primary: "checkbox-primary",
    secondary: "checkbox-secondary",
    accent: "checkbox-accent",
    success: "checkbox-success",
    warning: "checkbox-warning",
    info: "checkbox-info",
    error: "checkbox-error",
    large: "checkbox-lg",
    medium: "checkbox-md",
    small: "checkbox-sm",
    extraSmall: "checkbox-xs"
  },
  "file-input": {
    bordered: "file-input-bordered",
    ghost: "file-input-ghost",
    primary: "file-input-primary",
    secondary: "file-input-secondary",
    accent: "file-input-accent",
    info: "file-input-info",
    success: "file-input-success",
    warning: "file-input-warning",
    error: "file-input-error",
    large: "file-input-lg",
    medium: "file-input-md",
    small: "file-input-sm",
    extraSmall: "file-input-xs"
  },
  "textarea": {
    bordered: "textarea-bordered",
    ghost: "textarea-ghost",
    primary: "textarea-primary",
    secondary: "textarea-secondary",
    accent: "textarea-accent",
    info: "textarea-info",
    success: "textarea-success",
    warning: "textarea-warning",
    error: "textarea-error",
    large: "textarea-lg",
    medium: "textarea-md",
    small: "textarea-sm",
    extraSmall: "textarea-xs"
  },
  "label": {
    cursorPointer: "cursor-pointer"
  },
  "label-text": {},
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
