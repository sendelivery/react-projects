import React, { useContext } from "react";
import { SceneContext } from "../contexts/SceneContext";

const LargeButton = (props) => (
  <button className="button large-button" onClick={props.onClick}>
    {props.text}
  </button>
);

const MediumButton = (props) => (
  <button className="button medium-button" onClick={props.onClick}>
    {props.text}
  </button>
);

const SmallButton = (props) => (
  <button className="button small-button" onClick={props.onClick}>
    {props.text}
  </button>
);

const BackToMain = () => {
  const c = useContext(SceneContext);

  return (
    <button className="button medium-button" onClick={() => c.setScene(c.sceneList.MAIN)}>
      Back to Start
    </button>
  );
};

export { LargeButton, MediumButton, SmallButton, BackToMain };
