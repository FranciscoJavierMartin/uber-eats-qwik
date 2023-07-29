import { Slot, component$ } from '@builder.io/qwik';
import './styles.scss';
import Tabs from '~/components/tabs/tabs';
export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
      <Tabs
        options={[
          {
            id: 'home',
          },
          {
            id: 'search',
          },
        ]}
      />
    </>
  );
});
