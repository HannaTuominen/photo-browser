import Thumbnails from "./Thumbnails/Thumbnails";

import React, {useEffect, useState} from 'react';

import './PhotoBrowserDisplayer.css';

const fullPhotoDisplayer = props => {
  return (
      <div className="PhotoBrowserContainer">
        <div className="AlbumsContainer">
          Albums
        </div>
        <div className="ThumbnailsContainer">
          <Thumbnails
            thumbnails={props.thumbnails}
            showImageViewer={props.showImageViewer}/>
        </div>
      </div>
  );
};

export default fullPhotoDisplayer;
