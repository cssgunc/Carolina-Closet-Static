
//this import is needed at the top of every react file
import React from "react"
//this import imports the AdamsNavbar component to be used in this file
import AdamsNavbar from "../components/AdamsNavbar"

function MeetTheTeam() {

    //the return method renders the html inside whenever this component is visible. ie you navigate to this page
    //this  is all done by react/gatsby by default
    return (
        <div>

            {/* Adams navabar is simply a component file meaning it is responsible for rendering adams navbar and 
                is responsible for any logic needed in the navbar.
            */}
            <AdamsNavbar />
            <h1> Meet the team</h1>


        </div>

    )


} export default MeetTheTeam
//export default allows other files to import this component