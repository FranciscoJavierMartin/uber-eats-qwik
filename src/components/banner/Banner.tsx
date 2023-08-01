import { component$ } from '@builder.io/qwik';
// import Slider from '~/components/slider/Slider';
import './Banner.scss';
import Carousel from '../carousel/Carousel';

export default component$(() => {
  return (
    <div class='border-bottom'>
      {/* <div class='slider'> */}
        {/* <Slider></Slider> */}
        <Carousel />
      {/* </div> */}
    </div>
  );
});
