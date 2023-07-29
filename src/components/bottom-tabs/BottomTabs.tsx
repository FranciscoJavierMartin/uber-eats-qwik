import { component$ } from '@builder.io/qwik';
import {
  HiHomeOutline,
  HiMagnifyingGlassOutline,
} from '@qwikest/icons/heroicons';
import './BottomTabs.scss';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();

  const tabs = [
    {
      id: 'home',
      icon: HiHomeOutline,
      title: 'Home',
      url: '/tabs/home',
    },
    {
      id: 'search',
      icon: HiMagnifyingGlassOutline,
      title: 'Search',
      url: '/tabs/search',
    },
  ];

  return (
    <div class='tabs'>
      {tabs.map((tab) => (
        <a
          key={tab.id}
          class={{
            tab: true,
            'tab--active': location.url.pathname.startsWith(tab.url),
          }}
          href={tab.url}
        >
          <div class='icon'>
            <tab.icon />
          </div>
          <div class='title'>{tab.title}</div>
        </a>
      ))}
    </div>
  );
});
