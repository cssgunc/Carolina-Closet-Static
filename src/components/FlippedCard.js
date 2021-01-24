import React from "react"
import ReactCardFlip from 'react-card-flip';
import { Container, Header, Segment, Image, Card } from "semantic-ui-react";
import "../Styles/aboutUs.css";

class FlippedCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <Card onClick={this.handleClick} style={{ height: "100%", width: this.props.img ? "200%" : "100%", maxWidth: "85vw" }} fluid={this.props.img}>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" containerStyle={{ height: "100%", padding: "15px" }}>
          <Container style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
            <Header size="medium">
              {this.props.front}

            </Header>
          </Container>

          <Container style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
            <Segment>
              <p style={{ fontSize: "20px", color: "black" }}>
                {this.props.back}

              </p>
              <Image src={this.props.img}>


              </Image>

            </Segment>
          </Container>

        </ReactCardFlip >
      </Card >
    )
  }
} export default FlippedCard