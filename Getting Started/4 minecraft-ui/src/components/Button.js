import React from "react";

const GenericButton = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
);

export default GenericButton;