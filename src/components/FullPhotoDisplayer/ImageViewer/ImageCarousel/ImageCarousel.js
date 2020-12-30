import React from 'react';

import './ImageCarousel.css';

const imageCarousel = props => {
  //console.log(props.activePhoto);
  return (
    <div className="Carousel">
      <img src={props.activePhoto.url} className="CarouselImage"/>
    </div>
  );
};

export default imageCarousel;