import React from 'react'

const Header = () => {
    return (
      <div className="header medium-dim-bg grid grid-cols-1 place-content-center">
        <h2 className="mx-auto pb-2">Select World</h2>
        <input className="world-select-input" type="text"></input>
      </div>
    );
}

export default Header
