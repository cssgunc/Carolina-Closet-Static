import React from "react";
import { Container, Header, Message, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import CardCarousel from "../components/CardCarousel";
import AdamsNavbar from "../components/AdamsNavbar"
import { isMobile } from 'react-device-detect';

function MeetTheTeam() {

    //the return method renders the html inside whenever this component is visible. ie you navigate to this page
    //this  is all done by react/gatsby by default
    return (
        <div>

            {/* Adams navabar is simply a component file meaning it is responsible for rendering adams navbar and 
                is responsible for any logic needed in the navbar.
            */}
            <AdamsNavbar />
            <Container>
                <Header as="h2" content="Meet the Team"/>
                <CardCarousel/>
            </Container>


        </div>

    )


} export default MeetTheTeam
//export default allows other files to import this component