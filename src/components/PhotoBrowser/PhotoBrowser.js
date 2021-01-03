import React from 'react';

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import ThumbnailsDisplayer from "../../containers/ThumbnailsDisplayer/ThumbnailsDisplayer";
import AlbumsDisplayer from "../../containers/AlbumsDisplayer/AlbumsDisplayer";
import {Route, Switch} from "react-router-dom";
import PhotoDisplayer from "../../containers/PhotoDisplayer/PhotoDisplayer";

import './PhotoBrowser.css';
import AlbumsWelcome from "../AlbumsWelcome/AlbumsWelcome";

const PhotoBrowser = props => {

    return (
      <Auxiliary>
          <div>
            <AlbumsDisplayer/>
            <Switch>
              <Route exact path="/gallery/albums" render={(props) => <AlbumsWelcome/>}/>
              <Route path="/gallery/albums/:albumId" render={(props) => <ThumbnailsDisplayer{...props} />}/>
            </Switch>
            <Route path="/gallery/albums/:albumId/image/:imageId" render={(props) => <PhotoDisplayer {...props}/>} />
          </div>
      </Auxiliary>
    );
};

export default PhotoBrowser;
