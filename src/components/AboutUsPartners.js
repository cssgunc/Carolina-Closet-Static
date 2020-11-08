import React from "react"

import { Container, Grid, Header, Segment, GridRow, Image, ImageGroup } from 'semantic-ui-react'

function AboutUsPartners() {


    return (
        <Segment>
            <Container text>
                <Header size="huge"> Partners</Header>
                <Header color="blue"> Click Each For More Info</Header>
                <Grid centered >
                    <GridRow columns={1} stretched >
                        <ImageGroup >
                            <Image className="imgBorder" fluid src={"/images/carolinacupboard.png"}></Image>
                            <Image className="imgBorder" fluid src={"/images/frat.gif"}></Image>

                        </ImageGroup>

                    </GridRow>
                    <GridRow columns={1} stretched>
                        <Image.Group >
                            <Image className="imgBorder" fluid src={"/images/housing.png"}></Image>
                            <Image className="imgBorder" fluid src={"/images/rha.png"}></Image>
                        </Image.Group>

                    </GridRow>

                </Grid>

            </Container>


        </Segment>
    )



} export default AboutUsPartners