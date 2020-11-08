import React from "react";
import { Container, Header, Segment } from 'semantic-ui-react'
import { graphql, useStaticQuery } from "gatsby"


function AboutUsRentals(props) {
    const data = useStaticQuery(graphql`
    query rentalsQuery {
        allMarkdownRemark(filter: {fields: {slug: {eq: "/AboutUsRentals/rental-policy/"}}}) {
          edges {
            node {
              frontmatter {
                title
                rentalTypes{
                    content
                    header
                }
              }
            }
          }
        }
      }
    `)
    const { allMarkdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter } = allMarkdownRemark.edges[0].node
    const rentalPs = frontmatter.rentalTypes.map((post) => {

        return (<>
            <Header size="large" color="blue">{post.header}</Header>
            <p>
                {post.content}
            </p>
        </>)


    })



    return (
        <Segment>
            <Container text>
                <Header size="huge">{frontmatter.title}</Header>

                {rentalPs}
            </Container>
        </Segment>
    )

} export default AboutUsRentals