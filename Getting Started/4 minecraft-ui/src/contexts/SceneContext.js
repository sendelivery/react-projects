import React, { createContext } from "react";

export const SceneContext = createContext();

export const SceneContextProvider = ({ children }) => {
  const sceneList = {
    NOT_IMPLEMENTED: "none",
    MAIN: "main",
    SINGLEPLAYER: "single",
    CREATE: "create",
  };
  const [currScene, setScene] = React.useState(sceneList.MAIN);

  return (
    <SceneContext.Provider value={{ currScene, setScene, sceneList }}>
      {children}
    </SceneContext.Provider>
  );
};

export const SceneProvider = SceneContext.Provider;
