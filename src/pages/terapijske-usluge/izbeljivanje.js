import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import services from "../../constants/services"
import Link from "../../components/Link"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import Seo from "../../components/SEO"

import banner from "../../assets/images/banners/Izbeljivanje_banner.jpg"

const Izbeljivanje = () => {
  return (
    <Layout>
      <Seo title="Izbeljivanje zuba" />
      <Hero heroBg={banner} title="Izbeljivanje zuba" />
      <section className="category-page">
        <div className="section-center category-breadcrumbs">
          <div>
            <ul className="category-links">
              {services.map((service, index) => {
                if (service.id !== 4) {
                  return (
                    <li key={index}>
                      <Link
                        text={service.bcTitle}
                        url={service.url}
                        classes="category-bc-link"
                      />
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
        <div className="section-center category-center">
          <article className="about-text">
            <p>
              Izbeljivanje zuba može biti izvedeno u kućnim ili ordinacijskim
              uslovima. Kućno izbeljivanje se vrši izradom individualnih folija
              koje u sebi imaju rezervoare u koje se stavlja gel. Folije se nose
              nekoliko sati dnevno ili tokom noći, u zavisnosti od jačine gela.
              Ordinacijsko izbeljivanje se vrši u kratkom roku – 30 do 45
              minuta, uz primenu posebnih lampi i gelova visoke koncentracije.
              Ova metoda <i>ne oštećuje zube</i>, već ih hemijski dubinski
              čisti, čime se postiže belina.
            </p>
            <StaticImage
              src="../../assets/images/Izbeljivanje2.jpg"
              alt="izbeljivanje"
            />
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Izbeljivanje
