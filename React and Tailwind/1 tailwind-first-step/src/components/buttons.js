import React from "react";
import btn121 from "../assets/audio/btn121.wav";

const LargeButton = ({ disabled = false, className, text }) => {
  return (
    <button
      disabled={disabled}
      className={`${className} button-base large-button bg-opacity-0 bg-none `}
      onClick={e => {
        buttonAudio.play();
        e.target.blur();
      }}
    >
      {text}
    </button>
  );
};
// 348 - 940 + 4px border = 592

const SmallButton = ({ disabled, className, text }) => {
  return (
    <button
      disabled={disabled}
      className={`disabled:button-disabled ${className} button-base small-button`}
      onClick={e => {
        buttonAudio.play();
        e.target.blur();
      }}
    >
      {text}
    </button>
  );
};
//  628 - 348 = 280

const buttonAudio = new Audio(btn121);
buttonAudio.volume = 0.01;

export { LargeButton, SmallButton, buttonAudio };
