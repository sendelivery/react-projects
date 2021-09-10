import React, { useContext, useState, useEffect } from "react";
import { LargeButton, MediumButton } from "../components/Button";
import { SceneContext } from "../contexts/SceneContext";

const SinglePlayer = () => {
  const c = useContext(SceneContext);
  const sceneList = c.sceneList; 

  const largeButtons = [
    { text: "Play Selected World", scene: sceneList.NOT_IMPLEMENTED },
    { text: "Create New World", scene: sceneList.CREATE },
  ];
  const mediumButtons = [
    { text: "Edit", scene: sceneList.NOT_IMPLEMENTED },
    { text: "Delete", scene: sceneList.NOT_IMPLEMENTED },
    { text: "Re-Create", scene: sceneList.NOT_IMPLEMENTED },
    { text: "Cancel", scene: sceneList.MAIN },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("sorting the world list...");
  }, [searchTerm]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

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
          {largeButtons.map((item) => (
            <LargeButton
              text={item.text}
              onClick={() => c.setScene(item.scene)}
              key={item.text}
            />
          ))}
        </div>
        <div>
          {mediumButtons.map((item) => (
            <MediumButton
              text={item.text}
              onClick={() => c.setScene(item.scene)}
              key={item.text}
            />
          ))}
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
