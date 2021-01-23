import React from "react"
import AdamsNavbar from "../components/AdamsNavbar"
import "../Styles/aboutUs.css";
//import { isMobile } from 'react-device-detect';
import AboutUsNav from '../components/AboutUsNav'
import "semantic-ui-less/semantic.less";
import { Container, GridColumn, Grid, Header, Segment, Rail, List, Image, ImageGroup, Card } from 'semantic-ui-react'
import { isMobile } from "react-device-detect";
import "../Styles/carousel.css"
import FlippedCard from "../components/FlippedCard";
import { graphql, useStaticQuery } from "gatsby"



function FAQ() {


  const data = useStaticQuery(graphql`
  query FAQQuery {
      allMarkdownRemark(filter: {fields: {slug: {glob: "/FAQ/*"}}}) {
        edges {
          node {
            frontmatter {
              title,
              questions{
                question,
                answer,
                answerImage
                }
            }
          }
        }
      }
    }
  `)

  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = allMarkdownRemark.edges[0].node
  console.log(frontmatter)




  const items = frontmatter.questions




  const cardLists = items.map((item) => (
    <Card>
      <FlippedCard
        front={item.question} back={item.answer} img={item.answerImage}>
      </FlippedCard>
    </Card>));

  return (
    <div style={{ display: "100%" }}>
      <AdamsNavbar page="FAQ" isMobile={isMobile}></AdamsNavbar>
      <Container style={{ marginTop: "20px" }} >
        <Header as="h1" content={frontmatter.title} className="meetTheTeamHeader" />
        <Card.Group >
          {cardLists}
        </Card.Group>
        <ImageGroup>
        </ImageGroup>

      </Container>
    </div>

  )
} export default FAQ

