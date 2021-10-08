import React from "react";

const LargeButton = ({ disabled = false, className, text }) => {
  return (
    <button
      disabled={disabled}
      // ternary to switch disabled / non-disabled styles
      className={`disabled:button-disabled ${className} button-base large-button bg-opacity-0 bg-none `}
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
    >
      {text}
    </button>
  );
};
//  628 - 348 = 280

export { LargeButton, SmallButton };
