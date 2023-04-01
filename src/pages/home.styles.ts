import { wind } from "tailwindest";
import { daisyColor } from "./../daisy-typed/core";

export const background = wind({
    minHeight: "min-h-screen"
}).class();

export const overlay = "bg-opacity-60";

export const contentContainer = daisyColor("text-neutral-content", wind({
    position: "absolute",
    display: "flex",
    flexDirection: "flex-col",
    justifyContent: "justify-around",
    width: "w-full",
    height: "h-full",
    alignContent: "content-center",
}).class())

export const h1 = wind({
    fontSize: "text-4xl",
    fontWeight: "font-extrabold",
    "@md": {
        fontSize: "md:text-6xl"
    }
}).class();

export const h2 = wind({
    fontSize: "text-4xl",
    fontWeight: "font-bold",
    "@md": {
        fontSize: "md:text-6xl"
    }
}).class();

export const button = wind({
    fontSize: "text-4xl"
}).class();