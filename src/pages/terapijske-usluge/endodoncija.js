import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import services from "../../constants/services"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import Seo from "../../components/SEO"

import banner from "../../assets/images/banners/Endodoncija_banner.jpg"

const Endodoncija = () => {
  return (
    <Layout>
      <Seo title="Endodoncija / lečenje zuba" />
      <Hero heroBg={banner} title="Endodoncija / lečenje zuba" />
      <section className="category-page">
        <div className="section-center category-breadcrumbs">
          <div>
            <ul className="category-links">
              {services.map((service, index) => {
                if (service.id !== 2) {
                  return (
                    <li key={index}>
                      <a href={service.url} className="category-bc-link">
                        {service.bcTitle}
                      </a>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
        <div className="section-center category-center">
          <article className="about-text">
            <div className="category-text-image">
              <div
                style={{ margin: "0.5rem 3rem 1rem 1rem" }}
                className="category-image-wrapper left"
              >
                <StaticImage
                  src="../../assets/images/Infekcija zuba.jpg"
                  alt=""
                />
                <StaticImage
                  src="../../assets/images/Losa endodoncija.jpg"
                  alt=""
                />
                <StaticImage
                  src="../../assets/images/Dobra endodoncija.jpg"
                  alt=""
                />
              </div>
              <p>
                Nakon karijesa, drugi najčešći razlog javljanja stomatologu je
                upala zubnog živca. Ona može biti posledica karijesa ili
                povrede. Ako upala prođe neopaženo ili se zanemari, prelazi u
                gangrenu, i tada se mogu javiti jak bol, otok i/ili temperatura.
                U tom slučaju terapija je duža ali moguća. Dalje, u sklopu
                pripreme za protetske radove, savetuje se endodontska terapija u
                određenim slučajevima, prema proceni doktora. Savremenim
                terapijskim metodama, instrumentima i materijalima, omogućen je
                jako visok procenat uspeha u terapiji lečenja zuba –{" "}
                <i>preko 97%</i>.
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Endodoncija
