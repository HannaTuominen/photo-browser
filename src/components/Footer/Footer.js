import React from 'react';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

import './Footer.css';

const footer = props => {
  let footer;

  switch (props.footerPlace) {
    case ('FooterLayout'):
      footer =
        <Auxiliary>
        <div className="FooterLayout">
          <div><p>Hanna's beautiful photo gallery</p></div>
        </div>
      </Auxiliary>;
      break;
    case ('FooterLayoutWelcome'):
      footer =
        <Auxiliary>
          <div className="FooterLayoutWelcome">
            <div><p>Hanna's beautiful photo gallery</p></div>
          </div>
        </Auxiliary>;
      break;
    case ('FooterHome'):
      footer =
        <Auxiliary>
          <div className="FooterHome">
            <div><p>Hanna's beautiful photo gallery</p></div>
          </div>
        </Auxiliary>;
      break;
    default:
      footer = null;
  }
  return (<div>{footer}</div>);
  };

export default footer;
