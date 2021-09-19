import React, { useContext } from "react";
import { LargeButton } from "../components/Button";
import { SceneContext } from "../contexts/SceneContext";

const Play = ({ world }) => {
  const c = useContext(SceneContext);

  return (
    <>
      <h1>Let's just imagine that {world.name} is loading... ;)</h1>
      <div style={{ margin: "100px" }}>
        <LargeButton
          onClick={() => c.handleSceneSwitch(c.sceneList.SINGLEPLAYER)}
          text="Back"
          key="Back"
        />
      </div>
    </>
  );
};

export default Play;
