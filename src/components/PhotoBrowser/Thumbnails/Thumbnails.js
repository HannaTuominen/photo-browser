import React from 'react';
import Thumbnail from "./Thumbnail/Thumbnail";
import './Thumbnails.css';

const thumbnails = props => {
  let thumbnails = props.thumbnails.map(thumbnail => {
    return (
        <Thumbnail
          key={thumbnail.id}
          thumbnail={thumbnail.thumbnailUrl}
          id={thumbnail.id}
          showImageViewer={props.showImageViewer}
          albumId={thumbnail.albumId}
          title={thumbnail.title}
        />
      )
  });

  return (
    <div className="ThumbnailsRow">
      {thumbnails}
    </div>
  );
};

export default thumbnails;
