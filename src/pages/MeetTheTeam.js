import React from "react";
import { Container, Header, Message, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import CardCarousel from "../components/CardCarousel";

function MeetTheTeam() {


    return (
        <Container style={{ margin: 20 }}>
            <Segment attached="top">
                <Header as="h2" content="Meet the Team"/>
                    <p>
                        This page shows the team member of Caroina Closet
                    </p>
            </Segment>
            <Segment>
                <CardCarousel/>
            </Segment>
        </Container>
    )


} export default MeetTheTeam