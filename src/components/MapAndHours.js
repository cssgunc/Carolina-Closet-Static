import React from "react"

import "../Styles/aboutUs.css"
import { Header, Embed, Grid, } from 'semantic-ui-react';


function MapAndHours() {

    const data = useStaticQuery(graphql`
    query MapAndHoursQuery {
        allMarkdownRemark(filter: {fields: {slug: {glob: "/HomePage/*"}}}) {
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

    let hours = null
    if (frontmatter.hours) {
        hours = frontmatter.map((item) => {
            return (
                <>
                    <Header sub>{item.day}</Header>
                    <p className="donationsHours">{hours.time}</p>

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
                    placeholder={frontmatter.location}
                />
            </Grid.Column>
            <Grid.Column color="blue" computer={4} mobile={16} className="margin0" >
                <Header as="h1" inverted>Hours</Header>
                {hours}

            </Grid.Column>

        </Grid>

    )


} export default MapAndHours

