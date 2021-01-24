import React from "react"

import { Container, Grid, Header, Segment, GridRow, Image, ImageGroup } from 'semantic-ui-react'
import PartnerFlipCard from "./PartnerFlipCard"
import { graphql, useStaticQuery } from "gatsby"


function AboutUsPartners() {

    const data = useStaticQuery(graphql`
    query PartnersQuery {
        allMarkdownRemark(filter: {fields: {slug: {glob: "/AboutUsPartners/*"}}}) {
            edges {
            node {
                frontmatter {
                    title,
                    subHeader,
                    partnersList{
                        partnerName,
                        about,
                        image

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


    let partners = null
    if (frontmatter.partnersList) {
        partners = frontmatter.partnersList.map((item) => {
            return (
                <PartnerFlipCard img={"/img/" + item.image} back={item.about} />


            )
        })
    }





    return (
        <Segment>
            <Container text>
                <Header size="huge">{frontmatter.title}</Header>
                <Header color="blue">{frontmatter.subHeader}</Header>
                <div className="partnerContainer">
                    {partners}


                </div>

            </Container>


        </Segment >
    )



} export default AboutUsPartners