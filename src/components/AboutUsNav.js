import React from 'react'
import { isMobile } from 'react-device-detect';
import { Container, Header, Rail } from 'semantic-ui-react'
import "semantic-ui-less/semantic.less";




function AboutUsNav() {


    return (
        <div className="aboutUsNav">
            <div >
                <Header size="huge" className="aboutUsNavItem">
                    Home
                </Header>
                <Header size="huge" className="aboutUsNavItem">
                    Donations
                </Header>
                <Header size="huge" className="aboutUsNavItem">
                    Vision & Mission
                </Header>
                <Header size="huge" className="aboutUsNavItem">
                    Partners
                </Header>
                <Header size="huge" className="aboutUsNavItem">
                    Rentals
                </Header>
            </div>

        </div>
    );








} export default AboutUsNav