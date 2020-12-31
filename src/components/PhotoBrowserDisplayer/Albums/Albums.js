import React from 'react';
import Album from "./Album/Album";


const albums = props => {
  let albums = props.albums.map(albums => {
    return (
      <Album
        key={albums.id}
        title={albums.title}
        id={albums.id}
        changeAlbum={props.changeAlbum}
      />
    )
  });

  return (
    <div className="ThumbnailsRow">
      {albums}
    </div>
  );
};

export default albums;
