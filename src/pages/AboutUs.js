import React, { useRef } from "react"
import AdamsNavbar from "../components/AdamsNavbar"
import "../Styles/aboutUs.css";
import { isMobile } from 'react-device-detect';
import AboutUsNav from '../components/AboutUsNav'
import "semantic-ui-less/semantic.less";
import { Container, GridColumn, Grid, Header, Segment, Rail, List, Embed, GridRow, Image, ImageGroup, Ref, Sticky } from 'semantic-ui-react'
import AboutUsDonations from "../components/AboutUsDonations"
import AboutUsPartners from "../components/AboutUsPartners"
import AboutUsGeneral from "../components/AboutUsGeneral";
import AboutUsMissionVision from "../components/AboutUsMissionVision"


function AboutUs() {
    console.log(isMobile)
    const stickyRef = useRef(null);



    return (
        <Ref innerRef={stickyRef}>

        <div style={{ width: "100%" }}>
                <Sticky ref={stickyRef}>
                    <AdamsNavbar isMobile={isMobile}></AdamsNavbar>
                </Sticky>
                <Grid columns={2} centered >

                    <GridColumn width={3}>
                        <Sticky context={stickyRef}>
                            <AboutUsNav></AboutUsNav>

                        </Sticky>
                    </GridColumn>


                    <GridColumn width={13} >

                        <Container>
                            <AboutUsGeneral></AboutUsGeneral>
                            <AboutUsDonations></AboutUsDonations>
                            <AboutUsMissionVision></AboutUsMissionVision>
                            <AboutUsPartners></AboutUsPartners>

                            <Segment>
                                <Container text>
                                    <Header size="huge"> Rental Policy</Header>

                                    <Header size="large" color="blue">General</Header>
                                    <p>
                                        Only three items of clothing (including accessories) may be borrowed at a given time. Clothing must be returned on or before the date specified to a Carolina Closet staff member to confirm receipt and condition of items. All clothing items are distributed on a first come first serve basis.
                                    </p>
                                    <Header size="large"color="blue">Cleaning</Header>
                                    <p>
                                        All clothing items and accessories do not have to be washed before they are returned. However, they must be returned in the same condition they are borrowed, free of stains or damages.
                                    </p>
                                    <Header size="large" color="blue">Cleaning</Header>
                                    <p>
                                        All clothing items and accessories do not have to be washed before they are returned. However, they must be returned in the same condition they are borrowed, free of stains or damages.
                                    </p>
                                    <Header size="large" color="blue">Alterations</Header>
                                    <p>
                                        Carolina Closet clothing and accessories may not be altered to fit and must be returned in their original condition. Carolina Closet clothing may NOT be cut, dyed, painted or altered. Tape, iron-on bonding-web, glue or any other type of adhesives may NOT be used on clothing.
                                    </p>
                                    <Header size="large" color="blue">Rental Return Date</Header>
                                    <p>
                                        The return date is calculated by your start rental date plus seven calendar days. If for any reason you need more time, please inform us within 48hrs prior to your due date by filling out this form.
                                    </p>
                                    <Header size="large" color="blue">Disclaimer</Header>
                                    <p>Carolina Closet. and its members are not responsible for accidents or injuries related directly or indirectly from the use of the rented item.
                                        
                                    </p>
                                </Container>
                            </Segment>
                        </Container >


                    </GridColumn>
                </Grid>
        </div >
        </Ref> )


} export default AboutUs