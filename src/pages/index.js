import React, { useState } from "react"
import AdamsNavbar from "../components/AdamsNavbar"
import "../Styles/homepage.css";
import { isMobile } from 'react-device-detect';
import "semantic-ui-less/semantic.less";
import { Container, Header, Segment, Grid, GridColumn, List, Ref } from 'semantic-ui-react';
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import LandingPage from "./Landingpage"

import MapAndHours from "../components/MapAndHours";


function Homepage() {

    const mobileNavPosition = useState(null)









    return (
        <div style={{ width: "100vw", marginBottom: "30px", padding: 0 }}>
            <LandingPage></LandingPage>
            <Ref innerRef={mobileNavPosition}>
                <AdamsNavbar isMobile={isMobile} page="home" mobileNavPosition={mobileNavPosition}></AdamsNavbar>
            </Ref>


            <Container>
                <Segment className="segmentBackground">
                    <Container text>
                        <Header as="h1" size="huge" center={true} color="blue" className="mainContentHeader">A Little About us</Header>
                        <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }} sub>Our Mission</Header>
                        <Container text>
                            <p></p>
                        </Container>

                        <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }} sub>Our Vision</Header>
                        <Container text>
                            <p></p>
                        </Container>


                    </Container>

                </Segment>
                <Grid>
                    <Grid.Column computer={6} mobile={16}>
                        <Segment>
                            <Container className="center aligned">
                                {/* <Header>instagram</Header> */}
                                <iframe style={{ marginBottom: 0 }}
                                    src="https://www.instagram.com/p/CFaoAJVAQGg/embed"
                                    frameBorder="0"
                                    allowFullScreen
                                    scrolling="no"
                                    allowTransparency
                                    width="100%"
                                    height="528"
                                    title="Twitter"
                                ></iframe>
                            </Container>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column computer={10} mobile={16} >
                        <Segment style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                            <Container className="center aligned">
                                {/* <Header huge>Twitter</Header> */}

                                <TwitterTimelineEmbed
                                    active={true}
                                    url="https://twitter.com/CCatUNC"
                                    options={{ height: 528 }}></TwitterTimelineEmbed>
                            </Container>
                        </Segment>
                    </Grid.Column>
                </Grid>

                <Segment >
                    <Grid>
                        <GridColumn computer={4} mobile={16}>
                            <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }}>RESOURCES</Header>
                            <p> mail us at <a href="mailto:carolinaclosetunc@gmail.com" className="emailLink">carolinaclosetunc@gmail.com</a></p>

                            <List bulleted>
                                <List.Item style={{ textDecoration: "underline" }}>
                                    Rental Policy and Procedure
                                                </List.Item>
                                <List.Item style={{ textDecoration: "underline" }}>
                                    Volunteer at Carolina Closet
                                </List.Item>
                                <List.Item style={{ textDecoration: "underline" }}>
                                    Donations
                                </List.Item>
                            </List>

                        </GridColumn>
                        <GridColumn computer={12} mobile={16}>
                            <MapAndHours />
                        </GridColumn>
                    </Grid>
                </Segment>

            </Container >
        </div >

    )


} export default Homepage