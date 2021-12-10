import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      gallery: allContentfulGalleryImage {
        nodes {
          id
          title
          image {
            gatsbyImageData(
              width: 1280
              height: 720
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
          order
        }
      }
    }
  `)

  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <div className="gallery-container">
          {data.gallery.nodes
            .sort((a, b) => a.order - b.order)
            .map(node => {
              const image = node.image.gatsbyImageData
              return (
                <div className="gallery-item" key={node.id}>
                  <GatsbyImage image={image} alt={node.title} />
                </div>
              )
            })}
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  )
}

export default Gallery
