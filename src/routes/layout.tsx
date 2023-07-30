import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <Slot />;
});

export const head: DocumentHead = {
  title: 'Uber eats',
  meta: [
    {
      name: 'description',
      content: 'Uber eats clone',
    },
  ],
};
