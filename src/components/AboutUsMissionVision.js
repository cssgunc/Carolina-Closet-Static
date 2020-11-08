import React from "react"
import { Container, Header, Segment } from 'semantic-ui-react'
import { graphql, useStaticQuery } from "gatsby"


function AboutUsMissionVision() {

    const data = useStaticQuery(graphql`
    query VMQuery {
        allMarkdownRemark(filter: {fields: {slug: {glob: "/AboutUsMissionVision/*"}}}) {
          edges {
            node {
              frontmatter {
                vision,
                mission
              }
            }
          }
        }
      }
    `)

    const { allMarkdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter } = allMarkdownRemark.edges[0].node
    console.log(frontmatter)

    return (
        <Segment>
            <Container text>
                <Header size="huge">Vision</Header>
                <p>{frontmatter.vision}</p>
                <Header size="huge">Mission</Header>
                <p>{frontmatter.mission}</p>

            </Container>
        </Segment>
    );




} export default AboutUsMissionVision