import React from 'react';
import './Layout.css';
import Auxiliary from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Toolbar/Toolbar";

const layout = props => (
  <Auxiliary>
    <Toolbar/>
    <main className="LayoutContent">
      {props.children}
    </main>
  </Auxiliary>
);

export default layout;
