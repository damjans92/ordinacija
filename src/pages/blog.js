import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"

import Title from "../components/Title"
import Seo from "../components/SEO"

const Blog = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.nodes

  return (
    <Layout>
      {/* <Seo title="Blog" /> */}
      <section className="blog-page">
        <Title title="Blog" />
        <div className="section-center blog-center">
          {blogPosts.map(post => {
            const image = post.featuredImage
            const imagePath = getImage(image)

            return (
              <div className="blog-list-item shadow" key={post.id}>
                <Link to={"/blog/" + post.slug}>
                  <GatsbyImage
                    image={imagePath}
                    className="recipe-img"
                    alt={post.title}
                  />
                </Link>
                <Link to={"/blog/" + post.slug}>
                  <h3>{post.title}</h3>
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        id
        contentful_id
        title
        slug
        featuredImage {
          gatsbyImageData(
            formats: [AUTO, WEBP]
            placeholder: BLURRED
            width: 400
            height: 200
          )
        }
      }
    }
  }
`

export default Blog
