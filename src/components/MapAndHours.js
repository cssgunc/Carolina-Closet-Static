import React from "react"

import "../Styles/aboutUs.css"
import { Header, Embed, Grid, } from 'semantic-ui-react';
import { graphql, useStaticQuery } from "gatsby"


function MapAndHours() {
    const data = useStaticQuery(graphql`
    query MapAndHoursQuery {
        allMarkdownRemark(filter: {fields: {slug: {glob: "/hoursMap/*"}}}) {
            edges {
            node {
                frontmatter {
                    location,
                    hours{
                        day,
                        times

                    }
                }
            }
            }
        }
        }
    `)

    const { allMarkdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter } = allMarkdownRemark.edges[0].node
    console.log(frontmatter.location)

    let hours = null
    if (frontmatter.hours) {
        hours = frontmatter.hours.map((item) => {
            return (
                <>
                    <Header sub>{item.day}</Header>
                    <p className="donationsHours">{item.times}</p>
                </>
            )
        })
    }

    return (
        <Grid color="blue" className="padding0">
            <Grid.Column computer={12} mobile={16} className="padding0">
                <Embed
                    className="aboutUsEmbed"
                    active={true}
                    placeholder="the location of Carolina Closer"
                    url={frontmatter.location}
                />
            </Grid.Column>
            <Grid.Column color="blue" computer={4} mobile={16} className="margin0" >
                <Header as="h1" inverted>Hours</Header>
                {hours}

            </Grid.Column>

        </Grid>

    )


} export default MapAndHours

