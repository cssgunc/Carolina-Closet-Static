import React, { useState } from "react"
import "../Styles/adamsnavbar.css";
import img from "../../static/images/carolinaCloset.png"
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function AdamsNavbar(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const moileMenuTransition = useTransition(isExpanded, null, {
        from: { position: 'absolute', transform: 'translateX(100%)' },
        enter: { transform: 'translateX(0%)' },
        leave: { transform: 'translateX(100%)' },
    })


    if (!props.isMobile) {
        return (
            <div className="navDiv">
                <img src={img} className="navImg"></img>
                <nav className="nav">
                    <div className="navItemContainer">
                        <h1 id="home" className="navItem"> Home</h1>
                    </div>
                    <div className="navItemContainer">
                        <h1 className="navItem"> About Us</h1>
                    </div>
                    <div className="navItemContainer">
                        <h1 className="navItem"> Meet The Team</h1>
                    </div>
                    <div className="navItemContainer">
                        <h1 className="navItem"> Rentals</h1>
                    </div>

                </nav>
            </div>
        )

    } else {
        return (
            <div className="mobileNav">
                <img src={img} className="mobileImg"></img>
                <h1 className="mobileHeader">Carolina Closet</h1>
                <FontAwesomeIcon className="FA" icon={faBars} onClick={() => setIsExpanded(!isExpanded)} />
                {

                    moileMenuTransition.map(({ item, key, props }) =>
                        item && <animated.div key={key} className="mobileMenu" style={props}><div className="mobileMenu">


                            <div className="mobileItemContainer">
                                <h1 className="mobileItem" > Home</h1>

                            </div>
                            <div className="mobileItemContainer">
                                <h1 className="mobileItem" > About Us</h1>

                            </div>
                            <div className="mobileItemContainer">
                                <h1 className="mobileItem" > Meet The Team</h1>

                            </div>
                            <div className="mobileItemContainer">
                                <h1 className="mobileItem" > Rentals</h1>

                            </div>

                        </div>





                        </animated.div>
                    )
                }
                <i className="fas fa-bars"></i>
            </div >

        )

    }




} export default AdamsNavbar