import React from 'react';

import './Album.css';

const album = props => (
    <div onClick={() => props.changeAlbum(props.id)} className="AlbumCover">
      <div >
        <h3>{props.id}</h3>
      </div>
      {/*Album nro:{props.id}, title: {props.title}*/}
    </div>
);

export default album;
