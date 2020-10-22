import React from "react";
import { Container, Header, Message, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import CardCarousel from "../components/CardCarousel";
import AdamsNavbar from "../components/AdamsNavbar"
import { isMobile } from 'react-device-detect';

function MeetTheTeam() {


    return (
        <div style={{ width: "100%" }}>
            <AdamsNavbar isMobile={isMobile}></AdamsNavbar>
            <Container>
                <Header as="h2" content="Meet the Team"/>
                <CardCarousel/>
            </Container>
        </div>
    )


} export default MeetTheTeam