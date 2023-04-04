import { Component } from "solid-js";
import { daisy } from "../daisy-typed/daisy-typed";

export interface LinkProps {
  text: string;
  href: string;
}

export const ExternalLink: Component<LinkProps> = (props: LinkProps) => {
  return (
    <a class={daisy("link")({})} target="_blank" href={props.href}>
      {props.text}
    </a>
  );
};