import React from 'react';

import './Album.css';

const album = props => {
  let thumbnail;

  switch (props.type) {
    case ('active'):
      thumbnail =
        <div className="AlbumCover">
          <div onClick={() => props.changeAlbum(props.id)} className="Active" >
            <h3>{props.id}</h3>
          </div>
        </div>;
      break;
    case ('inactive'):
      thumbnail =
        <div className="AlbumCover">
          <div onClick={() => props.changeAlbum(props.id)} className="Inactive" >
            <h3>{props.id}</h3>
          </div>
        </div>;
      break;
    default:
      thumbnail = null;
  }
  return thumbnail;


};

export default album;
