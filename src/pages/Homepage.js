import React from "react"
import AdamsNavbar from "../components/AdamsNavbar"
import { Container } from "semantic-ui-react"

function Homepage() {


    return (
        <div style={{ width: "100%" }}>
            <AdamsNavbar></AdamsNavbar>
            <Container>
            <iframe 
                src="https://instagram.com/p/BpKjlo-B4uI/embed"
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                allowTransparency
                width="320"
                height="320"
            ></iframe>
        </Container>
        </div>
        

        

    )


} export default Homepage