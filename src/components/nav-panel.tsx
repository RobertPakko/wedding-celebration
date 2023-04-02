import { Component } from "solid-js";
import { AttendeesRef, drawerId, FAQRef, HomeRef, PhotoUploadRef, RegistryRef, RSVPRef, ThingsToDoRef, TravelAndLodgingRef } from "../App";
import { Icon } from "./icon";
import { daisy } from "../daisy-typed/daisy-typed";
import { wind } from "tailwindest";

export const NavPanel: Component = () => {
  const getStyle = (ref: string): string => {
    return ref === window.location.pathname ? daisy("menu-item")({modifiers: ["bordered", "disabled"]}) : "";
  }

  const getRef = (ref: string) => {
    return ref === window.location.pathname ? {} : {
      href: ref
    };
  }

  return (
    <>
      <label for={drawerId} class={daisy("drawer-overlay")({})}></label>
      <ul class={daisy("menu")({color: "bg-base-100", addedClass: wind({width: "w-56"}).class()})}>
        <li class={getStyle(HomeRef)}><a {...getRef(HomeRef)}><Icon icon="home"/>Home</a></li>
        <li class={getStyle(RSVPRef)}><a {...getRef(RSVPRef)}><Icon icon="clipboardCheck"/>RSVP</a></li>
        <li class={getStyle(AttendeesRef)}><a {...getRef(AttendeesRef)}><Icon icon="userGroup"/>Attendees</a></li>
        <li class={getStyle(TravelAndLodgingRef)}><a {...getRef(TravelAndLodgingRef)}><Icon icon="officeBuilding"/>Travel & Lodging</a></li>
        <li class={getStyle(ThingsToDoRef)}><a {...getRef(ThingsToDoRef)}><Icon icon="sparkles"/>Things To Do</a></li>
        <li class={getStyle(FAQRef)}><a {...getRef(FAQRef)}><Icon icon="chatBubble"/>FAQ</a></li>
        <li class={getStyle(RegistryRef)}><a {...getRef(RegistryRef)}><Icon icon="gift"/>Registry</a></li>
        <li class={getStyle(PhotoUploadRef)}><a {...getRef(PhotoUploadRef)}><Icon icon="photo"/>Photo Upload</a></li>
      </ul>
    </>
  );
};