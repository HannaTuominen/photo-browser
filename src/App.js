import React from "react";

import PhotoBrowser from "./containers/PhotoBrowser/PhotoBrowser";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <PhotoBrowser/>
      </Layout>

    </div>
  );
}

export default App;
