import React from "react";
import { LargeButton, SmallButton } from "./buttons";

const Footer = ({ selectedWorld }) => {
  return (
    <div className="footer medium-dim-bg flex pt-4">
      <div className="button-container self-center mx-auto grid grid-cols-4 grid-rows-2 gap-x-7 gap-y-5 ">
        <LargeButton
          disabled={!selectedWorld}
          className="col-span-2"
          text="Play Selected World"
        />
        {/* above is gray unless selected, useRef? */}
        <LargeButton className="col-span-2" text="Create New World" />
        <SmallButton disabled={!selectedWorld} className="" text="Edit" />
        {/* above is gray unless selected */}
        <SmallButton disabled={!selectedWorld} className="" text="Delete" />
        {/* above is gray unless selected */}
        <SmallButton disabled={!selectedWorld} className="" text="Re-Create" />
        {/* above is gray unless selected */}
        <SmallButton className="" text="Cancel" />
      </div>
    </div>
  );
};

export default Footer;
