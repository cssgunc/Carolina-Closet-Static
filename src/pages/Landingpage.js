import React from "react"
import { Container, Header, Segment } from "semantic-ui-react"
// import "../Styles/landingpage.css"

function LandingPage() {


    return (
       
            <div style={{ width: "100%" }}>
                
                    <Segment padded='very' id="landingpageContent" className="landingpageContentContainer">
                        <Container className="landingpageContainer">
                            <Header as="h1" className="landingpageName">Carolina Closet</Header>
                            <Header as="h3" className="landingpageSlogan"> "Dressing Tar Heels for Success"</Header>

                            <div className="ui centered cards">
                                <div className="landingpage ui card">
                                    <div className="landingpage card content">
                                        <div className="landingpage description a">Are you a Student?</div>
                                        <button className="landingpage ui button a">
                                            Browse the inventory
                                        </button>
                                    </div>
                                </div>
                                <div className="landingpage ui card">
                                    <div className="landingpage card content">
                                        <div className="landingpage description b">Volunteer or Donor?</div>
                                        <button className="landingpage ui button b">
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