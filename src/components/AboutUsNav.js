import React from 'react'
import { isMobile } from 'react-device-detect';


function AboutUsNav() {

    if (isMobile) {
        return null;
    } else {
        return (
            <div className="aboutUsNavCont">
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

            </div>);



    }




} export default AboutUsNav