import React from "react";
import { LargeButton, SmallButton } from "./buttons";

const Footer = () => {
  return (
    <div className="footer-height bg-gray-600">
      <div className="flex justify-center">
        <LargeButton text="Play Selected World" />{" "}
        {/* gray unless selected, useRef? */}
        <LargeButton text="Create New World" />
      </div>
      <div className="flex justify-center">
        <SmallButton text="Edit" /> {/* gray unless selected */}
        <SmallButton text="Delete" /> {/* gray unless selected */}
        <SmallButton text="Re-Create" /> {/* gray unless selected */}
        <SmallButton text="Cancel" />
      </div>
    </div>
  );
};

export default Footer;
