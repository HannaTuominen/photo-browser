import React from 'react';
import './Layout.css';
import Auxiliary from "../../hoc/Auxiliary";

const layout = (props) => (
  <Auxiliary>
    <div>Photo Browser App</div>
    <main className="Layout">
      {props.children}
    </main>
  </Auxiliary>
);

export default layout;
