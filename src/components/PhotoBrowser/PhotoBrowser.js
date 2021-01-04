import React, {Suspense} from 'react';

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import AlbumsDisplayer from "../../containers/AlbumsDisplayer/AlbumsDisplayer";
import {Route, Switch} from "react-router-dom";

import './PhotoBrowser.css';
import AlbumsWelcome from "./AlbumsWelcome/AlbumsWelcome";
import LoadingIndicator from "../UI/LoadingIndicator/LoadingIndicator";

const ThumbnailsDisplayer = React.lazy(() => {
  return import('../../containers/ThumbnailsDisplayer/ThumbnailsDisplayer');
});

const PhotoDisplayer = React.lazy(() => {
  return import('../../containers/PhotoDisplayer/PhotoDisplayer');
});

const PhotoBrowser = props => {

    return (
      <Auxiliary>
          <div>
            <AlbumsDisplayer/>
            <Suspense fallback={<div style={{marginTop: '100px'}}> <LoadingIndicator height={"100px"}/></div>}>
            <Switch>
              <Route exact path="/gallery/albums" render={(props) => <AlbumsWelcome/>}/>
              <Route path="/gallery/albums/:albumId" render={(props) => <ThumbnailsDisplayer{...props} />}/>
            </Switch>
            <Route path="/gallery/albums/:albumId/image/:imageId" render={(props) => <PhotoDisplayer {...props}/>} />
            </Suspense>
          </div>
      </Auxiliary>
    );
};

export default PhotoBrowser;
