import React from 'react';
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";

const imageInfo = props => {
  // console.log(props.info);
  return (
    <Auxiliary>
      <div>
        <div>
          <h4>Title:</h4>
          <label>{props.info.title}</label>
        </div>
        <div>
          <h4>Album:</h4>
          <label> {props.info.albumId}</label>
        </div>
      </div>
    </Auxiliary>
  );
};

export default imageInfo;
