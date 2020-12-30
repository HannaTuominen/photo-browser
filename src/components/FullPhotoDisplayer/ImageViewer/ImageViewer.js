import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";
import ImageInfo from "./ImageInfo/ImageInfo";
import ImageCarousel from "./ImageCarousel/ImageCarousel";

const imageViewer = props => {
  //console.log(props.activeImage);

  return (
    <Auxiliary>
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
