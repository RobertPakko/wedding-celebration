import { RSVPRef } from "../App";

const account = import.meta.env.VITE_STORAGE_ACCOUNT;
const sasToken = import.meta.env.VITE_SAS_TOKEN;
const blobContainer = import.meta.env.VITE_BLOB_CONTAINER;

const imageUrl = `https://${account}.blob.core.windows.net/${blobContainer}/Seattle.jpg${sasToken}`

export default function Home() {
  return (
    <div class="hero min-h-screen" style={`background-image: url(${imageUrl});`}>
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="absolute flex flex-col justify-around w-full h-full hero-content text-center text-neutral-content">
        <h1 class="text-4xl font-extrabold md:text-6xl">You're Invited</h1>
        <h2 class="text-4xl font-bold md:text-6x1">To Haley and Rob's Wedding Celebration</h2>
        <h2 class="text-4xl font-bold md:text-6xl">At Noon on August 6th, 2023</h2>
        <h2 class="text-4xl font-bold md:text-6xl">In Carkeek Park, Seattle</h2>
        <a href={RSVPRef} class="text-4xl btn btn-primary btn-lg btn-wide">RSVP</a>
      </div>
    </div>
  );
}