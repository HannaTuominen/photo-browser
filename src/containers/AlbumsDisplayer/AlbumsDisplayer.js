import React, {useEffect, useRef, useState} from 'react';
import './AlbumsDisplayer.css';

import {useParams, useHistory, useLocation} from 'react-router-dom';

import axios from "axios";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import LoadingIndicator from "../../components/UI/LoadingIndicator/LoadingIndicator";
import Albums from "../../components/PhotoBrowser/Albums/Albums";

const AlbumsDisplayer = props => {

  const history = useHistory();

  const [albums, setAlbums] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState({});
  const [isLoadingAlbums, setIsLoadingAlbums] = useState(false);

  useEffect(() => {
    setIsLoadingAlbums(true);
    axios.get( process.env.REACT_APP_BACK_URL + '/users/1/albums/')
      .then( response => {
        setAlbums(response.data);

        let albumId = null;
        let currentPath = history.location.pathname;
        if(Object.keys(activeAlbum).length === 0 && currentPath !== "/gallery/albums/") {
          albumId = parseInt(currentPath.replace("/gallery/albums/", ""))
        }
        const index = response.data.findIndex((album) => album.id  === albumId);
        setActiveAlbum(response.data[index]);

        setIsLoadingAlbums(false);
      }).catch((error) => setHasError(error.message));

  }, []);

  const changeAlbum = (clickedAlbumId) => {
    const currentAlbums = albums;
    const index = currentAlbums.findIndex(album => album.id === clickedAlbumId);

    const selectedAlbum = currentAlbums[index];

    setActiveAlbum(selectedAlbum);
    history.push("/gallery/albums/"+ clickedAlbumId);
  };

  const clearError = () => {
    setHasError(false);
    setIsLoadingAlbums(false);

    props.history.push("/gallery/albums/");
  };

  return (
    <div className="AlbumsContainer">
      {hasError &&
      <ErrorModal
        show={hasError}
        closeModal={clearError}>
        {hasError}
      </ErrorModal>}
      {isLoadingAlbums ?
      <div  className="AlbumsLoader"><LoadingIndicator height={"50px"}/></div> :
      <div className="AlbumsTitleContainer">
        <div className="AlbumsTitle"><h3>Albums</h3></div>
      </div>}
        <Albums
          albums={albums}
          changeAlbum={changeAlbum}
          activeAlbum={activeAlbum}/>
    </div>
  );
};

export default AlbumsDisplayer;
