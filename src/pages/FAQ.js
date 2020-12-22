import React from "react"
import AdamsNavbar from "../components/AdamsNavbar"
import "../Styles/aboutUs.css";
//import { isMobile } from 'react-device-detect';
import AboutUsNav from '../components/AboutUsNav'
import "semantic-ui-less/semantic.less";
import { Container, GridColumn, Grid, Header, Segment, Rail, List, Image, ImageGroup, Card } from 'semantic-ui-react'
import { isMobile } from "react-device-detect";
import "../Styles/carousel.css"

//import {Image from 'semantic-ui-react'
//there was a container afetr line 20 or the second segment but I took it out

function FAQ() {

  const items = [
    {
      header: 'What are the requirements for becoming a member of Carolina Closet?',
      description:
        'All graduate and undergraduate studnets are welcome to be members of Carolina Closet, regardless of race, color, religion, ancestry, national origin, marital status, sexual orientation, age, disability, veteran status, or any other classification protected by law.',
    },
    {
      header: 'What are the requirements for maintaining membership with Carolina Closet?',
      description:
        'General Membership operates on a volunteer basis, meaning every member is not required to attend all events and meetings. However, general members are required to volunteer at least twice a month',
    },
    {
      header: 'How often does Carolina Closet meet?',
      description:
        'General body meetings are held at least once a month, the date of which will be communicated to all volunteers at least two weeks in advance per our Communications Chair. If you opt to join a specific committee, you will have an additional set of meetings subject to the discretion of your chair.',
    },
    {
      header: 'What would I be doing as a volunteer?',
      description:
        'Some of the primary responsibilities of the volunteers will include: helping to sort through donations and take inventory, meeting clients who request appointments at the closet, and representing CC at various events when exec members are not available.',
    },
    {
      header: 'What is the difference between ‘business casual’ and ‘business professional’?',
      description:
        'To the side is a helpful graphic to answer this question!',
    },
  ]
  return (
    <div style={{ display: "100%" }}>
      <AdamsNavbar page="FAQ" isMobile={isMobile}></AdamsNavbar>
      <Container style={{ marginTop: "20px" }}>
        <Header as="h1" content="Frequently Asked Questions" className="meetTheTeamHeader" />
        <segment>
          <Card.Group items={items} />
        </segment>
        <ImageGroup>
        </ImageGroup>

      </Container>
    </div>

  )
} export default FAQ

