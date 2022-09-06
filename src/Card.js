import React from 'react'


export default function Card(props) {

   return (
    <div className="card">
        <div className="card--image_container">
            <img className="card--image" src={props.imageUrl} alt="card-img" />
        </div>
        <div className="card--textinfo">
            <div className="card--tag-location">
                <img className="tag" src={require(`./images/map-marker-32px.png`)} alt="tag" />
                <div className="location">{props.location.toUpperCase()}</div>
                <div className="maps-link"><a href={props.googleMapsUrl}>View on Google Maps</a></div>
            </div>
            <div className="card--title">{props.title}
            </div>
            <div className="card--dates">{props.startDate} - {props.endDate}</div>
            <div className="card--description">{props.description}</div>
        </div>
    </div>
   )


}