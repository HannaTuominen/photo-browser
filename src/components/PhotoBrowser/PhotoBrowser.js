import React, {useEffect, useState} from 'react';

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import ThumbnailsDisplayer from "../../containers/ThumbnailsDisplayer/ThumbnailsDisplayer";
import AlbumsDisplayer from "../../containers/AlbumsDisplayer/AlbumsDisplayer";

const PhotoBrowser = props => {

    return (
      <Auxiliary>
          <div>
            <AlbumsDisplayer/>
            <ThumbnailsDisplayer/>
          </div>
      </Auxiliary>
    );
};

export default PhotoBrowser;
