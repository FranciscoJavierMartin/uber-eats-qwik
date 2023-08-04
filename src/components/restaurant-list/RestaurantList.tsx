import { component$ } from '@builder.io/qwik';
import './RestaurantList.scss';
import image from '~/assets/imgs/1.jpg';
import { HiStarMini } from '@qwikest/icons/heroicons';

interface RestaurantListProps {
  title: string;
  subtitle: string;
}

export default component$((props: RestaurantListProps) => {
  return (
    <section class='restaurant-list'>
      <div class='header-list'>
        <h4>{props.title}</h4>
        <p>{props.subtitle}</p>
      </div>
      <div class='list'>
        <article class='restaurant'>
          <img src={image} class='restaurant__cover' height={136} width={98} />
          <div class='restaurant__data'>
            <span class='restaurant__data__name'>Stayfit</span>
            <p class='restaurant__data__cooking'>Italian, Mexican</p>
            <div class='restaurant__data__data'>
              <span>
                <HiStarMini />5
              </span>{' '}
              . 25 mins . $100 for two
            </div>
            <div class='restaurant__data__distance'>
              <p>2.5 kms away</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
});
