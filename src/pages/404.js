import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Stranica nije pronadjena" />
      <section className="about-page">
        <div className="section-center">
          <h1>Stranica nije pronadjena.</h1>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
