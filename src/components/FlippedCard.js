import React from "react"
import ReactCardFlip from 'react-card-flip';
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
        <div onClick={this.handleClick}>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div  style={{fontSize: "1.2em", fontWeight: "bold"}}>
            {this.props.front}
          </div>
          <div>
            {this.props.back}
          </div>

        </ReactCardFlip>
        </div>
      )
    }
} export default FlippedCard