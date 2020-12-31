import Thumbnails from "./Thumbnails/Thumbnails";

import React from 'react';

import './PhotoBrowserDisplayer.css';

const photoBrowserDisplayer = props => {
  // console.log(props.albums);
  return (
      <div className="PhotoBrowserContainer">
        <div className="ThumbnailsContainer">
          <Thumbnails
            thumbnails={props.thumbnails}
            showImageViewer={props.showImageViewer}/>
        </div>
      </div>
  );
};

export default photoBrowserDisplayer;
