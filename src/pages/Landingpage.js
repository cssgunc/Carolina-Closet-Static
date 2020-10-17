import React from "react"
import { Container, Header, Segment } from "semantic-ui-react"
import "../Styles/landingpage.css"

function LandingPage() {


    return (
       
            <div style={{ width: "100%" }}>
                
                    <Segment padded='very' className="contentContainer">
                        <Container>
                            <Header as="h1" className="name">Carolina Closet</Header>
                            <Header as="h3" className="slogan"> "Dressing Tar Heels for Success"</Header>

                            <div className="ui centered cards">
                                <div className="ui card">
                                    <div className="content">
                                        <div className="description a">Are you a Student?</div>
                                        <button className="ui button a">
                                            Browse the inventory
                                        </button>
                                    </div>
                                </div>
                                <div className="ui card">
                                    <div className="content">
                                        <div className="description b">Volunteer or Donor?</div>
                                        <button className="ui button b">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </Container>
                    </Segment>
                

           </div>
           
    )


} export default LandingPage