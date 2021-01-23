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

    function handleNavClick() {

        //if the menu is not expanded scroll to location
        if (!isExpanded && props.mobileNavPosition) {
            console.log(props.mobileNavPosition)
            document.body.scrollTo(
                {
                    top: props.mobileNavPosition.current.offsetTop,
                    left: 0,
                    behavior: 'smooth'
                });
        }
        setIsExpanded(!isExpanded)


    }





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
        default:
            break
    }



    if (!props.isMobile) {
        return (
            <div className="navDiv">
                <img src={img} alt="Carolina Closet Logo" className="navImg"></img>
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
                position: "relative"
            }}>
                <div className="mobileNav">
                    <img src={img} alt="Carolina Closet Logo" className="mobileImg"></img>
                    <h1 className="mobileHeader">Carolina Closet</h1>
                    <FontAwesomeIcon className="FA" icon={faBars} onClick={() => handleNavClick()} />

                    <i className="fas fa-bars"></i>
                </div >


                {

                    moibleMenuTransition.map(({ item, key, props }) =>
                        item && <animated.div key={key} className="mobileMenu" style={props}><div className="mobileMenu">
                            <div className="mobileItemContainer">
                                <h1 className="mobileItem" > <Link className="links" to="/">Home</Link></h1>

                            </div>
                            <div className="mobileItemContainer">
                                <h1 className="mobileItem" > <Link className="links" to="/AboutUs">About Us</Link></h1>

                            </div>
                            <div className="mobileItemContainer">
                                <h1 className="mobileItem" > <Link className="links" to="/MeetTheTeam">Meet The Team</Link></h1>

                            </div>
                            <div className="mobileItemContainer">
                                <h1 className="mobileItem" ><Link className="links" to="/FAQ">FAQ</Link></h1>

                            </div>

                        </div>
                        </animated.div>
                    )
                }
            </ div >
        )

    }




} export default AdamsNavbar