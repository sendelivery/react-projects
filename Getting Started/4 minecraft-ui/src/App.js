import React, { useContext } from "react";
import "./App.css";
import { SceneContext, SceneContextProvider } from "./contexts/SceneContext";
import Start from "./scenes/Start";
import Singleplayer from "./scenes/Singleplayer";
import Create from "./scenes/Create";
import NotImplemented from "./scenes/NotImplemented";
import Play from "./scenes/Play";
import { WorldContextProvider } from "./contexts/WorldListContext";

function App() {
  return (
    <div className="App">
      <SceneContextProvider>
        <WorldContextProvider>
          <CurrentScene />
        </WorldContextProvider>
      </SceneContextProvider>
    </div>
  );
}

const CurrentScene = () => {
  const c = useContext(SceneContext);
  console.log("Context",c);

  const renderScene = () => {
    switch (c.currScene) {
      case c.sceneList.NOT_IMPLEMENTED:
        return <NotImplemented />;
      case c.sceneList.MAIN:
        return <Start />;
      case c.sceneList.SINGLEPLAYER:
        return <Singleplayer />;
      case c.sceneList.CREATE:
        return <Create />;
      default:
        switch (c.currScene.scene) {
          case c.sceneList.PLAY:
            return <Play world={c.currScene.selectedWorld} />
          default:
            return <p>default case</p>;
        }
    }
  }

  return (
    renderScene()
  );
};

export default App;

/*
  Notes:
  Use a reducer for creating a world?
  - Actions dependant on the options chosen?
*/
