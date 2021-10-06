import React from "react";

const LargeButton = ({ text }) => {
  return <button className="large-button">{text}</button>;
};
// 348 - 940 + 4px border = 592

const SmallButton = ({ text }) => {
  return <button className="small-button">{text}</button>;
};
//  628 - 348 = 280

export { LargeButton, SmallButton };
