import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './../button/Button'
import './Navbar.css'
const Navbar = () => {
    const [click,setClick] = useState(false)
    const [button,setButton] =useState(true)
    const handleClick = () => {
        setClick(!click)
    }
    const  closeMobileMenu = ()=>{
        setClick(false)
    }
    const showButton = () => {
        if(window.innerWidth < 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton()
    },[])
    window.addEventListener("resize" , showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL
                        <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click?"far fa-times-circle fa-lg":"fas fa-bars fa-lg"}></i>
                    </div>
                    <ul className={click ? "nav-menu active":"nav-menu"}>
                        <li className="nav-items">
                            <Link className="nav-links" to="/" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-items">
                            <Link className="nav-links" to="/Services" onClick={closeMobileMenu}>Services</Link>
                        </li>
                        
                        {button ? <Button buttonStyle="btn--outline" >Sign Up</Button> : <Button buttonStyle="btn--outline" buttonSize="btn--large" >Sign Up</Button>}

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
