export default function Home() {
  return (
    <div class="hero min-h-screen" style="background-image: url(src/assets/Seattle.jpg);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="absolute flex flex-col justify-around w-full h-full hero-content text-center text-neutral-content">
        <h1 class="text-4xl font-extrabold md:text-6xl">You're Invited</h1>
        <h2 class="text-4xl font-bold md:text-6xl">To Haley and Rob's Wedding Celebration</h2>
        <h2 class="text-4xl font-bold md:text-6xl">At Noon on August 6th, 2023</h2>
        <h2 class="text-4xl font-bold md:text-6xl">In Carkeek Park, Seattle</h2>
        <a class="text-4xl btn btn-primary btn-lg btn-wide">RSVP</a>
      </div>
    </div>
  );
}