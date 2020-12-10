import React from "react"

import "../Styles/aboutUs.css"
import { Header, Embed, Grid, } from 'semantic-ui-react';


function MapAndHours() {
    return (

        <Grid color="blue" className="padding0">
            <Grid.Column computer={12} mobile={16} className="padding0">
                <Embed
                    className="aboutUsEmbed"
                    active={true}
                    placeholder='/images/image-16by9.png'
                    url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.6618211772093!2d-79.0464520845897!3d35.90629738014254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc2ec8c4f6235%3A0x24238abd3a6e00b0!2sAvery%20Residence%20Hall!5e0!3m2!1sen!2sus!4v1602445052641!5m2!1sen!2sus'
                />
            </Grid.Column>
            <Grid.Column color="blue" computer={4} mobile={16} className="margin0" >
                <Header as="h1" inverted>Hours</Header>
                <Header sub> Mon-Wed</Header>
                <p className="donationsHours">3:00PM - 7:00PM</p>

                <Header sub> Friday</Header>
                <p className="donationsHours">2:00PM - 5:00PM</p>

            </Grid.Column>

        </Grid>

    )


} export default MapAndHours

