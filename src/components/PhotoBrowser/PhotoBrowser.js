import React, {useState} from 'react';

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import ThumbnailsDisplayer from "../../containers/ThumbnailsDisplayer/ThumbnailsDisplayer";
import AlbumsDisplayer from "../../containers/AlbumsDisplayer/AlbumsDisplayer";
import {Route} from "react-router-dom";

const PhotoBrowser = props => {

    return (
      <Auxiliary>
          <div>
            <AlbumsDisplayer/>
            <Route path="/gallery/albums/:albumId" render={(props) => <ThumbnailsDisplayer {...props} />}/>
          </div>
      </Auxiliary>
    );
};

export default PhotoBrowser;
