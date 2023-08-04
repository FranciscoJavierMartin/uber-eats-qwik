import { component$ } from '@builder.io/qwik';
import Banner from '~/components/banner/Banner';
import RestaurantList from '~/components/restaurant-list/RestaurantList';
import image1 from '~/assets/imgs/1.jpg';
import image2 from '~/assets/imgs/2.jpg';
import image3 from '~/assets/imgs/3.jpg';

const restaurants = [
  {
    cover: image1,
    name: 'Stayfit',
    short_name: 'stayfit',
    cooking: ['Italian', 'Mexican'],
    rating: 5,
    delivery_time: 25,
    distance: 2.5,
    price: 100,
  },
  {
    cover: image2,
    name: 'Stayfit1',
    short_name: 'stayfit1',
    cooking: ['Italian', 'Mexican'],
    rating: 5,
    delivery_time: 25,
    distance: 2.5,
    price: 100,
  },
  {
    cover: image3,
    name: 'Stayfit2',
    short_name: 'stayfit2',
    cooking: ['Italian', 'Mexican'],
    rating: 5,
    delivery_time: 25,
    distance: 2.5,
    price: 100,
  },
];

export default component$(() => {
  return (
    <>
      <Banner />
      <RestaurantList
        title='Restaurants nearby'
        subtitle='Discover unique tastes close to you'
        restaurants={restaurants}
      />
    </>
  );
});
