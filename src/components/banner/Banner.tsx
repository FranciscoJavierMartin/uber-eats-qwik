import { component$ } from '@builder.io/qwik';
import Carousel from '~/components/carousel/Carousel';
import './Banner.scss';

import image1 from '../../assets/imgs/1.jpg';
import image2 from '../../assets/imgs/2.jpg';
import image3 from '../../assets/imgs/3.jpg';

export default component$(() => {
  return (
    <div class='border-bottom'>
      <Carousel images={[image1, image2, image3]} />
    </div>
  );
});
