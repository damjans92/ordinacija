import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import services from "../../constants/services"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import Seo from "../../components/SEO"

import banner from "../../assets/images/banners/Ortodoncija_banner.jpg"

const Ortodoncija = () => {
  return (
    <Layout>
      <Seo title="Ortodoncija / providne folije" />
      <Hero heroBg={banner} title="Ortodoncija / providne folije" />
      <section className="category-page">
        <div className="section-center category-breadcrumbs">
          <div>
            <ul className="category-links">
              {services.map((service, index) => {
                if (service.id !== 6) {
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
            <div className="section-title">
              <h2>Fiksna proteza</h2>
              <div className="underline"></div>
            </div>

            <p>
              Klasična fiksna proteza je postala trend među mlađom populacijom
              ali ni stariji pacijenti nemaju više otklon prema ortodotskoj
              terapiji. U slučajevima većih pomeranja i problema sa zagrižajem,
              kao i u sklopu pripreme za protetski rad, fiksni aparat je pravi
              izbor.
            </p>
            <div className="section-title">
              <h2>Providne folije</h2>
              <div className="underline"></div>
            </div>
            <div className="category-text-image">
              <div className="category-image-wrapper right">
                <StaticImage
                  src="../../assets/images/folije_za_ispravljanje.jpg"
                  alt="folije za ispravljanje"
                />
              </div>
              <p>
                Folije za pomeranje zuba su postale sastavni deo stomatološke
                terapije. Njihov estetski učinak je neprevaziđen, budući da su
                faktički neprimetne prilikom nošenja. Postoji nekoliko
                digitalnih sistema koji se koriste, a najpopularniji među njima
                je Invisalign® sistem koji koristi digitalni model na osnovu
                koga softver planira terapiju. Ograničenja digitalnih sistema se
                ogledaju u tome što je potreban <i>veliki broj</i> skupih folija
                za relativno <i>mala pomeranja</i>. Analogna, „hibridna“ tehnika
                izrade folija podrazumeva uzimanje nekoliko otisaka prilikom
                terapije, kako bi se pomeranje precizno pratilo. Tip folije koji
                se koristi u hibridnoj tehnici se menja u zavisnosti od vrste
                pomeranja, a <i>broj folija</i> koje se koriste je{" "}
                <i>znatno manji</i> nego kod digitalnih metoda, zbog bržih
                pomeranja i preciznije izrade.
              </p>
            </div>
            <p>
              Prednosti folija u odnosu na fiksni aparat su: skidanje zbog
              održavanja <i>higijene, udobnost</i> prilikom nošenja, maksimalna{" "}
              <i>estetika</i> i mogućnost izrade terapije{" "}
              <i>bez dolazaka na kontrolu</i> u slučaju kada pacijent ne živi u
              zemlji ili u istom gradu.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Ortodoncija
