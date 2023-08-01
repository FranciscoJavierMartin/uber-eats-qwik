import { component$ } from '@builder.io/qwik';
import image1 from '../../assets/imgs/1.jpg';
import image2 from '../../assets/imgs/2.jpg';
import image3 from '../../assets/imgs/3.jpg';
import './Slider.scss';

export default component$(() => {
  const images = [image1, image2, image3];

  return (
    <div class='slider'>
      {images.map((image, index) => (
        <div key={index} class='slide'>
          <img src={image} width={307} height={206} />
        </div>
      ))}
    </div>
  );
});
