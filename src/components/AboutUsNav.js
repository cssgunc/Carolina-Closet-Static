import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect';
import { Container, Header, Rail } from 'semantic-ui-react'
import "semantic-ui-less/semantic.less";
import { doc } from 'prettier';
import AboutUsIndicator from "./AboutUsIndicator";



function AboutUsNav(props) {
    //scroll to element function
    const scrollToRef = (ref) => {
        document.body.scrollTo(
            {
                top: ref.current.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
    }
    const [scrollHeight, setScrollHeight] = useState(0);
    useEffect(() => {
        document.body.addEventListener('scroll', () => handleScroll());
        return (
            document.body.removeEventListener('scroll', () => handleScroll())
        )
    })

    let handleScroll = (() => {
        setScrollHeight(document.body.scrollTop);
    });


    console.log(scrollHeight)
    return (
        <div className="aboutUsNav">
            <div >
                <div >
                    <AboutUsIndicator scroll={scrollHeight} height={props.arrRefs[0]} />
                    <Header size="huge" className="aboutUsNavItem" onClick={() => scrollToRef(props.arrRefs[0])}>
                        About
                    </Header>
                </div>
                <div>
                    <AboutUsIndicator scroll={scrollHeight} height={props.arrRefs[1]} />
                    <Header size="huge" className="aboutUsNavItem" onClick={() => scrollToRef(props.arrRefs[1])}>
                        Donations
                    </Header>
                </div>
                <div>
                    <AboutUsIndicator scroll={scrollHeight} height={props.arrRefs[2]} />
                    <Header size="huge" className="aboutUsNavItem" onClick={() => scrollToRef(props.arrRefs[2])}>
                        Vision & Mission
                    </Header>
                </div>
                <div>
                    <AboutUsIndicator scroll={scrollHeight} height={props.arrRefs[3]} />
                    <Header size="huge" className="aboutUsNavItem" onClick={() => scrollToRef(props.arrRefs[3])}>
                        Partners
                </Header>
                </div>
                <div>
                    <AboutUsIndicator scroll={scrollHeight} height={props.arrRefs[4]} />
                    <Header size="huge" className="aboutUsNavItem" onClick={() => scrollToRef(props.arrRefs[4])}>
                        Rentals
                </Header>
                </div>


            </div>

        </div >
    );








} export default AboutUsNav