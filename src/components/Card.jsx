import React from 'react'

function Card(props) {
    let badgeRender
    let badgeText
    if (props.item.openSpots === 0) {
        badgeRender = true
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgeRender = true
        badgeText = 'ONLINE'
    }

    return(
        <div className="card">
            {badgeRender && <div className="sold-badge">{badgeText}</div>}
            <img src={require(`assets/${props.item.img}`)} alt="" className="card__img" />

            <div className="card__rating-container">
                <img src={require('assets/star.png')} alt="" className="card__rating-star" />
                <span>{props.item.rating}</span>
                <span className="card__rating-location">{props.item.reviewCount} • {props.item.country}</span>
            </div>
            <p className="card__description">{props.item.title}</p>
            <p className="card__price"><strong>From ${props.item.price}</strong> / person</p>
        </div>
    )
}

export default Card
