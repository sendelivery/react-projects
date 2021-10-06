import React from "react";

const LargeButton = ({ className, text }) => {
  return <button className={`${className} large-button`}>{text}</button>;
};
// 348 - 940 + 4px border = 592

const SmallButton = ({ className, text }) => {
  return <button className={`${className} small-button`}>{text}</button>;
};
//  628 - 348 = 280

export { LargeButton, SmallButton };
