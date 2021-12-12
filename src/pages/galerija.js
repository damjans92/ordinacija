import React from "react"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import Title from "../components/Title"
import Seo from "../components/SEO"

const Projects = () => {
  return (
    <Layout>
      <Seo title="Galerija" />
      <section className="projects-page page-pd">
        <Title title="Galerija" isH1 />
        <div className="section-center" style={{ maxWidth: "1350px" }}>
          <div className="gallery">
            <Gallery />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
