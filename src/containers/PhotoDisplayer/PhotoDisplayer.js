import React, {useEffect, useState} from 'react';
import axios from "axios";

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import FullPhotoDisplayer from "../../components/FullPhotoDisplayer/FullPhotoDisplayer";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import {useParams} from "react-router-dom";


const PhotoDisplayer = props => {
  const [active, setActive] = useState({});
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [hasError, setHasError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const {albumId, imageId} = useParams();

  useEffect( () => {
    setIsLoading(true);
    axios.get( process.env.REACT_APP_BACK_URL + '/albums/' + albumId + '/photos?id=' + imageId)
      .then( response => {
        if(response.data[0] === undefined) {
          setHasError("Invalid image path");
        } else {
          setActive(response.data[0]);
          setShowImageViewer(true);
        }
        setIsLoading(false)
      }).catch((error) => setHasError(error.message));
  }, [albumId, imageId]);

  const closeModalHandler = () => {
    setShowImageViewer(false);
    props.history.push("/gallery/albums/" + albumId);
  };

  const clearError = () => {
    setHasError(false);
    setIsLoading(false);
    props.history.push("/gallery/albums/");
  };

  return (
    <Auxiliary>
      {hasError ?
      <ErrorModal
        show={hasError}
        closeModal={clearError}>
        {hasError}
      </ErrorModal> :
        <FullPhotoDisplayer
          show={showImageViewer}
          close={closeModalHandler}
          activeImage={active}
          isLoading={isLoading}
        />}
      }
    </Auxiliary>
  );
};

export default PhotoDisplayer;
