import { component$ } from '@builder.io/qwik';
import Banner from '~/components/banner/Banner';
import RestaurantList from '~/components/restaurant-list/RestaurantList';

export default component$(() => {
  return (
    <>
      <Banner />
      <RestaurantList />
    </>
  );
});
