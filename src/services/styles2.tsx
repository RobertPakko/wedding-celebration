
interface DaisyComponent<T> {
    name: string,
    modifiers: (keyof T)[]
}

interface Button {
    small: string,
    large: string
}

export const Button: DaisyComponent<Button> = {
    name: "",
    modifiers: ["small", "large"]
}

export function daisy<T>(component: DaisyComponent<T>, modifiers: (keyof T)[]): string {
    return [component.name].concat(modifiers.map(x => x.toString())).join(" ");
};

export const newClass = daisy(Button, ["large"])