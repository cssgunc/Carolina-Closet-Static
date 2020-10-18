import React from "react"
import { Container, GridColumn, Grid, Header, Segment, Rail, List, Embed, GridRow } from 'semantic-ui-react'

function AboutUsDonation() {

    return (
        <Segment>

            <Container text>
                <Header size="huge">Donations</Header>
                <Header color="blue">We Accept the following Items</Header>
                <List bulleted>
                    <List.Item  >
                        Men’s business suits
                            </List.Item >
                    <List.Item >
                        Women’s business suits
                            </List.Item>
                    <List.Item >
                        Button-up business professional shirts
                            </List.Item>
                    <List.Item >
                        Appropriate blouses

                            </List.Item>
                    <List.Item >
                        Professional slacks for men and women
                            </List.Item>
                    <List.Item >
                        Conservative ties
                            </List.Item>

                </List>
                <Header as="h1" color="blue">How to Donate </Header>
                <Grid >
                    <GridRow color="blue" className="padding0">
                        <Grid.Column width={12} className="padding0">
                            <Embed
                                className="aboutUsEmbed"
                                active={true}
                                placeholder='/images/image-16by9.png'
                                url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.6618211772093!2d-79.0464520845897!3d35.90629738014254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc2ec8c4f6235%3A0x24238abd3a6e00b0!2sAvery%20Residence%20Hall!5e0!3m2!1sen!2sus!4v1602445052641!5m2!1sen!2sus'
                            />
                        </Grid.Column>
                        <Grid.Column color="blue" width={4} className="margin0" >
                            <Header as="h1" inverted>Hours</Header>
                            <Header sub> Mon-Wed</Header>
                            <Segment inverted textAlign="center" color="blue">
                                <p className="donationsHours">3:00PM - 7:00PM</p>

                            </Segment>
                            <Header sub> Friday</Header>
                            <Segment inverted textAlign="center" color="blue">
                                <p className="donationsHours">2:00PM - 5:00PM</p>

                            </Segment>
                        </Grid.Column>

                    </GridRow>

                </Grid>

            </Container>


        </Segment>
    )




} export default AboutUsDonation