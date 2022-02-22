import React from "react"
import services from "../../constants/services"
import Link from "../../components/Link"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import Seo from "../../components/SEO"

import bannerKonzervativna from "../../assets/images/banners/Konzervativa_banner.jpg"

const KonzervativnaStomatologija = () => {
  return (
    <Layout>
      <Seo title="Konzervativna stomatologija" />
      <Hero heroBg={bannerKonzervativna} title="Konzervativna stomatologija" />
      <section className="category-page">
        <div className="section-center category-breadcrumbs">
          <div>
            <ul className="category-links">
              {services.map((service, index) => {
                if (service.id !== 1) {
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
            <div className="section-title">
              <h2>Ispuni (plombe) i viniri</h2>
              <div className="underline"></div>
            </div>

            <p>
              Klasične kompozitne (bele) plombe su standard u zbrinjavanju
              karijesa ili zameni crnih plombi. Od kompozitnih materijala se
              mogu napraviti i <i>ljuspice (viniri)</i>, kojima se mogu
              preoblikovati prednji zubi, te u nekim slučajevima mogu biti bolji
              izbor od <i>krunica</i>, jer se na taj način čuva više zubnog
              tkiva. Kada se nadoknađuje zub koji je endodontski tretiran
              (izvađen živac), u tom slučaju se plombe mogu ojačati metalnim
              kočićem ili FRC (Fiber Reinforced Composite) kočićem.
            </p>
            <div className="section-title">
              <h2>Indirektne plombe/inleji</h2>
              <div className="underline"></div>
            </div>
            <p>
              Posebno velika destrukcija zuba se u nekim situacijama može
              nadoknaditi bez brušenja zuba, izradom indirektnih plombi (inleja)
              na modelu, koje se potom cementiraju posebnim kompozitnim
              cementima boje zuba, radi maksimalnog estetskog učinka. Indirektne
              plombe ili inleji mogu biti izrađeni i od keramike.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default KonzervativnaStomatologija
