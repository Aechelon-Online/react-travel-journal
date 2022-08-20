import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="earth-logo" src={require(`./images/globe-logo-white.png`)} />
            <h3 className="navbar--text">my travel journal</h3>
        </div>
    )
}