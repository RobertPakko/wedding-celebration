import { Routes, Route } from '@solidjs/router';
import { Component, lazy } from 'solid-js';
import { NavBarComponent } from './components/nav-bar';
import { NavPanel } from './components/nav-panel';

export const drawerId = "my-drawer";

const Home = lazy(() => import("./pages/home"));
export const HomeRef = "/";

const Attendees = lazy(() => import("./pages/attendees"));
export const AttendeesRef = "/attendees";

const RSVP = lazy(() => import("./pages/rsvp"));
export const RSVPRef = "/rsvp";

const FAQ = lazy(() => import("./pages/faq"));
export const FAQRef = "/faq";

const PhotoUpload = lazy(() => import("./pages/photo-upload"));
export const PhotoUploadRef = "/photo-upload";

const TravelAndLodging = lazy(() => import("./pages/travel-and-lodging"));
export const TravelAndLodgingRef = "/travel-and-lodging";

const Registry = lazy(() => import("./pages/registry"));
export const RegistryRef = "/registry";

const ThingsToDo = lazy(() => import("./pages/things-to-do"));
export const ThingsToDoRef = "/things-to-do";

const App: Component = () => {
  return (
  <div class="drawer">
    <input id={drawerId} type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <NavBarComponent/>
      <Routes>
        <Route path={HomeRef} component={Home} />
        <Route path={AttendeesRef} component={Attendees} />
        <Route path={RSVPRef} component={RSVP} />
        <Route path={FAQRef} component={FAQ} />
        <Route path={PhotoUploadRef} component={PhotoUpload} />
        <Route path={TravelAndLodgingRef} component={TravelAndLodging} />
        <Route path={RegistryRef} component={Registry} />
        <Route path={ThingsToDoRef} component={ThingsToDo} />
      </Routes>
    </div>
    <div class="drawer-side">
      <NavPanel/>
    </div>
  </div>
  );
};

export default App;
