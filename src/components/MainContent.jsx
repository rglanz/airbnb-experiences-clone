import React from 'react'
import imgGroup from '../assets/img_group.png'

function MainContent() {
    return(
        <div className="main">
            <img src={imgGroup} alt="" className="main__img" />
            <h1 className="main__title">Online Experiences</h1>
            <p className="main__text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default MainContent
