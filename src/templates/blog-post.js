import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"

import Layout from "../components/Layout"

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,

    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { gatsbyImageData } = node.data.target
      const { title } = node.data.target
      console.log(node.data)
      return <GatsbyImage image={gatsbyImageData} alt={title} />
    },
  },
}

const BlogPost = ({ data }) => {
  const { title, date } = data.contentfulBlogPost
  const dateFormatted = new Date(date).toLocaleDateString()

  const { content } = data.contentfulBlogPost

  //console.log(data)
  return (
    <Layout>
      <section className="post-page page-pd">
        <section className="section-center">
          <h1>{title}</h1>
          <p>Datum: {dateFormatted}</p>
          {content && renderRichText(content, options)}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      date
      createdAt
      slug
      title
      contentful_id
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
            title
          }
        }
      }
    }
  }
`

export default BlogPost
