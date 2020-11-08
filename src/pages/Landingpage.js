import React from "react"
import { Container, Header } from "semantic-ui-react"
import "../Styles/landingpage.css"
//import img from "../../static/images/black-concrete-wall.jpg"
import { graphql, useStaticQuery } from "gatsby"

function LandingPage() {

    const data = useStaticQuery(graphql`
    query MyLandingQuery {
        allMarkdownRemark(filter: {fields: {slug: {eq: "/LandingPage/landing-page/"}}}) {
          edges {
            node {
              frontmatter {
                title
                SubHeader
                image
              }
            }
          }
        }
      }
    `)
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter } = allMarkdownRemark.edges[0].node

    return (
       
            <div style={{ width: "100%" }}>
                    <Container id="landingpageContent" className="landingpageContentContainer" style={{ backgroundImage: `url(${frontmatter.image})`}}>
                        <Container className="landingpageContainer">
                            <Header as="h1" className="landingpageName">{frontmatter.title}</Header>
                            <Header as="h3" className="landingpageSlogan">{frontmatter.SubHeader}</Header>

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
            </Container>


        </div>

    )


} export default LandingPage