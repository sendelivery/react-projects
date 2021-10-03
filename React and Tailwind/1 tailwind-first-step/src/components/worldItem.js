import React from "react";

const WorldItem = ({ world }) => {
  const gamemode = gamemodeText(world.mode);

  return (
    <div className="world-item mx-auto bg-gray-500 space-x-2 sm:flex">
      <img
        className="block flex-shrink-0 h-24 lg:h-28 mr-0"
        src={world.thumbnail.url}
        alt={world.thumbnail.filename}
      />
      <div>
        <h3>{world.name}</h3>
        <p>
          {world.name} {world.lastPlayed}
        </p>
        <p>
          {world.mode === 2 ? (
            <span style={{ color: "red" }}>{gamemode}</span>
          ) : (
            <span>{gamemode}</span>
          )}{", "}
          Version: {world.version}
        </p>
      </div>
    </div>
  );

  function gamemodeText(mode) {
    switch (mode) {
      case 0:
        return "Survival Mode";
      case 1:
        return "Creative Mode";
      case 2:
        return "Hardcore Mode!";
      default:
        return "Unsupported Gamemode";
    }
  }
};

export default WorldItem;
