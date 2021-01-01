import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import ImageInfo from "./ImageInfo/ImageInfo";
import ImageCarousel from "./ImageCarousel/ImageCarousel";

const imageViewer = props => {
  return (
    <Auxiliary >
      <div>
        <ImageCarousel activePhoto={props.activeImage}/>
      </div>
      <div>
        <ImageInfo info={props.activeImage}/>
      </div>
    </Auxiliary>
  );
};

export default imageViewer;
