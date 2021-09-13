import React, { useState, useRef } from "react";
import "../App.css";
import { World } from "../classes/World";
import { LargeButton, TextInputWithLabel } from "../components/Button";

const Create = () => {
  const [name, setName] = useState("");
  const [gMode, setGMode] = useState(World.GameMode.SURVIVAL);
  let difficultyIndex = useRef(2);
  const [difficulty, setDifficulty] = useState(
    World.Difficulty[difficultyIndex.current]
  );

  const handleWorldNaming = (event) => {
    setName(event.target.value);
  };

  const handleGameMode = () => {
    setGMode(World.CycleGameMode(gMode));
  };

  const handleDifficulty = () => {
    setDifficulty(World.CycleDifficulty(difficultyIndex.current++));
  };

  const diffFlavourText = () => {
    switch (gMode) {
      case World.GameMode.CREATIVE:
        return "Unlimited resources, free flying and destroy blocks instantly";
      case World.GameMode.SURVIVAL:
        return "Search for resources, craft, gain levels, health and hunger";
      case World.GameMode.HARDCORE:
        return "Same as Survival Mode, locked at hardest difficulty, and one life only";
    }
  }

  return (
    <>
      <h1>Create New World</h1>
      <div className="container">
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
      <div className="button-row">
        <LargeButton
          text={`Game Mode: ${gMode}`}
          onClick={handleGameMode}
          key="unique"
        />
        {gMode === World.GameMode.HARDCORE ? (
          <LargeButton
            text="Difficulty: Hard"
            onClick={handleDifficulty}
            disabled={true}
            key="youNique"
          />
        ) : (
          <LargeButton
            text={`Difficulty: ${difficulty}`}
            onClick={handleDifficulty}
            key="youNique"
          />
        )}
        <p>
        { diffFlavourText() }
        </p>
      </div>
      <div className="button-row">

      </div>
    </>
  );
};

export default Create;
