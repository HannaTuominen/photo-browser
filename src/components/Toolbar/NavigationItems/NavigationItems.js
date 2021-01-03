import React from 'react';
import  './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/gallery/albums">Photos</NavigationItem>
  </ul>
);

export default navigationItems;
