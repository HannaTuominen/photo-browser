import React from 'react';

import './ImageCarousel.css';

const imageCarousel = props => {
  //console.log(props.activePhoto);
  return (
    <div className="Carousel">
      <img src={props.activePhoto.url} className="CarouselImage" alt={props.activePhoto.title}/>
    </div>
  );
};

export default imageCarousel;
