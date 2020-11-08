import Slider from "react-slick";
import React from "react";
import { isMobile } from "react-device-detect";
import "../Styles/carousel.css"
import { Container, Divider, Grid, Image, Segment } from 'semantic-ui-react';
import { graphql, useStaticQuery } from "gatsby"

function CardCarousel() {

  /*
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(filter: {fields: {slug: {eq: "/MeetTheTeam/meet-the-team/"}}}) {
        edges {
          node {
            frontmatter {
              title
              numOfMembers
              names
              bios
            }
          }
        }
      }
    }
  `)
  const { allMarkdownRemark } = data;
  const { frontmatter } = allMarkdownRemark.edges[0].node;
  */

  const data = [
    {
      'name': 'Larry',
      'email': 'larryemail@email.com',
      'bio': 'larrybio',
      'img': 'https://picsum.photos/1300/1200' 
    },
    {
      'name': 'Marc',
      'email': 'larryemail@email.com',
      'bio': 'larrybio',
      'img': 'https://picsum.photos/1300/1200' 
    },
    {
      'name': 'Adam',
      'email': 'larryemail@email.com',
      'bio': 'larrybio',
      'img': 'https://picsum.photos/1300/1200' 
    },
  ]
  const listItems = data.map((e) => 
    <CardContent name={e.name} email={e.email} bio={e.bio} img={e.img}/>
  );

  var settings = {
    dots: true
  };

  return (
    <div className="card">
      <Slider {...settings}>
        {listItems}
      </Slider>
    </div>
  );
}
export default CardCarousel;

function CardContent(props) {
  console.log(isMobile);

  if (!isMobile) {
    return (
      <Segment raised>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <p>
            <Image src={props.img} />
          </p>
        </Grid.Column>
        <Grid.Column>
          <Container textAlign='center'>
            <strong> Name: {props.name} </strong>
            <Divider />
            <p> Email: {props.email}</p>
            <Divider />
            <p> Profile: {props.bio}</p>
          </Container> 
        </Grid.Column>
      </Grid>

      <Divider vertical></Divider>
    </Segment>
    );
  }

  if (isMobile) {
    return (
      <Segment raised>
      <Grid divided='vertically' relaxed='very'>
        <Grid.Row>
            <Image src={props.img} />
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Container>
            <strong> Name: {props.name} </strong>
            <Divider />
            <p> Email: {props.email}</p>
            <Divider />
            <p> Profile: {props.bio}</p>
          </Container> 
        </Grid.Row>
      </Grid>
    </Segment>

    );
  }
} 


