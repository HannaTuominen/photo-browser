import React from 'react';
import Album from "./Album/Album";

import './Albums.css';
import LoadingIndicator from "../../UI/LoadingIndicator/LoadingIndicator";

const albums = props => {
  let albums = props.albums.map(albums => {

    if(albums.id === props.activeAlbum.id) {
      return (
        <Album
          key={albums.id}
          title={albums.title}
          id={albums.id}
          changeAlbum={props.changeAlbum}
          type={"active"}
        />)
    } else {
      return (
        <Album
          key={albums.id}
          title={albums.title}
          id={albums.id}
          changeAlbum={props.changeAlbum}
          type={"inactive"}
        />
      )
    }
  });

  return (
    <div>
      <div className="AlbumsText">
        {props.isLoading ? <LoadingIndicator height={"50px"}/> :
        <div>
          <h3>Albums</h3>
        </div>}
      </div>
      <div className="AlbumsList">
        {albums}
      </div>
    </div>
  );
};

export default albums;
