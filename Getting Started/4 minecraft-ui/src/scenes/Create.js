import React, { useState, useRef, useContext } from "react";
import "../App.css";
import { World } from "../classes/World";
import { LargeButton, TextInputWithLabel } from "../components/Button";
import { SceneContext } from "../contexts/SceneContext";
import { WorldContext } from "../contexts/WorldListContext";

const Create = () => {
  const scene_Context = useContext(SceneContext);
  const world_Context = useContext(WorldContext);
  
  const [name, setName] = useState("");
  const [gMode, setGMode] = useState(World.GameMode.SURVIVAL);

  let difficultyIndex = useRef(2);
  const [difficulty, setDifficulty] = useState(
    World.Difficulty[difficultyIndex.current]
  );

  const [cheats, setCheats] = useState(0);

  const handleWorldNaming = (event) => {
    setName(event.target.value);
  };

  const handleGameMode = () => {
    setGMode(World.CycleGameMode(gMode));
  };

  const handleDifficulty = () => {
    setDifficulty(World.CycleDifficulty(difficultyIndex.current++));
  };

  const toggleCheats = () => {
    let x = 1 - cheats;
    setCheats(x);
  };

  const createWorld = () => {
    console.log("world list on create: ",world_Context.worldList);

    const date = new Date();
    const time = date.toLocaleDateString("en-GB", { hour: "2-digit", minute: "2-digit" });

    const newWorld = new World(name, time, gMode, difficulty, "1.16.2");

    world_Context.addWorld(newWorld);
  }

  const diffFlavourText = () => {
    switch (gMode) {
      default:
        return "Unlimited resources, free flying and destroy blocks instantly";
      case World.GameMode.SURVIVAL:
        return "Search for resources, craft, gain levels, health and hunger";
      case World.GameMode.HARDCORE:
        return "Same as Survival Mode, locked at hardest difficulty, and one life only";
    }
  };

  return (
    <>
      <h1>Create New World</h1>
      <div className="header-container">
        <div className="input-container">
          <TextInputWithLabel
            id="world-name"
            isFocused
            onInputChange={handleWorldNaming}
          >
            World Name
          </TextInputWithLabel>
          <p>Will be saved in: {name}</p>
        </div>
      </div>
      <div className="body-container">
        <div className="button-row">
          <LargeButton
            text={`Game Mode: ${gMode}`}
            onClick={handleGameMode}
            key="gameModeButton"
          />
          {gMode === World.GameMode.HARDCORE ? (
            <LargeButton
              text="Difficulty: Hard"
              onClick={handleDifficulty}
              disabled={true}
              key="difficultyButton"
            />
          ) : (
            <LargeButton
              text={`Difficulty: ${difficulty}`}
              onClick={handleDifficulty}
              key="difficultyButton"
            />
          )}
          <p>{diffFlavourText()}</p>
        </div>
        <div className="button-row">
          <LargeButton
            text={cheats === 0 ? "Allow Cheats: OFF" : "Allow Cheats: ON"}
            onClick={toggleCheats}
            key="cheatsToggle"
          />
          <LargeButton
            text="Data Packs"
            onClick={() => scene_Context.handleSceneSwitch(scene_Context.sceneList.NOT_IMPLEMENTED)}
            key="dataPacks"
          />
          <p className="flavour-text">Commands like /gamemode, /experience</p>
        </div>
        <div className="button-row">
          <LargeButton
            text="Game Rules"
            onClick={() => scene_Context.handleSceneSwitch(scene_Context.sceneList.NOT_IMPLEMENTED)}
            key="gameRules"
          />
          <LargeButton
            text="More World Options..."
            onClick={() => scene_Context.handleSceneSwitch(scene_Context.sceneList.NOT_IMPLEMENTED)}
            key="worldOptions"
          />
        </div>
        <div className="footer-container">
          <LargeButton
            text="Create New World"
            onClick={createWorld}
            key="gameRules"
          />
          <LargeButton
            text="Cancel"
            onClick={() => scene_Context.handleSceneSwitch(scene_Context.sceneList.SINGLEPLAYER)}
            key="worldOptions"
          />
        </div>
      </div>
    </>
  );
};

export default Create;
