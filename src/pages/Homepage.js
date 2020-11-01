import React from "react"
import AdamsNavbar from "../components/AdamsNavbar"
import "../Styles/homepage.css";
import { isMobile } from 'react-device-detect';
import "semantic-ui-less/semantic.less";
import { Container, Header, Segment, Embed } from 'semantic-ui-react';
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Homepage(props) {

    return (
        <div style={{ width: "100%", marginBottom: "30px" }}>
            <AdamsNavbar isMobile={isMobile}></AdamsNavbar>
            <Container className="center aligned">
                <Segment className="segmentBackground">
                    <Header as="h1" center={true} color="blue" className="mainContentHeader">Home</Header>
                    <p>Dressing Tar Heels for Success</p>

                    <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }}>Our Mission</Header>
                    <p>To provide graduate and undergraduate students and faculty with access to business casual and business professional apparel in effort to ensure that attire is not a barrier to the procurement and actualization of desired opportunities.</p>
                    <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }}>Our Vision</Header>
                    <p>The objective of Carolina Closet shall be to bridge a gap in the accessibility to resources, specifically business attire, to disadvantaged students and faculty at UNC through the acquisition and distribution of donated professional apparel. This organization seeks to deconstruct barriers to professionalism resulting from wealth disparities that may inhibit the pursuit of professional opportunities.</p>
                </Segment>

                <Segment style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Container style={{}}>
                        <iframe
                            src="https://www.instagram.com/p/CFaoAJVAQGg/embed"
                            frameBorder="0"
                            allowFullScreen
                            scrolling="no"
                            allowTransparency
                            width="320"
                            height="518"
                        ></iframe>
                    </Container>
                    <Container>
                        <TwitterTimelineEmbed
                            active={true}
                            url="https://twitter.com/CCatUNC"
                            options={{ height: 600 }}></TwitterTimelineEmbed>
                        {/* <TwitterTimelineEmbed
                            sourceType="https://twitter.com/CCatUNC"
                            screenName="Carolina Closet"
                        /> */}
                        {/* <a class="twitter-timeline" href="https://twitter.com/CCatUNC?ref_src=twsrc%5Etfw">Tweets by CCatUNC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
                    </Container>
                </Segment>

                <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Segment style={{ marginRight: '10%', width: '30%'}}>
                        <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }}>RESOURCES</Header>
                        <p>Email us at carolinaclosetunc@gmail.com</p>
                        <p style={{ textDecoration: "underline" }}>Rental Policy and Procedure</p>
                        <p style={{ textDecoration: "underline" }}>Volunteer at Carolina Closet</p>
                        <p style={{ textDecoration: "underline" }}>Donations</p>
                    </Segment>
                    <Segment style={{width: "30%"}}>
                        <Embed
                            active={true}
                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.6618211772093!2d-79.0464520845897!3d35.90629738014254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc2ec8c4f6235%3A0x24238abd3a6e00b0!2sAvery%20Residence%20Hall!5e0!3m2!1sen!2sus!4v1602445052641!5m2!1sen!2sus">
                        </Embed>
                    </Segment>
                    <Segment style={{ marginLeft: '10%', width: '30%', height: '100%' }}>
                        <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }}>HOURS</Header>
                        <p>Mon – Wed: 3PM – 7PM</p>
                        <p>Fri: 2PM – 5PM</p>
                    </Segment>
                </Container>
            </Container>
        </div >

    )


} export default Homepage