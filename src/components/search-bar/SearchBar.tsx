import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import {
  HiMagnifyingGlassOutline,
  HiXMarkOutline,
} from '@qwikest/icons/heroicons';
import './SearchBar.scss';

export default component$(() => {
  const query = useSignal<string>('');

  useTask$(async ({ track }) => {
    const searchInput = track(() => query.value);
    const controller = new AbortController();

    console.log(query.value);
    if (searchInput) {
      // await debounceGetRestaurants(query.value, controller);
    }

    return () => {
      controller.abort();
    };
  });

  return (
    <header class='header'>
      <HiMagnifyingGlassOutline />
      <input placeholder='Search' bind:value={query} />
      <button
        class='clear'
        onClick$={() => {
          query.value = '';
        }}
      >
        <HiXMarkOutline />
      </button>
    </header>
  );
});
