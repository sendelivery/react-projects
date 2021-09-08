import React, { useContext, useState, useEffect } from "react";
import { LargeButton, MediumButton } from "../components/Button";
import { SceneContext } from "../contexts/SceneContext";

const SinglePlayer = () => {
  const context = useContext(SceneContext)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("sorting the world list...");
  }, [searchTerm]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const onClick = () => {
      console.log("click");
  }

  return (
    <>
      <div className="header">
        <h1>Select World</h1>
        <SearchInput
          id="world-search"
          type="text"
          value={searchTerm}
          onInputChange={handleSearchInput}
        />
      </div>
      <div className="world-select">
          <ul>
              <li>World 1</li>
              <li>World 2</li>
          </ul>
      </div>
      <div className="footer">
        <div>
          <LargeButton text="Play Selected World" onClick={onClick} />
          <LargeButton text="Create New World" onClick={onClick} />
        </div>
        <div>
          <MediumButton text="Edit" onClick={onClick} />
          <MediumButton text="Delete" onClick={onClick} />
          <MediumButton text="Re-Create" onClick={onClick} />
          <MediumButton text="Cancel" onClick={() => context.setScene("Start")} />
        </div>
      </div>
    </>
  );
};

const SearchInput = ({ id, type, value, onInputChange }) => {
  // use useRef and useEffect hooks to focus on rendering this page?

  return (
    <>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        className="text-input"
      />
    </>
  );
};

export default SinglePlayer;
