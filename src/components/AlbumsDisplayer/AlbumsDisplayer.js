import React from 'react';

import './AlbumsDisplayer.css';
import LoadingIndicator from "../UI/LoadingIndicator/LoadingIndicator";
import Albums from "./Albums/Albums";

const thumbnailsDisplayer = props => {
  return (
    <div className="AlbumsContainer">
      {props.isLoading ?
      <div  className="AlbumsLoader"><LoadingIndicator height={"50px"}/></div> :
      <div className="AlbumsTitleContainer">
        <div className="AlbumsTitle"><h3>Albums</h3></div>
      </div>}
        <Albums
          albums={props.albums}
          changeAlbum={props.changeAlbum}
          activeAlbum={props.activeAlbum}
          isLoading={props.isLoading}/>
    </div>
  );
};

export default thumbnailsDisplayer;
