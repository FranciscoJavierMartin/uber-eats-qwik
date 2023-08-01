import { component$ } from '@builder.io/qwik';
import './Carousel.scss';

interface CarouselProps {
  images: any[];
}
// TODO: Add autoPlay
export default component$((props: CarouselProps) => {
  return (
    <div class='carousel'>
      {props.images.map((image, index) => (
        <article key={index} class='carousel__card'>
          <img
            src={image}
            class='carousel__card__poster'
            width={305}
            height={170}
          />
        </article>
      ))}
      {/* TODO: Add pagination */}
    </div>
  );
});
