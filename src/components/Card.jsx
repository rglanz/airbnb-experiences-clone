import React from 'react'
import card from '../assets/card.png'
import star from '../assets/star.png'

function Card() {
    return(
        <div className="card">
            <img src={card} alt="" className="card__img" />

            <div className="card__rating-container">
                <img src={star} alt="" className="card__rating-star" />
                <span>5.0</span>
                <span className="card__rating-location">(6) • USA</span>
            </div>
            <p className="card__description">Life lessons with Katie Zaferes</p>
            <p className="card__price"><strong>From $136</strong> / person</p>
        </div>
    )
}

export default Card
