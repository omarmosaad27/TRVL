import React from 'react'
import {Link} from 'react-router-dom'
const CardItem = (props) => {
    return (
        <div>
            <li className="cards-item">
                <Link className="cards-item-link" to={props.path}>
                    <figure className="cards-item-wrap" data-gategory={props.label}>
                        <img src={props.src} alt="travel" className="cards-item-img"/>
                    </figure>
                    <div className="cards-item-info">
                        <h5 className="cards-item-text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CardItem
