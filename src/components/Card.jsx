import React from 'react'
import star from '../assets/star.png'

function Card(props) {
    const imgPath = '../assets/' + props.img

    return(
        <div className="card">
            <img src={imgPath} alt="" className="card__img" />

            <div className="card__rating-container">
                <img src={star} alt="" className="card__rating-star" />
                <span>{props.rating}</span>
                <span className="card__rating-location">(props.reviewCount) • {props.location}</span>
            </div>
            <p className="card__description">{props.title}</p>
            <p className="card__price"><strong>From {props.price}</strong> / person</p>
        </div>
    )
}

export default Card
