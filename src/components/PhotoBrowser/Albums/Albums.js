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
      <div className="AlbumsList">
        {albums}
      </div>
  );
};

export default albums;
