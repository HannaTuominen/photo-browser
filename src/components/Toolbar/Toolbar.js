import React from 'react';

import {useHistory} from 'react-router-dom';

import './Toolbar.css';
import NavigationItems from "./NavigationItems/NavigationItems";

const Toolbar = props => {

  const history = useHistory();

  const getToHome = () => {
    history.push("/");
  };

  return (
    <header className="Toolbar">
    <div onClick={getToHome} className="ToolbarLink">
      <h4>Home</h4>
    </div>
    <nav>
      <NavigationItems/>
    </nav>
  </header>
)};

export default Toolbar;
