import React from 'react';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

import './Home.css';
import Footer from "../Footer/Footer";

const home = props => (
  <Auxiliary>
    <div className="HomeContainer">
      <h2>Welcome to the site!</h2>
      <label>This site uses <a href="http://jsonplaceholder.typicode.com/">JSONPlaceholder</a>.</label>
    </div>
    <Footer footerPlace={""}/>
  </Auxiliary>

);

export default home;
