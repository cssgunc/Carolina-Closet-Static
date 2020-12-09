import React from "react"
import AdamsNavbar from "../components/AdamsNavbar"
import "../Styles/homepage.css";
import { isMobile } from 'react-device-detect';
import "semantic-ui-less/semantic.less";
import { Container, Header, Segment, Embed, Grid, GridRow, GridColumn, List } from 'semantic-ui-react';
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import AboutUsDonations from "../components/AboutUsDonations"
import LandingPage from "./Landingpage"
import MeetTheTeam from "./MeetTheTeam";
import CardCarousel from "../components/CardCarousel";
import MapAndHours from "../components/MapAndHours";


function Homepage(props) {

    return (
        <div style={{ width: "100vw", marginBottom: "30px", padding: 0 }}>
            <LandingPage></LandingPage>

            <AdamsNavbar isMobile={isMobile} page="home"></AdamsNavbar>
            <Container>
                <Segment className="segmentBackground">
                    <Container text>
                        <Header as="h1" size="huge" center={true} color="blue" className="mainContentHeader">A Little About us</Header>
                        <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }} sub>Our Mission</Header>
                        <Container text>
                            <p>To provide graduate and undergraduate students and faculty with access to business casual and business professional apparel in effort to ensure that attire is not a barrier to the procurement and actualization of desired opportunities.</p>
                        </Container>

                        <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }} sub>Our Vision</Header>
                        <Container text>
                            <p>The objective of Carolina Closet shall be to bridge a gap in the accessibility to resources, specifically business attire, to disadvantaged students and faculty at UNC through the acquisition and distribution of donated professional apparel. This organization seeks to deconstruct barriers to professionalism resulting from wealth disparities that may inhibit the pursuit of professional opportunities.</p>
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
                            <p> mail us at <a className="emailLink">carolinaclosetunc@gmail.com</a></p>

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