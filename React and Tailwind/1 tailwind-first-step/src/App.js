import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "./index.css";
import WorldItem from "./components/worldItem";

const initialWorldList = [
  {
    thumbnail: {
      filename: "",
      url: "",
    },
    name: "Eorzea",
    lastPlayed: "(2/24/20 9:05PM)",
    mode: 1,
    cheats: true,
    version: "1.14.4",
  },
  {
    thumbnail: {
      filename: "",
      url: "",
    },
    name: "Thanadiel",
    lastPlayed: "(3/14/20 11:32AM)",
    mode: 0,
    cheats: false,
    version: "1.14.4",
  },
  {
    thumbnail: {
      filename: "",
      url: "",
    },
    name: "Senchu",
    lastPlayed: "(2/28/20 3:04AM)",
    mode: 2,
    cheats: false,
    version: "1.14.4",
  },
];

const App = () => {
  const [worldList, setWorldList] = React.useState(initialWorldList);
  console.log("initial wl: ", worldList);
  return (
    <div className="h-screen">
      <Header />
      <Body worldList={worldList} />
      <Footer />
    </div>
  );
};

const Body = ({ worldList }) => {
  console.log(worldList);
  return (
    <div className="body-height bg-gray-400">
      <div className="worldlist-container">
        {worldList.map((world) => (
          <WorldItem world={world} />
        ))}
      </div>
    </div>
  );
};

export default App;

// header height = 17.8 vh =~ 192 px - 24
// body height = 58.5 vh =~ 632 px - 80
// footer height = 23.7 vh =~ 256 px - 32
