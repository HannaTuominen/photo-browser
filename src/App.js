import React from "react";

import PhotoBrowser from "./containers/PhotoBrowser/PhotoBrowser";
import Layout from "./hoc/Layout/Layout";
import {Redirect, Route} from "react-router-dom";
import PhotoDisplayer from "./containers/PhotoDisplayer/PhotoDisplayer";

const App = props => {
  return (
    <div>
      <Layout>
        <Route exact path="/">
          <Redirect to="/gallery/album/1" />
        </Route>
        <Route path="/gallery/album/:albumId" component={PhotoBrowser}/>
        <Route path="/gallery/album/:albumId/image/:imageId" component={PhotoDisplayer} />
      </Layout>
    </div>
  );
}

export default App;
