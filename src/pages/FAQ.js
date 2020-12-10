import React from "react"
import AdamsNavbar from "../components/AdamsNavbar"
import "../Styles/aboutUs.css";
//import { isMobile } from 'react-device-detect';
import AboutUsNav from '../components/AboutUsNav'
import "semantic-ui-less/semantic.less";
import { Container, GridColumn, Grid, Header, Segment, Rail, List, Image, ImageGroup } from 'semantic-ui-react'
import { isMobile } from "react-device-detect";

//import {Image from 'semantic-ui-react'
//there was a container afetr line 20 or the second segment but I took it out

function FAQ() {
    return (
        <div style={{ display: "100%" }}>
            <AdamsNavbar page="FAQ" isMobile={isMobile}></AdamsNavbar>
            <Container>
                <segment>
                    <Container text>
                        <Header style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 10rem` }} as="h1">Frequently Asked Questions</Header>
                    </Container>
                </segment>
                <segment>
                    <h3 style={{ color: '#4b9cd3' }}>
                        What are the requirements for becoming a member of Carolina Closet?
                        </h3>
                    <p style={{ width: '600px', left: '0%' }}>
                        All graduate and undergraduate studnets are welcome to be members of Carolina Closet, regardless of race, color, religion, ancestry, national origin, marital status, sexual orientation, age, disability, veteran status, or any other classification protected by law.
                        </p>
                    <h3 style={{ color: '#4b9cd3' }}>
                        What are the requirements for maintaining membership with Carolina Closet?
                        </h3>
                    <p style={{ width: '600px', left: '0%' }}>
                        General Membership operates on a volunteer basis, meaning every member is not required to attend all events and meetings. However, general members are required to volunteer at least twice a month
                        </p>
                    <h3 style={{ color: '#4b9cd3' }}>
                        How often does Carolina Closet meet?
                        </h3>
                    <p style={{ width: '600px', left: '0%' }}>
                        General body meetings are held at least once a month, the date of which will be communicated to all volunteers at least two weeks in advance per our Communications Chair. If you opt to join a specific committee, you will have an additional set of meetings subject to the discretion of your chair.
                        </p>
                    <h3 style={{ color: '#4b9cd3' }}>
                        What would I be doing as a volunteer?
                        </h3>
                    <p style={{ width: '600px', left: '0%' }}>
                        Some of the primary responsibilities of the volunteers will include: helping to sort through donations and take inventory, meeting clients who request appointments at the closet, and representing CC at various events when exec members are not available.
                        </p>
                    <h3 style={{ color: '#4b9cd3' }}>
                        What is the difference between ‘business casual’ and ‘business professional’?
                        </h3>
                    <p style={{ width: '600px', left: '0%' }}>
                        To the side is a helpful graphic to answer this question!
                        </p>

                </segment>
                <ImageGroup>
                    <Image style={{ width: '400px', position: 'absolute', right: '5%', top: '200px' }} fluid src={"/images/infographic.JPG"}></Image>
                </ImageGroup>

            </Container>
        </div>

    )
} export default FAQ