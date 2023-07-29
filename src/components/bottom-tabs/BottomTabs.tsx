import { component$ } from '@builder.io/qwik';
import {
  HiHomeOutline,
  HiMagnifyingGlassOutline,
} from '@qwikest/icons/heroicons';
import './BottomTabs.scss';

export default component$(() => {
  const tabs = [
    {
      id: 'home',
      icon: HiHomeOutline,
      title: 'Home',
    },
    {
      id: 'search',
      icon: HiMagnifyingGlassOutline,
      title: 'Search',
    },
  ];

  return (
    <div class='tabs'>
      {tabs.map((tab) => (
        <div key={tab.id} class='tab'>
          <div class='icon'>
            <tab.icon />
          </div>
          <div class='title'>{tab.title}</div>
        </div>
      ))}
    </div>
  );
});
