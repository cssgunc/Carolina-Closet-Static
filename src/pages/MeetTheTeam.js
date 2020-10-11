import React from "react";
import { Container, Header, Message, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import CardCarousel from "../components/CardCarousel";

function MeetTheTeam() {


    return (
        <Container>
            <Header as="h2" content="Meet the Team"/>
            <CardCarousel/>
        </Container>
    )


} export default MeetTheTeam