import { component$ } from '@builder.io/qwik';
import './Carousel.scss';
import image1 from '../../assets/imgs/1.jpg';
import image2 from '../../assets/imgs/2.jpg';
import image3 from '../../assets/imgs/3.jpg';

export default component$(() => {
  const images = [image1, image2, image3];

  return (
    <div class='carousel'>
      {images.map((image, index) => (
        <article key={index} class='carousel__card'>
          <img src={image} class='carousel__card__poster' />
        </article>
      ))}
    </div>
  );
});
