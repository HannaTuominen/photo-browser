import React from 'react';
import Auxiliary from "../../../../hoc/Auxiliary";

const imageInfo = props => {
  // console.log(props.info);
  return (
    <Auxiliary>
      <div>
        <h1>Title: {props.info.title}</h1>
        <h1>Album: {props.info.albumId}</h1>
      </div>
    </Auxiliary>
  );
};

export default imageInfo;
