import React from 'react'

const Header = () => {
    return (
      <div className="grid grid-cols-1 bg-gray-200 place-content-center header-height">
        <h2 className="mx-auto">Select World</h2>
        <input className="world-select mx-auto" type="text"></input>
      </div>
    );
}

export default Header
