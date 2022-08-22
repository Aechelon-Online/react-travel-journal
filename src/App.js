import React from 'react'
import data from './data'
import Navbar from './Navbar'
import Card from './Card'


export default function App(){

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="full-card">
            <div className="nav-border">
                <Navbar />
            </div>
            {cards}
        </div>
    )
}