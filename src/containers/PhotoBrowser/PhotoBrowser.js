import React, {useEffect, useState} from 'react';
import axios from "axios";

import '../../components/PhotoBrowserDisplayer/PhotoBrowserDisplayer.css';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import PhotoBrowserDisplayer from "../../components/PhotoBrowserDisplayer/PhotoBrowserDisplayer";
import Albums from "../../components/PhotoBrowserDisplayer/Albums/Albums";
import Modal from "../../components/UI/Modal/Modal";

const PhotoBrowser = props => {

  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState({});

  const {albumId} = props.match.params;

  useEffect(() => {
    fetchAlbums();
  }, []);

  useEffect(  () => {
    fetchPhotos(albumId);
  }, [albumId]); // follow the albumId to fetch correct photos based on the selected album

    function fetchAlbums() {
      axios.get( process.env.REACT_APP_BACK_URL + '/users/1/albums/')
      .then( response => {
        setAlbums(response.data);
        setActiveAlbum(response.data[albumId -1]);
      }).catch(() => setHasError(true));
   }

   function fetchPhotos(albumId) {
     axios.get( process.env.REACT_APP_BACK_URL + '/albums/'+ albumId +'/photos')
      .then( response => {
        setPhotos(response.data);
      }).catch(() => setHasError(true));
   }

  //QuickFix for the https problem with jsonplaceholder
  const updateUrls = (photos) => {
    let newPhotos = photos.map(function(x) {
      x.url = x.url.slice(0,4) + x.url.slice(5);
      x.thumbnailUrl = x.thumbnailUrl.slice(0, 4) + x.thumbnailUrl.slice(5);
      return x;
    });

    return newPhotos;
  };

  const ShowImageViewerHandler = (album, clickedImageId) => {
    props.history.push("/gallery/album/"+ album + "/image/" + clickedImageId);
  };

  const changeAlbum = (clickedAlbumId) => {
    const currentAlbums = albums;
    const index = currentAlbums.findIndex(album => album.id === clickedAlbumId);

    const selectedAlbum = currentAlbums[index];

    setActiveAlbum(selectedAlbum);
    props.history.push("/gallery/album/"+ clickedAlbumId);
  };

  const closeModalHandler = () => {
    props.history.push("/gallery/album/");
  };

    return (
      <Auxiliary>
        {hasError ?
          <Modal show={true} closeModal={closeModalHandler}>
            <h1>There was an error</h1>
          </Modal>
          :
          <Auxiliary>
            <div className="AlbumsContainer">
              <Albums
                albums={albums}
                changeAlbum={changeAlbum}
                activeAlbum={activeAlbum}/>
            </div>
            <PhotoBrowserDisplayer
              thumbnails={photos}
              showImageViewer={ShowImageViewerHandler}
              />
          </Auxiliary>
        }

      </Auxiliary>
    );
};

export default PhotoBrowser;
