import React, { useContext } from "react";
import "./App.css";
import { SceneContext, SceneContextProvider } from "./contexts/SceneContext";
import Start from "./scenes/Start";
import Singleplayer from "./scenes/Singleplayer";
import Create from "./scenes/Create";
import NotImplemented from "./scenes/NotImplemented";
import { WorldContextProvider } from "./contexts/WorldContext";

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
  console.log(c);

  return (
    <div>
      {c.currScene === c.sceneList.MAIN && <Start />}
      {c.currScene === c.sceneList.SINGLEPLAYER && <Singleplayer />}
      {c.currScene === c.sceneList.CREATE && <Create />}
      {c.currScene === c.sceneList.NOT_IMPLEMENTED && <NotImplemented />}
    </div>
  );
};

export default App;

/*
  Notes:
  Use a reducer for creating a world?
  - Actions dependant on the options chosen?
*/
