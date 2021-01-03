import Thumbnails from "../../components/PhotoBrowser/Thumbnails/Thumbnails";

import React, {useEffect, useState} from 'react';

import './ThumbnailsDisplayer.css';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";
import LoadingIndicator from "../../components/UI/LoadingIndicator/LoadingIndicator";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import Footer from "../../components/Footer/Footer";

const ThumbnailsDisplayer = props => {

  const [photos, setPhotos] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoadingPhotos, setIsLoadingPhotos] = useState(false);

  const {albumId} = useParams();
  const history = useHistory();

  useEffect(  () => {
    setIsLoadingPhotos(true);
    axios.get( process.env.REACT_APP_BACK_URL + '/albums/'+ albumId +'/photos')
      .then( response => {
        setPhotos(response.data);
        setIsLoadingPhotos(false);
      }).catch((error) => setHasError(error.message));
  }, [albumId]); // follow the albumId to fetch correct photos based on the selected album

  const ShowImageViewerHandler = (album, clickedImageId) => {
    history.push("/gallery/albums/"+ album + "/image/" + clickedImageId);
  };

  const clearError = () => {
    setHasError(false);
    setIsLoadingPhotos(false);
    history.push("/gallery/albums");
  };

  return (
    <Auxiliary>
      {hasError &&
      <ErrorModal
        show={hasError}
        closeModal={clearError}>
        {hasError}
      </ErrorModal>}
    {isLoadingPhotos ?
    <div className="PhotoLoader"> <LoadingIndicator height={"100px"}/></div>:
    <div className="ThumbnailsContainer">
        <Thumbnails
          thumbnails={photos}
          showImageViewer={ShowImageViewerHandler}/>
      <Footer footerPlace={"FooterLayout"}/>
    </div>}


    </Auxiliary>
  );
};

export default ThumbnailsDisplayer;
