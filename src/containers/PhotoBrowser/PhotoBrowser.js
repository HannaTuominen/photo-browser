import React, { Component } from 'react';
import axios from "axios";

import './PhotoBrowser.css';

class PhotoBrowser extends Component {
  render() {
    return (
      <div className="PhotoBrowserContainer">
        <div className="AlbumsContainer">
          Albums
        </div>
        <div className="ThumbnailsContainer">
          Thumbnails
        </div>
      </div>
    );
  }
}

export default PhotoBrowser;
