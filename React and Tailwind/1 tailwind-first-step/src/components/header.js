import React from 'react'

const Header = () => {
    return (
      <div className="grid grid-cols-1 bg-gray-200 place-content-center header-height">
        <h2 className="mx-auto pb-2">Select World</h2>
        <input className="world-select-text" type="text"></input>
      </div>
    );
}

export default Header
