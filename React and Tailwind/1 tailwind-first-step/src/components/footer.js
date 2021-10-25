import React from "react";
import { LargeButton, SmallButton } from "./buttons";

const Footer = ({ selectedWorld }) => {
  return (
    <div className="footer flex pt-4">
      <div className="button-container self-center mx-auto grid grid-cols-4 grid-rows-2 gap-x-7 gap-y-5 ">
        <LargeButton
          disabled={!selectedWorld}
          className="col-span-2"
          text="Play Selected World"
        />
        <LargeButton className="col-span-2" text="Create New World" />
        <SmallButton disabled={!selectedWorld} className="" text="Edit" />
        <SmallButton disabled={!selectedWorld} className="" text="Delete" />
        <SmallButton disabled={!selectedWorld} className="" text="Re-Create" />
        <SmallButton className="" text="Cancel" />
      </div>
    </div>
  );
};

export default Footer;
