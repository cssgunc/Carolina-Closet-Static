import React, { useState } from "react"
import AdamsNavbar from "../components/AdamsNavbar"
import "../Styles/homepage.css";
import { isMobile } from 'react-device-detect';
import "semantic-ui-less/semantic.less";
import { Container, Header, Segment, Grid, GridColumn, List, Ref } from 'semantic-ui-react';
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import LandingPage from "./Landingpage"
import { graphql, useStaticQuery } from "gatsby"
import MapAndHours from "../components/MapAndHours";


function Homepage() {

    const mobileNavPosition = useState(null)

    const data = useStaticQuery(graphql`
    query IndexQuery {
        allMarkdownRemark(filter: {fields: {slug: {glob: "/HomePage/*"}}}) {
            edges {
            node {
                frontmatter {
                    aboutUsHeader,
                    aboutUsHomeContent{
                        homePageTitle,
                        homePageContent
                    },
                    resourcesTitle,
                    mainEmail,
                    resources{
                        resourceText,
                        resourceLink
                    }
                }
            }
            }
        }
        }
    `)

    const { allMarkdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter } = allMarkdownRemark.edges[0].node

    let aboutUsSection = null;
    if (frontmatter.aboutUsHomeContent) {
        aboutUsSection = (frontmatter.aboutUsHomeContent.map((item) => {
            return (
                <>
                    <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }} sub>{item.homePageTitle}</Header>
                    <Container text>
                        <p>{item.homePageContent}</p>
                    </Container>
                </>
            )
        }))
    }
    let resourcesList = null
    if (frontmatter.resources) {
        resourcesList = (frontmatter.resources.map((item) => {
            return (
                <List.Item>  <p style={{ textDecoration: "underline" }}>
                    {item.resourceText}
                </p>
                    <a href={item.resourceLink}>{item.resourceLink}</a>
                </List.Item >
            )
        }))
    }





    return (
        <div style={{ width: "100vw", marginBottom: "30px", padding: 0 }}>
            <LandingPage></LandingPage>
            <Ref innerRef={mobileNavPosition}>
                <AdamsNavbar isMobile={isMobile} page="home" mobileNavPosition={mobileNavPosition}></AdamsNavbar>
            </Ref>


            <Container>
                <Segment className="segmentBackground">
                    <Container text>
                        <Header as="h1" size="huge" center={true} color="blue" className="mainContentHeader">{frontmatter.aboutUsHeader}</Header>
                        {aboutUsSection}
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
                            <Header as="h2" style={{ color: "#13294B", textDecoration: "underline" }}>{frontmatter.resourcesTitle}</Header>
                            <p> Mail us at <a href={"mailto:" + frontmatter.mainEmail} className="emailLink">carolinaclosetunc@gmail.com</a></p>

                            <List bulleted>
                                {resourcesList}
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