import Slider from "react-slick";
import React from "react";
import "../Styles/carousel.css"
import { Container, Divider, Grid, Image, Segment } from 'semantic-ui-react';




class CardCarousel extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="card">
        <Slider {...settings}>
          <CardContent name="Marc" email="marc@example.com" bio="Hello world" img="https://picsum.photos/1300/1200"/>
          <CardContent name="Larry" email="larry@yahoo.com" bio="world hello" img="https://picsum.photos/1300/1200"/>
          <CardContent name="Bob" email="bob@example.com" bio="goodbye world" img="https://picsum.photos/1300/1200"/>
          <CardContent name="Sara" email="se193@hotmail.com" bio=" world" img="https://picsum.photos/1300/1200"/>
          <CardContent name="Jenny" email="jjenny@example.com" bio=" world" img="https://picsum.photos/1300/1200"/>
          <CardContent name="Laverne" email="lv13@gmail.com" bio="Hello world" img="https://picsum.photos/1300/1200"/>
          <CardContent name="Brock" email="brock@example.com" bio="Hello world" img="https://picsum.photos/1300/1200"/>



        </Slider>
      </div>
    );
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <Segment raised>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <p>
            <Image src={this.props.img} />
          </p>
        </Grid.Column>
        <Grid.Column>
          <Container textAlign='center'>
            <strong> Name: {this.props.name} </strong>
            <Divider />
            <p> Email: {this.props.email}</p>
            <Divider />
            <p> Profile: {this.props.bio}</p>
          </Container> 
        </Grid.Column>
      </Grid>
  
      <Divider vertical></Divider>
    </Segment>
  );
      
  }
}


export default CardCarousel;
