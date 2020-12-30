import React from 'react';

const thumbnail = (props) => (
  <div>
    <div onClick={() => props.showImageViewer(props.id)}><img src={props.thumbnail}/></div>
    <div><label>Hi this is the title</label></div>
  </div>
);

export default thumbnail;
