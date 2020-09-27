import React from "react"
import AdamsNavbar from "../components/AdamsNavbar"
import "../Styles/aboutUs.css";
import { isMobile } from 'react-device-detect';
import AboutUsNav from '../components/AboutUsNav'
import 'semantic-ui-css/semantic.min.css'
import { Container, GridColumn, Grid, Header, Segment, Rail, List } from 'semantic-ui-react'





function AboutUs() {
    console.log(isMobile)




    return (
        <div style={{ width: "100%" }}>
            <AdamsNavbar isMobile={isMobile}></AdamsNavbar>


            <Container>
                <Segment>

                    <Container text>
                        <Header as="h1">About Carolina Closet</Header>
                        <Header as="h2">"Dressing Heels For Success"</Header>
                        <p className="aboutUsText">
                            Carolina Closet is a newly formed student service-based organization.The objective of Carolina Closet is to bridge a gap in the accessibility to resources, specifically business attire, to students at UNC through the acquisition and distribution of donated professional apparel. This organization seeks to deconstruct barriers to professionalism resulting from wealth disparities that may inhibit the pursuit of professional opportunities.</p>
                        <p className="aboutUsText">
                            With 21% of students at UNC come from a “low income” background, meaning the income for a family of four is below $50,000, a step towards breaking cycles of poverty is the securing of a career after graduation. This process can be hampered without business attire clothing that can be worn to interviews, recruiting sessions, and more. It has been found that a lack of access to adequate clothing can not only affect students psychologically, but can affect first impressions. Sixty-five percent of hiring managers say clothing can be the deciding factor between two similar candidates (Visualistan). Our goal is to provide “a suit up” in the financial struggle associated with securing a career. Students spend the duration of their time at university focused on building the best resume for their desired career path, so the last thing they should have to worry about is lacking suitable professional clothing.</p>
                        <p className="aboutUsText">
                            We are following in the tradition of many other institutions including University of South Carolina, University of Kentucky, University of California, Los Angeles, Columbia University, and Armstrong University who have addressed this need on their campuses through the creation of professional attire assistance programs. However, we cannot fully realize our mission without your support! You can volunteer within Carolina Closet, donate to Carolina Closet, and help us spread the word!</p>
                    </Container>



                </Segment>
                <Segment>

                    <Container text>
                        <Header as="h1">Donations</Header>
                        <Header as="h2">We Accept the following Items</Header>
                        <List>
                            <List.Item >
                                Men’s business suits
                            </List.Item >
                            <List.Item>
                                Women’s business suits
                                </List.Item>
                            <List.Item>
                                Button-up business professional shirts
                            </List.Item>
                            <List.Item>
                                Appropriate blouses
                                
                            </List.Item>
                            <List.Item>
                                Professional slacks for men and women
                            </List.Item>
                            <List.Item>
                                Conservative ties
                            </List.Item>



                        </List>

                    </Container>


                </Segment>


            </Container>







        </div >


    )


} export default AboutUs