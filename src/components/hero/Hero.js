import React from 'react'
import './Hero.css'
import {Button} from './../button/Button'
import Backvideo from './../../videos/video-1.mp4'
const Hero = () => {
    return (
        <div className="hero-container">
            <video autoPlay loop muted>
                <source src={Backvideo} type="video/mp4"/>
            </video>
            <h1>adventure awaits</h1>
            <p>what are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" >get started</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" >watch trailer <i className="far fa-play-circle"></i></Button>

            </div>
        </div>
    )
}

export default Hero
