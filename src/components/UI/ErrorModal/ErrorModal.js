import React from 'react';

import Modal from "../Modal/Modal";

const ErrorModal = React.memo(props => {
  return (
    <div>
        <Modal show={props.show} closeModal={props.closeModal}>
          <h2>An Error Occurred!</h2>
          <p>{props.children}</p>
          <button type="button" closeModal={props.closeModal}>
            Okay
          </button>
        </Modal>
    </div>
  );
});

export default ErrorModal;
