import React from 'react';

import './AlbumsWelcome.css';
import Footer from "../Footer/Footer";

const albumsWelcome = props => {

  return (
    <div>

    <div className="AlbumsWelcomeContainer">
      <div className="HelpText">
        <h3>This is the albums page, select an album from the left to display photos!</h3>
      </div>
    </div>
      <div>
        <Footer footerPlace={"LayoutWelcome"}/>
      </div>
    </div>
  )};

export default albumsWelcome;
