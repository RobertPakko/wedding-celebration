import { Component } from "solid-js";
import { AttendeesRef, drawerId, FAQRef, HomeRef, PhotoUploadRef, RegistryRef, RSVPRef, TravelAndLodgingRef } from "../App";
import { Icon, ICON } from "./icon";

export const NavPanel: Component = () => {
  const getStyle = (ref: string): string => {
    return ref === window.location.pathname ? "bordered disabled" : "";
  }

  const getRef = (ref: string) => {
    return ref === window.location.pathname ? {} : {
      href: ref
    };
  }

  return (
    <>
      <label for={drawerId} class="drawer-overlay"></label>
      <ul class="menu w-80 bg-base-100 text-base-content">
        <li class={getStyle(HomeRef)}><a {...getRef(HomeRef)}><Icon icon={ICON.Home}/>Home</a></li>
        <li class={getStyle(RSVPRef)}><a {...getRef(RSVPRef)}><Icon icon={ICON.ClipboardCheck}/>RSVP</a></li>
        <li class={getStyle(AttendeesRef)}><a {...getRef(AttendeesRef)}><Icon icon={ICON.UserGroup}/>Attendees</a></li>
        <li class={getStyle(TravelAndLodgingRef)}><a {...getRef(TravelAndLodgingRef)}><Icon icon={ICON.OfficeBuilding}/>Travel & Lodging</a></li>
        <li><a><Icon icon={ICON.Sparkles}/>Things To Do</a></li>
        <li class={getStyle(FAQRef)}><a {...getRef(FAQRef)}><Icon icon={ICON.ChatBubble}/>FAQ</a></li>
        <li class={getStyle(RegistryRef)}><a {...getRef(RegistryRef)}><Icon icon={ICON.Gift}/>Registry</a></li>
        <li class={getStyle(PhotoUploadRef)}><a {...getRef(PhotoUploadRef)}><Icon icon={ICON.Photo}/>Photo Upload</a></li>
      </ul>
    </>
  );
};