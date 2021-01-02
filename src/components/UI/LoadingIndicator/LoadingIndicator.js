import React from 'react';
import Loader from "react-loader-spinner";

import './LoadingIndicator.css';

const LoadingIndicator = props => (
  <div className="LoadingIndicatorContainer">
    <Loader type="Oval" color="#000" height={props.height}/>
  </div>
);

export default LoadingIndicator;
