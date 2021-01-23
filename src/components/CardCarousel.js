import Slider from "react-slick";
import React from "react";
import { isMobile } from "react-device-detect";
import "../Styles/carousel.css"
import { Container, Divider, Grid, Image, Segment, Header } from 'semantic-ui-react';
import { graphql, useStaticQuery } from "gatsby"

function CardCarousel() {


  const data = useStaticQuery(graphql`
    query MeetTheTeam {
      allMarkdownRemark(filter: {fields: {slug: {eq: "/meetTheTeam/meet-the-team/"}}}) {
        edges {
          node {
            frontmatter {
              title
              teamMember{
                names
                email
                bios
                memberImage
              }
            }
          }
        }
      }
    }
  `)
  const { allMarkdownRemark } = data;
  const { frontmatter } = allMarkdownRemark.edges[0].node;
  console.log(data)

  const listItems = frontmatter.teamMember.map((e) =>
    (<CardContent key={e.name} name={e.names} email={e.email} bio={e.bios} img={e.memberImage} />)
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
      <Segment className="meetTheTeamCards" raised style={{ marginTop: "0", padding: "20px" }} color="blue" inverted>
        <Grid columns={2} relaxed='very'>
          <Grid.Column className="meetTheTeamImageContainer">

            <Image className="meetTheTeamImage" src={props.img} />

          </Grid.Column>
          <Grid.Column className="meetTheTeamText">
            <Container>
              <Header size="huge" style={{ color: "white", fontSize: "45px" }}>{props.name}</Header>
              <Divider />
              <Header style={{ color: "white" }}>{props.email}</Header>
              <Divider />
              <Header style={{ color: "white" }}>Project Manager</Header>
              <Divider />
              <Header underlined style={{ color: "white" }}>About {props.name.split(" ")[0]}:</Header>
              <Container text style={{ color: "white", width: '100%', paddingLeft: '5px', paddingRight: "10px" }}>
                {props.bio}

              </Container>
            </Container>
          </Grid.Column>
        </Grid>

        <Divider vertical></Divider>
      </Segment >
    );
  }

  if (isMobile) {
    return (
      <Segment raised color="blue" inverted>
        <Grid divided='vertically' relaxed='very' >
          <Grid.Row className="meetTheTeamImageContainer" >
            <Image className="meetTheTeamImage" src={props.img} />
          </Grid.Row>
          <Grid.Row className="meetTheTeamTextMobile">
            <Container>
              <Header size="huge" style={{ color: "white", fontSize: "40px" }} >{props.name}</Header>
              <Divider />
              <Header style={{ color: "white" }}>{props.email}</Header>
              <Divider />
              <Header style={{ color: "white" }}>Project Manager</Header>
              <Divider />
              <Header underlined style={{ color: "white" }}>About {props.name.split(" ")[0]}:</Header>
              <Container text style={{ color: "white", width: '100%', paddingLeft: '5px' }}>
                {props.bio}
              </Container>
            </Container>
          </Grid.Row >
        </Grid >
      </Segment >

    );
  }
}


