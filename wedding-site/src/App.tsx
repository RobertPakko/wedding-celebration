import type { Component } from 'solid-js';
import { ICON, Icon } from './components/icon';

const App: Component = () => {
  return (
  <div class="navbar bg-base-100">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <Icon icon={ICON.ThreeBars}/>
      </button>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Robert and Haley Wedding Celebration</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <Icon icon={ICON.CircleStack}/>
      </button>
    </div>
  </div>
  );
};

export default App;
