import React from "react"
import ReactCardFlip from 'react-card-flip';
import { Container, Header, Segment, Image, Card, ImageGroup } from "semantic-ui-react";
import "../Styles/aboutUs.css";

class PartnerFlippedCard extends React.Component {
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
            <div onClick={this.handleClick} style={{
                maxWidth: "90%"
            }}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" containerStyle={{ height: "100%", paddingTop: "5px" }}>
                    <ImageGroup >
                        <Image className="imgBorder" fluid src={this.props.img} size="big" />
                    </ImageGroup>
                    <Container style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
                        <Segment>
                            <p style={{ fontSize: "20px", color: "black" }}>
                                {this.props.back}

                            </p>
                        </Segment>
                    </Container>

                </ReactCardFlip >
            </div >
        )
    }
} export default PartnerFlippedCard