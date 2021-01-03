import React from 'react';

import {useHistory} from 'react-router-dom';

import './Toolbar.css';

const Toolbar = props => {

  const history = useHistory();

  const getToHome = () => {
    history.push("/");
  };

  const getToGallery = () => {
    history.push("/gallery/albums");
  };

  return (
    <header className="Toolbar">
    <div onClick={getToHome} className="ToolbarLink">
      <h4>Home</h4>
    </div>
    <div className="ToolbarLink" onClick={getToGallery}>
      <h4>Photos</h4>
    </div>
  </header>
)};

export default Toolbar;
