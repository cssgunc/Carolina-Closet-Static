import React from 'react'
import { isMobile } from 'react-device-detect';
import { Container, Header, Rail } from 'semantic-ui-react'
import "semantic-ui-less/semantic.less";




function AboutUsNav() {


    return (
        <Rail size='massive' position='left' >
            <div className="aboutUsNav">
                <h2 className="aboutUsNavItem">
                    Home
                </h2>
                <h2 className="aboutUsNavItem">
                    Donations
                </h2>
                <h2 className="aboutUsNavItem">
                    Vision & Mission
                </h2>
                <h2 className="aboutUsNavItem">
                    Partners
                </h2>
                <h2 className="aboutUsNavItem">
                    Rentals
                </h2>

            </div>




        </Rail >);








} export default AboutUsNav