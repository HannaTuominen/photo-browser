import React from 'react';

import './Thumbnail.css';

const thumbnail = props => (
  <div className="Thumbnail">
    <div onClick={() => props.showImageViewer(props.albumId, props.id)} ><img src={props.thumbnail} className="ThumbnailImage" alt={props.title}/></div>
  </div>
);

export default thumbnail;
