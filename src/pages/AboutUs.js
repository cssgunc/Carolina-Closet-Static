import React, { useEffect, useRef, useState } from "react"
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
import AboutUsRentals from "../components/AboutUsRentals";



function AboutUs() {
    console.log(isMobile)
    const stickyRef = useRef(null);

    const generalRef = useState(null);
    const donationsRef = useState(null);
    const missionRef = useState(null);
    const partnersRef = useState(null);
    const rentalsRef = useState(null);
    let arrRefs = [generalRef, donationsRef, missionRef, partnersRef, rentalsRef];

    useEffect(() => {
        arrRefs = [generalRef, donationsRef, missionRef, partnersRef, rentalsRef];



    })


    return (
        <Ref innerRef={stickyRef}>
            <script>
                if (window.netlifyIdentity) {
                    window.netlifyIdentity.on("init", user => {
                        if (!user) {
                            window.netlifyIdentity.on("login", () => {
                                document.location.href = "/admin/";
                            });
                        }
                    });
  }
</script>

            <div style={{ width: "100%" }} >
                <Sticky ref={stickyRef}>
                    <AdamsNavbar isMobile={isMobile} page="aboutUs"></AdamsNavbar>
                </Sticky>
                <Grid columns={2} centered >

                    <GridColumn width={3}>
                        <Sticky context={stickyRef}>
                            <AboutUsNav arrRefs={arrRefs}></AboutUsNav>

                        </Sticky>
                    </GridColumn>


                    <GridColumn width={13} >

                        <Container>
                            <Ref innerRef={generalRef}>
                                <AboutUsGeneral ></AboutUsGeneral>
                            </Ref>
                            <Ref innerRef={donationsRef}>
                                <AboutUsDonations ></AboutUsDonations>
                            </Ref>
                            <Ref innerRef={missionRef}>
                                <AboutUsMissionVision ></AboutUsMissionVision>
                            </Ref>
                            <Ref innerRef={partnersRef}>
                                <AboutUsPartners ></AboutUsPartners>
                            </Ref>
                            <Ref innerRef={rentalsRef}>
                                <AboutUsRentals></AboutUsRentals>

                            </Ref>
                        </Container >


                    </GridColumn>
                </Grid>
            </div >
        </Ref>)


} export default AboutUs