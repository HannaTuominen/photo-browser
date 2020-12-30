import React from "react";

import PhotoBrowser from "./containers/PhotoBrowser/PhotoBrowser";
import Layout from "./components/Layout/Layout";
import {Redirect, Route} from "react-router-dom";
import PhotoDisplayer from "./containers/PhotoDisplayer/PhotoDisplayer";

const App = props => {
  return (
    <div>
      <Layout>
        <Route exact path="/">
          <Redirect to="/gallery" />
        </Route>
        <Route path="/gallery" component={PhotoBrowser}/>
        <Route path="/gallery/:id" component={PhotoDisplayer} />
      </Layout>
    </div>
  );
}

export default App;
