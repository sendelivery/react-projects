import React, { createContext } from "react";

export const SceneContext = createContext();

export const SceneContextProvider = ({ children }) => {
  const [currScene, setScene] = React.useState("Start");

  return (
    <SceneContext.Provider value={{ currScene, setScene }}>
      {children}
    </SceneContext.Provider>
  );
};

export const SceneProvider = SceneContext.Provider;
