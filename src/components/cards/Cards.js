import React from 'react'
import CardItem from './../cards/CardItem'
import './Cards.css'
import Img9 from './../../images/img-9.jpg'
import Img2 from './../../images/img-2.jpg'
import Img3 from './../../images/img-3.jpg'
import Img4 from './../../images/img-4.jpg'
import Img8 from './../../images/img-8.jpg'
const Cards = () => {
    return (
        <div className="cards">
            <h2>check out these EPIC desinations</h2>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem
                        src={Img9}
                        text="explore the hidden waterfall deep inside the amazon jungle"
                        label="adventure"
                        path="/services"
                        />
                        <CardItem
                        src={Img2}
                        text="travel through the islands of Bali in a private cruise "
                        label="luxury"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards-items two">
                        <CardItem
                        src={Img3}
                        text="set sail in the atlantic ocean visiting uncharted waters"
                        label="mystery"
                        path="/services"
                        />
                        <CardItem
                        src={Img4}
                        text="experience football on top of himilayan mountains "
                        label="adventure"
                        path="/services"
                        />
                        <CardItem
                        src={Img8}
                        text="ride through the sahara desert on a guided ride camel tour "
                        label="adrenaline"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
