import Thumbnails from "./Thumbnails/Thumbnails";

import React from 'react';

import './ThumbnailsDisplayer.css';
import LoadingIndicator from "../UI/LoadingIndicator/LoadingIndicator";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const thumbnailsDisplayer = props => {
  return (
    <Auxiliary>
    {props.isLoading ?
    <div className="PhotoLoader"> <LoadingIndicator height={"100px"}/></div>:
    <div className="ThumbnailsContainer">
        <Thumbnails
          thumbnails={props.thumbnails}
          showImageViewer={props.showImageViewer}/>
    </div>}
    </Auxiliary>
  );
};

export default thumbnailsDisplayer;
