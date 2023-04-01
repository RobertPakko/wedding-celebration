import { Routes, Route } from '@solidjs/router';
import { Component, lazy } from 'solid-js';
import { NavBar } from './components/nav-bar';
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

const App: Component = () => {
  return (
  <div class="drawer">
    <input id={drawerId} type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <NavBar/>
      <Routes>
        <Route path={HomeRef} component={Home} />
        <Route path={AttendeesRef} component={Attendees} />
        <Route path={RSVPRef} component={RSVP} />
        <Route path={FAQRef} component={FAQ} />
      </Routes>
    </div>
    <div class="drawer-side">
      <NavPanel/>
    </div>
  </div>
  );
};

export default App;
