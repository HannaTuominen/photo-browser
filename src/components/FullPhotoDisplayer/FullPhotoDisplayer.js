import React from 'react';

import Modal from "../UI/Modal/Modal";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import ImageViewer from "./ImageViewer/ImageViewer";
import Loader from "react-loader-spinner";
import LoadingIndicator from "../UI/LoadingIndicator/LoadingIndicator";


const fullPhotoDisplayer = (props) => {
  return (
    <Auxiliary>:
      <Modal show={props.show} closeModal={props.closeModal}>
        <ImageViewer activeImage={props.activeImage} isLoading={props.isLoading}/>
      </Modal>}
    </Auxiliary>
  );
};

export default fullPhotoDisplayer;
