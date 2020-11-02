import React from "react"
import { Container, Header, Segment } from "semantic-ui-react"

function LandingPage() {


    return (
       
            <div style={{ width: "100%" }}>
                
                    <Segment padded='very' className="contentContainer" style={{ backgroundColor: "grey !important", paddingBottom: "12%" }}>
                        <Container className="pageContainer">
                            <Header as="h1" className="name" style={{ color: "black", marginTop: "15%", fontFamily: "Roboto", fontWeight: "bolder", fontSize: "72px", marginBottom: "0", textAlign: "center" }}>Carolina Closet</Header>
                            <Header as="h3" className="slogan" style={{ textAlign: "center", fontFamily: "Roboto", fontSize: "42px", fontWeight: "lighter", marginTop: "0", color: "black" }}> "Dressing Tar Heels for Success"</Header>

                            <div className="ui centered cards">
                                <div className="ui card" style={{ width: "342px", height: "296px", borderRadius: "38px", margin: "3em 5.5em"}}>
                                    <div className="content" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                        <div className="description a" style={{ fontSize: "36px", textAlign: "center", margin: "1em 1em", lineHeight: "1.5", fontFamily: "Roboto", fontWeight: "bold", color: "#4B9CD3" }}>Are you a Student?</div>
                                        <button className="ui button a" style={{ borderRadius: "30px", padding: "10%", fontSize: "20px", fontFamily: "Roboto", backgroundColor: "#4B9CD3", color: "white" }}>
                                            Browse the inventory
                                        </button>
                                    </div>
                                </div>
                                <div className="ui card" style={{ width: "342px", height: "296px", borderRadius: "38px", margin: "3em 5.5em" }}>
                                    <div className="content" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignContent: "center" }}>
                                        <div className="description b" style={{ fontSize: "36px", textAlign: "center", margin: "1em 1em", lineHeight: "1.5", fontFamily: "Roboto", fontWeight: "bold", color: "#13294B" }}>Volunteer or Donor?</div>
                                        <button className="ui button b" style={{ borderRadius: "30px", padding: "10%", fontSize: "20px", fontFamily: "Roboto", backgroundColor: "#13294B", color: "white" }}>
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