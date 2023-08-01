import { component$ } from '@builder.io/qwik';
import './RestaurantList.scss';

export default component$(() => {
  return (
    <section class='restaurant-list'>
      <div class='header-list'>
        <h4>Restaurants nearby</h4>
        <p>Discover unique tastes close to you</p>
      </div>
      <div class='list'>
        <article class='restaurant'></article>
      </div>
    </section>
  );
});
