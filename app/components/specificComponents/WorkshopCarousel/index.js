/**
*
* Carrousel
*
*/

import React from 'react';
import Carousel from 'nuka-carousel';
import Image from 'components/genericComponents/Image';

function WorkshopCarousel() {
  return (
    <Carousel>
      <Image
        src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"
        alt="slide1"
      />
      <Image
        src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"
        alt="slide2"
      />
    </Carousel>
  );
}

export default WorkshopCarousel;
