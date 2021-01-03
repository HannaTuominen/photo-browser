import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import axios from "axios";

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import ThumbnailsDisplayer from "../../components/ThumbnailsDisplayer/ThumbnailsDisplayer";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import AlbumsDisplayer from "../../components/AlbumsDisplayer/AlbumsDisplayer";

const PhotoBrowser = props => {

  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState({});
  const [isLoadingAlbums, setIsLoadingAlbums] = useState(false);
  const [isLoadingPhotos, setIsLoadingPhotos] = useState(false);

  const {albumId} = useParams();

  useEffect(() => {
    setIsLoadingAlbums(true);
    axios.get( process.env.REACT_APP_BACK_URL + '/users/1/albums/')
      .then( response => {
        setAlbums(response.data);
        setActiveAlbum(response.data[albumId - 1]);
        setIsLoadingAlbums(false);
      }).catch((error) => setHasError(error.message));
  }, []);

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
            <AlbumsDisplayer
              albums={albums}
              changeAlbum={changeAlbum}
              activeAlbum={activeAlbum}
              isLoading={isLoadingAlbums}
            />
            <ThumbnailsDisplayer
              thumbnails={photos}
              showImageViewer={ShowImageViewerHandler}
              isLoading={isLoadingPhotos}
            />
          </div>
      </Auxiliary>
    );
};

export default PhotoBrowser;
