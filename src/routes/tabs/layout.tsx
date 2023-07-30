import { Slot, component$ } from '@builder.io/qwik';
import BottomTabs from '~/components/bottom-tabs/BottomTabs';
import './styles.scss';

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
      <BottomTabs />
    </>
  );
});
