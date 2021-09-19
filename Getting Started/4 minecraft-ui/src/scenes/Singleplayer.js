import React, { useContext, useState, useEffect } from "react";
import { World } from "../classes/World";
import { LargeButton, MediumButton } from "../components/Button";
import { SceneContext } from "../contexts/SceneContext";
import { WorldContext } from "../contexts/WorldListContext";

const Singleplayer = () => {
  const c = useContext(SceneContext);
  const sceneList = c.sceneList;

  const worldContext = useContext(WorldContext);
  const [selectedWorld, setSelectedWorld] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    worldContext.searchWorldList(searchTerm);
  }, [searchTerm]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const playSelected = (scene) => {
    if (selectedWorld) {
      worldContext.sortWorldList(selectedWorld);
      c.handleSceneSwitch(scene, selectedWorld);
    } else {
      console.log("no world selected to play");
    }
  };

  const deleteSelected = () => {
    if (selectedWorld) {
      worldContext.removeWorld(selectedWorld);
    } else {
      console.log("no world selected to delete");
    }
  };

  const actions = {
    PLAY: (scene) => playSelected(scene),
    CREATE: (scene) => c.handleSceneSwitch(scene, selectedWorld),
    EDIT: () => {
      console.log("edit");
    },
    DELETE: deleteSelected,
    RECREATE: () => {
      console.log("recreate");
    },
    CANCEL: () => {
      console.log("cancel");
    },
  };

  const largeButtons = [
    {
      text: "Play Selected World",
      scene: sceneList.PLAY,
      action: actions.PLAY,
    },
    {
      text: "Create New World",
      scene: sceneList.CREATE,
      action: actions.CREATE,
    },
  ];
  const mediumButtons = [
    { text: "Edit", scene: sceneList.NOT_IMPLEMENTED, action: actions.EDIT },
    {
      text: "Delete",
      scene: sceneList.NOT_IMPLEMENTED,
      action: actions.DELETE,
    },
    {
      text: "Re-Create",
      scene: sceneList.NOT_IMPLEMENTED,
      action: actions.RECREATE,
    },
    { text: "Cancel", scene: sceneList.MAIN, action: actions.CANCEL },
  ];

  return (
    <>
      <div className="header">
        <h1>Select World</h1>
        <div className="input-container">
          <SearchInput
            id="world-search"
            type="text"
            value={searchTerm}
            onInputChange={handleSearchInput}
          />
        </div>

        <hr />
      </div>
      <div className="world-select">
        {worldContext.worldList.map((world) => (
          <div
            style={selectedWorld === world ? { border: "2px solid black" } : {}}
            className="worldList-item"
            onClick={() => {
              if (selectedWorld !== world) {
                setSelectedWorld(world);
              }
            }}
            onDoubleClick={() =>
              playSelected(sceneList.PLAY)
            }
            key={`${world.name}`}
          >
            <img src="" alt="" /> {/* IMAGE FOR THE WORLD */}
            <h3>{world.name}</h3>
            <p>
              {world.name} ({world.date})
            </p>
            {world.gameMode === World.GameMode.HARDCORE ? (
              <p style={{ color: "red" }}>{world.gameMode} Mode!</p>
            ) : (
              <p>{world.gameMode} Mode</p>
            )}
            <p>, Version: {world.version}</p>
          </div>
        ))}
        <hr />
      </div>
      <div className="footer">
        <div>
          {largeButtons.map((item) => (
            <LargeButton
              text={item.text}
              onClick={() => item.action(item.scene)}
              key={item.text}
            />
          ))}
        </div>
        <div>
          {mediumButtons.map((item) => (
            <MediumButton
              text={item.text}
              onClick={item.action}
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

export default Singleplayer;
