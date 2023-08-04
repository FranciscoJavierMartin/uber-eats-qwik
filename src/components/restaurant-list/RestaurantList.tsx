import { component$ } from '@builder.io/qwik';
import { HiStarMini } from '@qwikest/icons/heroicons';
import './RestaurantList.scss';

interface Restaurant {
  cover: string;
  name: string;
  short_name: string;
  cooking: string[];
  rating: number;
  delivery_time: number;
  distance: number;
  price: number;
}

interface RestaurantListProps {
  title: string;
  subtitle: string;
  restaurants: Restaurant[];
}

function getCooking(styles: string[]): string {
  return styles.join(', ');
}

export default component$((props: RestaurantListProps) => {
  return (
    <section class='restaurant-list'>
      <div class='header-list'>
        <h4>{props.title}</h4>
        <p>{props.subtitle}</p>
      </div>
      <div class='list'>
        {props.restaurants.map((restaurant) => (
          <article key={restaurant.short_name} class='restaurant'>
            <img
              src={restaurant.cover}
              class='restaurant__cover'
              height={136}
              width={98}
            />
            <div class='restaurant__data'>
              <span class='restaurant__data__name'>{restaurant.name}</span>
              <p class='restaurant__data__cooking'>
                {getCooking(restaurant.cooking)}
              </p>
              <div class='restaurant__data__data'>
                <span>
                  <HiStarMini />
                  {restaurant.rating}
                </span>
                . {restaurant.delivery_time} mins . ${restaurant.price} for two
              </div>
              <div class='restaurant__data__distance'>
                <p>{restaurant.distance} kms away</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});
