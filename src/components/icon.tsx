import { mergeProps } from "solid-js";
import { tw } from "../styles";

export enum ICON {
  CircleStack = "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
  ThreeBars = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
}

export interface IconProps {
  icon: ICON;
  class?: string;
}

export const Icon = (initProps: IconProps) => {
  const props = mergeProps({ class: tw(["inline-block", "w-5", "h-5", "stroke-current"]) }, initProps);

  return (
    <svg class={props.class} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d={props.icon}
      />
    </svg>
  );
};