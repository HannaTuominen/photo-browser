import React, {useEffect, useState} from 'react';

import Modal from "../UI/Modal/Modal";
import Auxiliary from "../../hoc/Auxiliary";
import ImageViewer from "./ImageViewer/ImageViewer";


const fullPhotoDisplayer = props => {
  //console.log(props.activeImage);
  return (
    <Auxiliary>
      <Modal show={props.show} closeModal={props.closeModal}>
        <ImageViewer activeImage={props.activeImage}/>
      </Modal>
    </Auxiliary>
  );
};

export default fullPhotoDisplayer;
