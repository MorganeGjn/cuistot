import React from 'react';
import Carousel from 'nuka-carousel';
import Image from 'components/genericComponents/Image';

export default class CookCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <Image src="http://via.placeholder.com/1000x400" alt="Cook1" />
        <Image src="http://via.placeholder.com/1000x400" alt="Cook2" />
      </Carousel>
    );
  }
}

// function CookCarousel() {
//   return (
//     <Carousel>
//       <Image src="http://via.placeholder.com/1000x400" alt="Cook1" />
//       <Image src="http://via.placeholder.com/1000x400" alt="Cook2" />
//     </Carousel>
//   );
// }

// export default CookCarousel;
