import React, {useEffect, useState, useCallback} from 'react';
import axios from "axios";

import './PhotoBrowser.css';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import PhotoBrowserDisplayer from "../../components/PhotoBrowserDisplayer/PhotoBrowserDisplayer";
import Albums from "../../components/PhotoBrowserDisplayer/Albums/Albums";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";


const PhotoBrowser = props => {

  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState({});
  const [isLoadingAlbums, setIsLoadingAlbums] = useState(false);
  const [isLoadingPhotos, setIsLoadingPhotos] = useState(false);

  const {albumId} = props.match.params;

  useEffect(() => {
    setIsLoadingAlbums(true);
    axios.get( process.env.REACT_APP_BACK_URL + '/users/1/albums/')
      .then( response => {
        setAlbums(response.data);
        setActiveAlbum(response.data[albumId -1]);
        setIsLoadingAlbums(false);
      }).catch((error) => setHasError(error.message));
  }, [albumId]);

  useEffect(  () => {
    setIsLoadingPhotos(true);
    axios.get( process.env.REACT_APP_BACK_URL + '/albums/'+ albumId +'/photos')
      .then( response => {
        setPhotos(response.data);
        setIsLoadingPhotos(false);
      }).catch((error) => setHasError(error.message));
  }, [albumId]); // follow the albumId to fetch correct photos based on the selected album

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

  const clearError = () => {
    setHasError(false);
    setIsLoadingAlbums(false);
    setIsLoadingPhotos(false);
    props.history.push("/gallery/album/");
  };

    return (
      <Auxiliary>
        {hasError &&
        <ErrorModal
          show={hasError}
          closeModal={clearError}>
          {hasError}
        </ErrorModal>}
          <div>
            <div className="AlbumsContainer">
              <Albums
                albums={albums}
                changeAlbum={changeAlbum}
                activeAlbum={activeAlbum}
                isLoading={isLoadingAlbums}/>
            </div>
              <PhotoBrowserDisplayer
                thumbnails={photos}
                showImageViewer={ShowImageViewerHandler}
                isLoading={isLoadingPhotos}
              />
          </div>
      </Auxiliary>
    );
};

export default PhotoBrowser;
