import React from "react"
import './App.css';
import Start from "./scenes/Start";

function App() {
  const [scene, setScene] = React.useState("Start")

  const goToScene = (scene) => {
    setScene(scene);
  };

  return (
    <div className="App">
      { scene === "Start" && <Start onClick={ goToScene }/> }
    </div>
  );
}

export default App;

/*
  Notes:
  Use a reducer for creating a world?
  - Actions dependant on the options chosen?
*/