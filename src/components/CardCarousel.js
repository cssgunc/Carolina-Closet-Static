import Slider from "react-slick";
import React from "react";
import "./carousel.css"
import { Container, Divider, Grid, Image, Segment } from 'semantic-ui-react';




class CardCarousel extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="card">
        <Slider {...settings}>
          <CardContent/>
          <CardContent/>
          <CardContent/>
          <CardContent/>
          <CardContent/>
          <CardContent/>
          <CardContent/>



        </Slider>
      </div>
    );
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <p>
            <Image src='https://picsum.photos/200/300' />
          </p>
        </Grid.Column>
        <Grid.Column>
          <Container>
            <p> name </p>
            <p> email: email </p>
            <p> profile </p>
          </Container> 
        </Grid.Column>
      </Grid>
  
      <Divider vertical></Divider>
    </Segment>
  );
      
  }
}


export default CardCarousel;
