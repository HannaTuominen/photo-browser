import React from 'react';

import './AlbumsDisplayer.css';
import LoadingIndicator from "../UI/LoadingIndicator/LoadingIndicator";
import Albums from "./Albums/Albums";

const thumbnailsDisplayer = props => {
  return (
    <div className="AlbumsContainer">
      {props.isLoading ?
         <LoadingIndicator height={"50px"}/>:
        <Albums
          albums={props.albums}
          changeAlbum={props.changeAlbum}
          activeAlbum={props.activeAlbum}
          isLoading={props.isLoading}/>}
    </div>
  );
};

export default thumbnailsDisplayer;
