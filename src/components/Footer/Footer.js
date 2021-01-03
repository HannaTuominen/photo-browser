import React from 'react';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

import './Footer.css';

const footer = props => {
    if(props.footerPlace === "Layout") {
      return (
        <Auxiliary>
          <div className="FooterLayout">
            <div><p>Hanna's beautiful photo gallery</p></div>
          </div>
        </Auxiliary>
      )
    } else if(props.footerPlace === "LayoutWelcome") {
      return (
        <Auxiliary>
          <div className="FooterLayoutWelcome">
            <div><p>Hanna's beautiful photo gallery</p></div>
          </div>
        </Auxiliary>
      )
    }
    else {
      return (
        <Auxiliary>
          <div className="FooterHome">
            <div><p>Hanna's beautiful photo gallery</p></div>
          </div>
        </Auxiliary>
      )
    }
  };

export default footer;
