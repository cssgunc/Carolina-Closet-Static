import React from "react"
import { Container, Grid, Header, Segment, List, Embed, GridRow, Item } from 'semantic-ui-react'
import { graphql, useStaticQuery } from "gatsby"
import MapAndHours from "./MapAndHours"

function AboutUsDonation() {

    const data = useStaticQuery(graphql`
    query Query {
        allMarkdownRemark(filter: {fields: {slug: {eq: "/AboutUsDonations/donations/"}}}) {
          edges {
            node {
              frontmatter {
                subHeader
                title
                donationTypes
              }
            }
          }
        }
      }
    `)
    const { allMarkdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter } = allMarkdownRemark.edges[0].node

    console.log(frontmatter)
    const donationItems = frontmatter.donationTypes.map((item) => {
        return (<List.Item key={Item} >
            {item}
        </List.Item >)

    })


    return (
        <Segment>

            <Container text>
                <Header size="huge">{frontmatter.title}</Header>
                <Header color="blue">{frontmatter.subHeader}</Header>
                <List bulleted>
                    {donationItems}
                </List>
                <Header as="h1" color="blue">How to Donate </Header>

                <MapAndHours />


            </Container>


        </Segment>
    )




} export default AboutUsDonation