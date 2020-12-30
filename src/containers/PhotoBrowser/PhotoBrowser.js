import React, { Component } from 'react';
import axios from "axios";

import './PhotoBrowser.css';
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../../hoc/Auxiliary";
import ImageViewer from "../../components/ImageViewer/ImageViewer";

class PhotoBrowser extends Component {
  state = {
    photos: [],
    albums: [],
    active: {},
    showImageViewer: false
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

  showImageViewerHandler = (clickedImageId) => {
    console.log(clickedImageId);

    const allPhotos = this.state.photos;
    let index = allPhotos.findIndex(photo => photo.id === clickedImageId);
    let newActiveImage = allPhotos[index];

    this.setState({showImageViewer: true, active: newActiveImage});
  };

  closeModalHandler = () => {
    this.setState({showImageViewer: false});
  };

  render() {
    return (
      <Auxiliary>
        <Modal show={this.state.showImageViewer} closeModal={this.closeModalHandler}>
          <ImageViewer activeImage={this.state.active}/>
        </Modal>
        <div className="PhotoBrowserContainer">
          <div className="AlbumsContainer">
            Albums
          </div>
          <div className="ThumbnailsContainer">
            <Thumbnails
              thumbnails={this.state.photos}
              showImageViewer={this.showImageViewerHandler}/>
          </div>
        </div>
      </Auxiliary>
    );
  }
}

export default PhotoBrowser;
