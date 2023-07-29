import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import styles from './styles.css?inline';

export default component$(() => {
  useStyles$(styles);
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
