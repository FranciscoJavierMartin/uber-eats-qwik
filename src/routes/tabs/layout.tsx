import { Slot, component$ } from '@builder.io/qwik';
import './styles.scss';
import BottomTabs from '~/components/bottom-tabs/BottomTabs';
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
