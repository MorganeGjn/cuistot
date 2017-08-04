import React from 'react';
import '../../../../node_modules/react-responsive-carousel/lib/styles/carousel.css';
var Carousel = require('react-responsive-carousel').Carousel;

export default class CookCarousel extends React.Component {
  render() {
    return (
      <Carousel emulateTouch autoPlay interval={3000} infiniteLoop>
        <div>
          <img src="http://lorempixel.com/1300/400/nature/1" />
        </div>
        <div>
          <img src="http://lorempixel.com/1300/400/nature/2" />
        </div>
        <div>
          <img src="http://lorempixel.com/1300/400/nature/3" />
        </div>
        <div>
          <img src="http://lorempixel.com/1300/400/nature/4" />
        </div>
        <div>
          <img src="http://lorempixel.com/1300/400/nature/5" />
        </div>
      </Carousel>
    );
  }
}
