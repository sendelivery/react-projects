import React from 'react'

const Footer = () => {
  return (
    <div className="footer-height bg-gray-600">
      <div className="button-container mx-auto grid grid-cols-4 grid-rows-2 gap-2">
        <LargeButton className="col-span-2" text="Play Selected World" />{" "}
        {/* gray unless selected, useRef? */}
        <LargeButton className="col-span-2" text="Create New World" />
        <SmallButton text="Edit" /> {/* gray unless selected */}
        <SmallButton text="Delete" /> {/* gray unless selected */}
        <SmallButton text="Re-Create" /> {/* gray unless selected */}
        <SmallButton text="Cancel" />
      </div>
    </div>
  );
};

export default Footer
