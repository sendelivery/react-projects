import React, { useContext } from "react";
import "./App.css";
import { SceneContext, SceneContextProvider } from "./contexts/SceneContext";
import Start from "./scenes/Start";
import Singleplayer from "./scenes/Singleplayer"

function App() {
  return (
    <div className="App">
      <SceneContextProvider>
        <CurrentScene />
      </SceneContextProvider>
    </div>
  );
}

const CurrentScene = () => {
  const context = useContext(SceneContext);

  console.log("current scene is ",context.currScene)

  return (
    <div>
      {context.currScene === "Start" && <Start />}
      {context.currScene === "Singleplayer" && <Singleplayer />}
    </div>
  );
};

export default App;

/*
  Notes:
  Use a reducer for creating a world?
  - Actions dependant on the options chosen?
*/
