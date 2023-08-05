import { component$ } from '@builder.io/qwik';
import {
  HiMagnifyingGlassOutline,
  HiXMarkOutline,
} from '@qwikest/icons/heroicons';
import './SearchBar.scss';

export default component$(() => {
  return (
    <header class='header'>
      <HiMagnifyingGlassOutline />
      <input placeholder='Search' />
      <HiXMarkOutline />
    </header>
  );
});
