import React, {Suspense} from "react";

import PhotoBrowser from "./components/PhotoBrowser/PhotoBrowser";
import Layout from "./hoc/Layout/Layout";
import {Redirect, Route} from "react-router-dom";
import LoadingIndicator from "./components/UI/LoadingIndicator/LoadingIndicator";

const PhotoDisplayer = React.lazy(() => {
  return import('./containers/PhotoDisplayer/PhotoDisplayer');
});

const App = props => {
  return (
    <div>
      <Layout>
        <Suspense fallback={<div style={{marginTop: '100px'}}> <LoadingIndicator height={"100px"}/></div>}>
        <Route exact path="/">
          <Redirect to="/gallery/albums"/>
        </Route>
          <Route exact path="/gallery/albums/">
            <Redirect to="/gallery/albums"/>
          </Route>
          <Route exact path="/gallery">
            <Redirect to="/gallery/albums"/>
          </Route>
        <Route path="/gallery/albums" render={(props) => <PhotoBrowser {...props}/>}/>
        <Route path="/gallery/albums/:albumId/image/:imageId" render={(props) => <PhotoDisplayer {...props}/>} /></Suspense>
      </Layout>
    </div>
  );
}

export default App;
