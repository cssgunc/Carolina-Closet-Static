import React, { useState } from "react"
import "../Styles/adamsnavbar.css";
import img from "../../static/images/Suitlogo.png"
import { useTransition, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"
function AdamsNavbar(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const moibleMenuTransition = useTransition(isExpanded, null, {
        from: { position: 'absolute', transform: 'translateX(100%)' },
        enter: { transform: 'translateX(0%)' },
        leave: { transform: 'translateX(100%)' },
    })

    let divs = [null, null, null, null];

    //pass in a string of page equalling the page name to have a triangle appear under that header
    switch (props.page) {
        case "home":
            divs[0] = (<div className="triangle"> </div>);
            break;
        case "aboutUs":
            divs[1] = (<div className="triangle"> </div>);
            break;
        case "meetTheTeam":
            divs[2] = (<div className="triangle"> </div>);
            break;
        case "FAQ":
            divs[3] = (<div className="triangle"> </div>);
            break;
    }



    if (!props.isMobile) {
        return (
            <div className="navDiv">
                <img src={img} className="navImg"></img>
                <nav className="nav">
                    <div className="navItemContainer">
                        <h1 id="home" className="navItem" ><Link className="links" to="/">Home</Link></h1>
                        {divs[0]}
                    </div>
                    <div className="navItemContainer">
                        <h1 className="navItem"><Link className="links" to="/AboutUs">About Us</Link> </h1>
                        {divs[1]}
                    </div>
                    <div className="navItemContainer">
                        <h1 className="navItem"> <Link className="links" to="/MeetTheTeam">Meet The Team</Link></h1>
                        {divs[2]}
                    </div>
                    <div className="navItemContainer">
                        <h1 className="navItem"> <Link className="links" to="/FAQ">FAQ</Link></h1>
                        {divs[3]}
                    </div>

                </nav>
            </div>
        )

    } else {
        return (
            <div style={{
                position: "relative", overflowY: 'hidden'
            }}>
                <div className="mobileNav">
                    <img src={img} className="mobileImg"></img>
                    <h1 className="mobileHeader">Carolina Closet</h1>
                    <FontAwesomeIcon className="FA" icon={faBars} onClick={() => setIsExpanded(!isExpanded)} />

                    <i className="fas fa-bars"></i>
                </div >
                {

                    moibleMenuTransition.map(({ item, key, props }) =>
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
            </ div >
        )

    }




} export default AdamsNavbar