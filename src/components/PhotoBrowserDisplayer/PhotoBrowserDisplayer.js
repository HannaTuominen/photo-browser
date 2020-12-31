import Thumbnails from "./Thumbnails/Thumbnails";

import React, {useEffect, useState} from 'react';

import './PhotoBrowserDisplayer.css';
import Albums from "./Albums/Albums";

const fullPhotoDisplayer = props => {
  console.log(props.albums);

  return (
      <div className="PhotoBrowserContainer">
        <div className="AlbumsContainer">
          <Albums
            albums={props.albums}
            changeAlbum={props.changeAlbum}/>
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
