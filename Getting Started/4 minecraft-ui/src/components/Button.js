import React from "react";

const LargeButton = (props) => (
  <button className="large-button" onClick={props.onClick}>
    {props.text}
  </button>
);

const MediumButton = (props) => (
  <button className="medium-button" onClick={props.onClick}>
    {props.text}
  </button>
);

const SmallButton = (props) => (
  <button className="small-button" onClick={props.onClick}>
    {props.text}
  </button>
);

export { LargeButton, MediumButton, SmallButton };
