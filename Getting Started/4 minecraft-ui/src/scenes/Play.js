import React from 'react'

const Play = ({ world }) => {
    console.log("play: ",world);
    return (
        <h1>Let's just imagine that {world.name} is loading... ;)</h1>
    )
}

export default Play;