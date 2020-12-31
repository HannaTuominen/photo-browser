import React, {useEffect, useState} from 'react';
import axios from "axios";

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import FullPhotoDisplayer from "../../components/FullPhotoDisplayer/FullPhotoDisplayer";


const PhotoDisplayer = props => {
  const [active, setActive] = useState({});
  const [showImageViewer, setShowImageViewer] = useState(true);
  const {albumId, imageId} = props.match.params;

  useEffect(async () => {
    // const {albumId, imageId} = props.match.params;
    console.log(imageId + "asdasd");

    await axios.get( process.env.REACT_APP_BACK_URL + '/albums/' + albumId + '/photos?id=' + imageId)
      .then( response => {
        console.log(response.data);
        setActive(updateUrls(response.data[0]));
        setShowImageViewer(true);
      } );

  }, []);

  const updateUrls = (photos) => {
    let newPhotos = photos;
    // console.log(photos);

    newPhotos.url = newPhotos.url.slice(0,4) + newPhotos.url.slice(5);
    newPhotos.thumbnailUrl= newPhotos.thumbnailUrl.slice(0, 4) + newPhotos.thumbnailUrl.slice(5);
    return newPhotos;
  };

  const closeModalHandler = () => {
    setShowImageViewer(false);
    props.history.push("/gallery/album/" + albumId);
  };

  return (
    <Auxiliary>
      <FullPhotoDisplayer
        show={showImageViewer}
        closeModal={closeModalHandler}
        activeImage={active}
      />
    </Auxiliary>
  );
};

export default PhotoDisplayer;
