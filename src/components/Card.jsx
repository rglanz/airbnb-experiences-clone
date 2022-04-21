import React from 'react'

function Card(props) {
    return(
        <div className="card">
            <img src={require(`assets/${props.img}`)} alt="" className="card__img" />

            <div className="card__rating-container">
                <img src={require('assets/star.png')} alt="" className="card__rating-star" />
                <span>{props.rating}</span>
                <span className="card__rating-location">{props.reviewCount} • {props.country}</span>
            </div>
            <p className="card__description">{props.title}</p>
            <p className="card__price"><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

export default Card
