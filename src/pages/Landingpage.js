import React from "react"
import { Container, Header } from "semantic-ui-react"
import "../Styles/landingpage.css"
//import img from "../../static/images/black-concrete-wall.jpg"
import { graphql, useStaticQuery } from "gatsby"


import { isMobile } from "react-device-detect";


function LandingPage() {

  const data = useStaticQuery(graphql`
    query MyLandingQuery {
        allMarkdownRemark(filter: {fields: {slug: {glob: "/LandingPage/landing-page/*"}}}) {
          edges {
            node {
              frontmatter {
                title
                SubHeader
                landingPageimage
              }
            }
          }
        }
      }
    `)
  //        backgroundImage: `url(/img/${frontmatter.landingPageimage})`
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = allMarkdownRemark.edges[0].node
  console.log(data)





  if (!isMobile) {
    return (

      <div style={{ width: "100%", }}>
        <Container id="landingpageContent" className="landingpageContentContainer" style={{
          backgroundImage: `url(/img/clothes.jpg)`
        }} >
          <div className="landingpageContainer">
            <Header as="h1" className="landingpageName" >{frontmatter.title}</Header>
            <Header as="h3" className="landingpageSlogan">{frontmatter.SubHeader}</Header>
            <div>
              <div className="landingpage ui card">
                <div className="landingpage card content">
                  <Header className="landingpage description a">Are you a student?</Header>
                  <button className="landingpage ui button a">
                    Browse the inventory
                  </button>
                </div>
                <div className="landingpage card content">
                  <Header className="landingpage description b">Volunteer or Donor?</Header>
                  <button className="landingpage ui button b">
                    Learn More
                </button>
                </div>
              </div>
            </div>

          </div>
        </Container>


      </div >

    )
  } else {

    return (<div style={{ width: "100%" }}>
      <Container id="mobileLandingpageContent" className="=mobileLandingpageContentContainer" style={{
        backgroundImage: `url(/img/clothes.jpg)`
      }} >
        <div className="mobileLandingpageContainer">
          <Header as="h1" className="mobileLandingpageName" >{frontmatter.title}</Header>
          <Header as="h3" className="mobileLandingpageSlogan">{frontmatter.SubHeader}</Header>
          <div style={{ display: 'flex', justifyContent: "center" }}>
            <div className="landingpage ui card mobile">
              <div className="landingpage card content">
                <Header className="landingpage description a mobile">Are you a student?</Header>
                <button className="landingpage ui button a mobile">
                  Browse the inventory
                  </button>
              </div>
              <div className="landingpage card content">
                <Header className="landingpage description b mobile">Volunteer or Donor?</Header>
                <button className="landingpage ui button b mobile">
                  Learn More
                </button>
              </div>
            </div>
          </div>

        </div>
      </Container>


    </div >)





  }


} export default LandingPage