import type { Component } from 'solid-js';
import { ICON, Icon } from './components/icon';
import { NavBar } from './components/nav-bar';
import { NavPanel } from './components/nav-panel';
import { tw, twd } from './styles';

export const drawerId = "my-drawer";

const App: Component = () => {
  return (
  <div class="drawer">
    <input id={drawerId} type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <NavBar/>
    </div>
    <div class="drawer-side">
      <NavPanel/>
    </div>
  </div>
  );
};

export default App;
