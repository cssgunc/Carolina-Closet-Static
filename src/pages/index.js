import React from "react"
import { Link, graphql } from "gatsby"


//import { rhythm } from "../utils/typography"

const BlogIndex = () => {
  // const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  return (
    <div>

      <div style={{ display: "flex" }}>
        <Link to="/Landingpage" style={{ padding: "30px" }}>Landing Page</Link>
        <Link to="/MeetTheTeam" style={{ padding: "30px" }}> Meet the Team</Link>
        <Link to="/AboutUs" style={{ padding: "30px" }}> About Us</Link>
        <Link to="/Homepage" style={{ padding: "30px" }}> HomePage</Link>
      </div>





      {/* {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })} */}
    </div >
  )
}

export default BlogIndex

