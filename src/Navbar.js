import React from 'react'
import globeLogo from './images/globe-logo-white.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="earth-logo" src={globeLogo} alt="globe logo" />
            <h3 className="navbar--text">my travel journal</h3>
        </div>
    )
}