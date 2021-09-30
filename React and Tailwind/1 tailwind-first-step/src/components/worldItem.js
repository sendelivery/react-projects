import React from "react";

const WorldItem = ({ world }) => {
  return (
    <div className="world-item">
      <h3>{world.name}</h3>
      <p>
        {world.name} {world.lastPlayed}
      </p>
      <p>
        {world.mode} Version: {world.version}
      </p>
    </div>
  );
};

export default WorldItem;
