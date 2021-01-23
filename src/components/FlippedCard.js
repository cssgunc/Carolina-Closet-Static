import React from "react"
import ReactCardFlip from 'react-card-flip';
import { Container, Header, Segment } from "semantic-ui-react";
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
      <div onClick={this.handleClick} style={{ height: "100%" }}>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" containerStyle={{ height: "100%", padding: "15px" }}>
          <Container style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
            <Header size="medium">
              {this.props.front}

            </Header>
          </Container>

          <Container style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
            <Segment>
              <p style={{ fontSize: "20px" }}>
                {this.props.back}

              </p>


            </Segment>
          </Container>

        </ReactCardFlip >
      </div >
    )
  }
} export default FlippedCard