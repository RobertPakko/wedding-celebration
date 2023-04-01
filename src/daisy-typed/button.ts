import { DaisyComponent } from "./core"

interface ButtonModifiers {
    primary: string,
    secondary: string,
    accent: string,
    info: string,
    success: string,
    warning: string,
    error: string,
    ghost: string,
    link: string,
    outline: string,
    active: string,
    disabled: string,
    glass: string,
    loading: string,
    noAnimation: string,
    large: string,
    medium: string,
    small: string,
    extraSmall: string,
    wide: string,
    block: string,
    circle: string,
    square: string
}

export const Button: DaisyComponent<ButtonModifiers> = {
    name: "btn",
    modifiers: {
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
    }
}
