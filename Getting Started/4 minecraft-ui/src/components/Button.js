import React, { useContext } from "react";
import { SceneContext } from "../contexts/SceneContext";

const LargeButton = (props) => (
  <button
    className="button large-button"
    onClick={props.onClick}
    disabled={props.disabled}
  >
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
    <button
      className="button medium-button"
      onClick={() => c.handleSceneSwitch(c.sceneList.MAIN)}
    >
      Back to Start
    </button>
  );
};

const TextInputWithLabel = ({
  id,
  type = "text",
  isFocused,
  onInputChange,
  children,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        onChange={onInputChange ? onInputChange : undefined}
      />
    </>
  );
};

export {
  LargeButton,
  MediumButton,
  SmallButton,
  BackToMain,
  TextInputWithLabel,
};
