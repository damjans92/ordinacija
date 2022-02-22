import React from "react"
import services from "../../constants/services"
import Link from "../../components/Link"
import Title from "../../components/Title"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import Seo from "../../components/SEO"

import bannerPregled from "../../assets/images/banners/Pregled_banner.jpg"

const Pregled = () => {
  return (
    <Layout>
      <Seo title="Stomatološki pregled" />
      <Hero heroBg={bannerPregled} title="Stomatološki pregled" />
      <section className="category-page">
        <div className="section-center category-breadcrumbs">
          <div>
            <ul className="category-links">
              {services.map((service, index) => {
                if (service.id !== 5) {
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
            <Title title="Stomatološki pregled" />
            <p>
              Prvi korak ka upoznavanju sa pacijentom je pregled, pri kome se
              registruje stanje u ustima pacijenta i pravi plan za dalju
              terapiju, u skladu sa željama pacijenta i pravilima struke.
              Savetuje se rutinski pregled na svakih 6 meseci i kod pacijenata
              koji imaju naizgled zdrave zube, jer se neke promene mogu videti{" "}
              <i>samo stručnim pregledom</i>.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Pregled
