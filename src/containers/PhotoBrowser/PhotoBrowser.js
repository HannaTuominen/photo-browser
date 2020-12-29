import React, { Component } from 'react';
import axios from "axios";

import './PhotoBrowser.css';
import ThumbnailsList from "../../components/ignore/ThumbnailsList/ThumbnailsList";
import Thumbnails from "../../components/Thumbnails/Thumbnails";

class PhotoBrowser extends Component {
  state = {
    photos: [],
    albums: []
  };

  //QuickFix for the https problem with jsonplaceholder
  updateUrls(photos) {
    let newPhotos = photos.map(function(x) {
      x.url = x.url.slice(0,4) + x.url.slice(5);
      x.thumbnailUrl = x.thumbnailUrl.slice(0, 4) + x.thumbnailUrl.slice(5);
      return x;
    });

    return newPhotos;
  };

  async componentDidMount() {
    await axios.get( process.env.REACT_APP_BACK_URL + '/albums/1/photos')
      .then( response => {
        console.log(response.data);
        this.setState( {
          photos: this.updateUrls(response.data)
        } );
      } );
  }

  render() {
    return (
      <div className="PhotoBrowserContainer">
        <div className="AlbumsContainer">
          Albums
        </div>
        <div className="ThumbnailsContainer">
          <Thumbnails thumbnails={this.state.photos}/>
        </div>
      </div>
    );
  }
}

export default PhotoBrowser;
