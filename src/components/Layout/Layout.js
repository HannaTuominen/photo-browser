import React from 'react';
import './Layout.css';

const layout = (props) => (
  <div>
    <div>Photo Browser App</div>
    <main className="Layout">
      {props.children}
    </main>
  </div>
);

export default layout;
