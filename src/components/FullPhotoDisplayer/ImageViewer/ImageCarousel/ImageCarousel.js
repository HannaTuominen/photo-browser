import React from 'react';

import './ImageCarousel.css';

const imageCarousel = props => {
  return (
    <div className="Carousel">
      <img src={props.activePhoto.url} className="CarouselImage" alt={props.activePhoto.title}/>
    </div>
  );
};

export default imageCarousel;
