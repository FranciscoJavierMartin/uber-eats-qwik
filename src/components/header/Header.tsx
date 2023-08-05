import { component$ } from '@builder.io/qwik';
import { HiChevronDownOutline } from '@qwikest/icons/heroicons';
import './Header.scss';

interface HeaderProps {
  title?: string;
}

export default component$((props: HeaderProps) => {
  return (
    <header class='header'>
      <span class='title'>{props.title ?? 'No title'}</span>
      <HiChevronDownOutline />
    </header>
  );
});
