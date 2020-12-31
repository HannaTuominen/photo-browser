import React from 'react';

const thumbnail = props => (
  <div>
    <div onClick={() => props.showImageViewer(props.albumId, props.id)} ><img src={props.thumbnail}/></div>
    <div><label>{props.albumId}</label></div>
  </div>
);

export default thumbnail;
