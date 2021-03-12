import React from 'react'
import CardItem from './../cards/CardItem'
import './Cards.css'
const Cards = () => {
    return (
        <div className="cards">
            <h2>check out these EPIC desinations</h2>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="explore the hidden waterfall deep inside the amazon jungle"
                        label="adventure"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-2.jpg"
                        text="travel through the islands of Bali in a private cruise "
                        label="luxury"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards-items two">
                        <CardItem
                        src="images/img-3.jpg"
                        text="set sail in the atlantic ocean visiting uncharted waters"
                        label="mystery"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-4.jpg"
                        text="experience football on top of himilayan mountains "
                        label="adventure"
                        path="/services"
                        />
                        <CardItem
                        src="images/img-8.jpg"
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
