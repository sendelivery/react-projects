import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import WorldItem from "./components/worldItem";
import thumbnail from "./assets/images/isles.png";
import "./index.css";

const initialWorldList = [
  {
    thumbnail: {
      filename: "eorzea thumbnail",
      url: thumbnail,
    },
    name: "Eorzea",
    lastPlayed: "(2/24/20 21:05)",
    mode: 1,
    cheats: true,
    version: "1.14.4",
  },
  {
    thumbnail: {
      filename: "thanadiel thumbnail",
      url: thumbnail,
    },
    name: "Thanadiel",
    lastPlayed: "(3/14/20 11:32)",
    mode: 0,
    cheats: false,
    version: "1.14.4",
  },
  {
    thumbnail: {
      filename: "senchu thumbnail",
      url: thumbnail,
    },
    name: "Senchu",
    lastPlayed: "(2/28/20 3:04)",
    mode: 2,
    cheats: false,
    version: "1.14.4",
  },
];

const App = () => {
  const [worldList] = useState(initialWorldList);
  const [selectedWorld, setSelectedWorld] = useState(null);

  return (
    <div className="h-screen">
      <Header />
      <Body
        worldList={worldList}
        selectedWorld={selectedWorld}
        setSelectedWorld={setSelectedWorld}
      />
      <Footer selectedWorld={selectedWorld} />
    </div>
  );
};

const Body = ({ worldList, selectedWorld, setSelectedWorld }) => (
  <div className="worldlist-body overflow-y-scroll">
    <div className="worldlist-container">
      {worldList.map((world, index) => (
        <WorldItem
          key={`world_${index}`}
          world={world}
          onClick={() =>
            world === selectedWorld
              ? setSelectedWorld(null)
              : setSelectedWorld(world)
          }
          className={selectedWorld === world && "selected"}
        />
      ))}
    </div>
  </div>
);

export default App;

// header height = 17.8 vh =~ 192 px - 24
// body height = 58.5 vh =~ 632 px - 80
// footer height = 23.7 vh =~ 256 px - 32
