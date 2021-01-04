import React from 'react';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

import './Home.css';
import Footer from "../Footer/Footer";

const home = props => (
  <Auxiliary>
    <div className="HomeContainer">
      <h2>Welcome to the site!</h2>
      <span>This site is a photo browser made with React. </span>
      <span>It uses <a href="http://jsonplaceholder.typicode.com/">JSONPlaceholder</a> as an API backend.</span>
    </div>
    <Footer footerPlace={"FooterHome"}/>
  </Auxiliary>

);

export default home;
