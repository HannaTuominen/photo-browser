import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import ImageInfo from "./ImageInfo/ImageInfo";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import LoadingIndicator from "../../UI/LoadingIndicator/LoadingIndicator";

const imageViewer = props => {
  return (
    <Auxiliary >
      {props.isLoading ?
        <LoadingIndicator height={"50px"}/> :
        <Auxiliary>
          <div>
            <ImageCarousel activePhoto={props.activeImage}/>
          </div>
          <div>
            <ImageInfo info={props.activeImage}/>
          </div>
        </Auxiliary>}
    </Auxiliary>
  );
};

export default imageViewer;
