import { Slot, component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import BottomTabs from '~/components/bottom-tabs/BottomTabs';
import Header from '~/components/header/Header';
import SearchBar from '~/components/search-bar/SearchBar';
import './layout-tabs.scss';

const titlesByRoute = new Map<string, string>();
titlesByRoute.set('/tabs/home/', 'Home');
titlesByRoute.set('/tabs/search/', 'Search');
titlesByRoute.set('/tabs/cart/', 'Cart');
titlesByRoute.set('/tabs/account/', 'Account');

export default component$(() => {
  const location = useLocation();

  return (
    <>
      {location.url.pathname.includes('/tabs/search/') ? (
        <SearchBar />
      ) : (
        <Header title={titlesByRoute.get(location.url.pathname)} />
      )}
      <main>
        <Slot />
      </main>
      <BottomTabs />
    </>
  );
});
