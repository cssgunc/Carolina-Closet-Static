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


function Homepage(props) {

    return (
        <div style={{ width: "100%", marginBottom: "30px" }}>
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
                    <Grid.Column width={6}>
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
                    <Grid.Column width={10} >
                        <Segment style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                            <Container className="center aligned">
                                {/* <Header huge>Twitter</Header> */}

                                <TwitterTimelineEmbed
                                    active={true}
                                    url="https://twitter.com/CCatUNC"
                                    options={{ height: 528 }}></TwitterTimelineEmbed>
                                {/* <TwitterTimelineEmbed
        sourceType="https://twitter.com/CCatUNC"
        screenName="Carolina Closet"
    /> */}
                                {/* <a class="twitter-timeline" href="https://twitter.com/CCatUNC?ref_src=twsrc%5Etfw">Tweets by CCatUNC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
                            </Container>
                        </Segment>
                    </Grid.Column>
                </Grid>

                {/* <TwitterTimelineEmbed
                            sourceType="https://twitter.com/CCatUNC"
                            screenName="Carolina Closet"
                        /> */}
                {/* <a class="twitter-timeline" href="https://twitter.com/CCatUNC?ref_src=twsrc%5Etfw">Tweets by CCatUNC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}




                <Segment >
                    <Grid>
                        <GridColumn width={4}>
                            <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }}>RESOURCES</Header>
                            <p>Email us at <a className="emailLink">carolinaclosetunc@gmail.com</a></p>

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
                        <GridColumn width={12}>
                            <Grid color="blue" className="padding0">
                                <Grid.Column width={12} className="padding0">
                                    <Embed
                                        className="aboutUsEmbed"
                                        active={true}
                                        placeholder='/images/image-16by9.png'
                                        url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.6618211772093!2d-79.0464520845897!3d35.90629738014254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc2ec8c4f6235%3A0x24238abd3a6e00b0!2sAvery%20Residence%20Hall!5e0!3m2!1sen!2sus!4v1602445052641!5m2!1sen!2sus'
                                    />
                                </Grid.Column>
                                <Grid.Column color="blue" width={4} className="margin0" >
                                    <Header as="h1" inverted>Hours</Header>
                                    <Header sub> Mon-Wed</Header>
                                    <Segment inverted textAlign="center" color="blue">
                                        <p className="donationsHours">3:00PM - 7:00PM</p>

                                    </Segment>
                                    <Header sub> Friday</Header>
                                    <Segment inverted textAlign="center" color="blue">
                                        <p className="donationsHours">2:00PM - 5:00PM</p>

                                    </Segment>
                                </Grid.Column>

                            </Grid>

                        </GridColumn>
                    </Grid>
                </Segment>

            </Container >
        </div >

    )


} export default Homepage