import React from "react";

const WorldItem = ({ world, onClick, className }) => {
  const gamemode = gamemodeText(world.mode);

  return (
    <div className={`world-item ${className} mx-auto space-x-2 sm:flex`} onClick={onClick}>
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
            <span style={{ color: "rgb(189, 17, 3)" }}>{gamemode}</span>
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
