import React from 'react'
import './Hero.css'
import {Button} from './../button/Button'
const Hero = () => {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>adventure awaits</h1>
            <p>what are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" >get started</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" >watch trailer <i class="far fa-play-circle"></i></Button>

            </div>
        </div>
    )
}

export default Hero
