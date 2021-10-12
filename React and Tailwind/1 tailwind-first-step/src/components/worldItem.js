import React from "react";
import world_selection from "../assets/world_selection.png";
import world_selection_hover from "../assets/world_selection_hover.png";

const WorldItem = ({ world, onClick, className }) => {
  const gamemode = gamemodeText(world.mode);

  return (
    <div className="world-item-container">
      <div
        className={`world-item ${className} mx-auto space-x-2 sm:flex`}
        onClick={onClick}
      >
        <div style={{ position: "relative" }}>
          {/* For some reason tailwind's relative utility doesn't have the desired effect but this does... */}
          <img
            className="block flex-shrink-0 h-24 lg:h-26 mr-0"
            src={world.thumbnail.url}
            alt={world.thumbnail.filename}
          />
          <div className="absolute img-transition">
            <div className="fog">
              <img
                src={world_selection}
                className="w-full"
                onMouseOver={(e) =>
                  (e.currentTarget.src = world_selection_hover)
                }
                onMouseOut={(e) => 
                  (e.currentTarget.src = world_selection)
                }
              />
            </div>
          </div>
        </div>

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
            )}
            {", "}
            Version: {world.version}
          </p>
        </div>
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
