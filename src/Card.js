import React from 'react'
import tag from "./images/map-marker-32px.png"

export default function Card(props) {

    return (
        <div className="card">
            <div className="card--image_container">
                <img 
                className="card--image"
                src={props.imageUrl}
                alt="tag-location"
                />
            </div>
            <div className="card--info">
                <div className="card--textinfo">
                    <div className="card--header">
                        <div className="card--tag-location">
                            <img src={tag} alt="location tag" className="tag" />
                            <h4 className="location">{props.location.toUpperCase()}</h4>
                            <h4 className="maps-link"><a href={props.googleMapsUrl}>View On Google Maps</a></h4>
                        </div>
                        <div>
                            <h3 className="card--title">{props.title}</h3>
                        </div>
                    </div>
                    <div className="card--text">
                        <h4 className="card--dates">{props.startDate} - {props.endDate}</h4>
                        <p className="card--description">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}