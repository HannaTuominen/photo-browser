import Thumbnails from "./Thumbnails/Thumbnails";

import React from 'react';

import './ThumbnailsDisplayer.css';
import LoadingIndicator from "../UI/LoadingIndicator/LoadingIndicator";

const thumbnailsDisplayer = props => {
  return (
        <div className="ThumbnailsContainer">
          {props.isLoading ?
            <div className="PhotoLoader"> <LoadingIndicator height={"80px"}/></div>:
          <Thumbnails
            thumbnails={props.thumbnails}
            showImageViewer={props.showImageViewer}/>}
        </div>
  );
};

export default thumbnailsDisplayer;
