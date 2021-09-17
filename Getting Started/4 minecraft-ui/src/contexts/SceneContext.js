import React, { useState, createContext } from "react";

export const SceneContext = createContext();

export const SceneContextProvider = ({ children }) => {
  const sceneList = {
    NOT_IMPLEMENTED: "none",
    MAIN: "main",
    SINGLEPLAYER: "single",
    CREATE: "create",
    PLAY: "play",
  };

  const [currScene, setScene] = useState(sceneList.MAIN);

  const handleSceneSwitch = (scene, world) => {
    if (scene === sceneList.PLAY) {
      setScene({
        scene: scene,
        selectedWorld: world,
      });
    } else {
      setScene(scene);
    }
  };

  return (
    <SceneContext.Provider value={{ currScene, handleSceneSwitch, sceneList }}>
      {children}
    </SceneContext.Provider>
  );
};

export const SceneProvider = SceneContext.Provider;
