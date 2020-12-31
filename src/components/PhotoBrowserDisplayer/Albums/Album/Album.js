import React from 'react';

const album = props => (
  <div>
    <div onClick={() => props.changeAlbum(props.id)} >Album nro:{props.id}, title: {props.title}</div>
  </div>
);

export default album;
