import React from "react";
import { Container, Header, Segment } from 'semantic-ui-react'
import { graphql, useStaticQuery } from "gatsby"


// data will be injected by the GraphQL query below
function AboutUsGeneral() {



  const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark(filter: {fields: {slug: {eq: "/AboutUs/about-carolina-closet/"}}}) {
          edges {
            node {
              frontmatter {
                SubHeader
                about
                title
              }
            }
          }
        }
      }
    `)
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = allMarkdownRemark.edges[0].node





  return (
    <Segment>
      <Container text>
        <Header size="huge">{frontmatter.title}</Header>
        <Header color="blue">{frontmatter.SubHeader}</Header>
        <p >
          {frontmatter.about}
        </p>
      </Container>



    </Segment>);




} export default AboutUsGeneral



