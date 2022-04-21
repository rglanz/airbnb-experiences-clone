import React from 'react'

function Card(props) {
    let badgeRender
    let badgeText
    if (props.openSpots === 0) {
        badgeRender = true
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeRender = true
        badgeText = 'ONLINE'
    }

    return(
        <div className="card">
            {badgeRender && <div className="sold-badge">{badgeText}</div>}
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
