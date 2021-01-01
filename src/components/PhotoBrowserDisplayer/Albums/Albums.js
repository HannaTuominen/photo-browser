import React from 'react';
import Album from "./Album/Album";

import './Albums.css';

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
        <h3>Albums</h3>
      </div>
      <div className="AlbumsList">
        {albums}
      </div>
    </div>
  );
};

export default albums;
