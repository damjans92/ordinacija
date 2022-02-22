import React from "react"
import services from "../../constants/services"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import Seo from "../../components/SEO"

import banner from "../../assets/images/banners/Pregled_banner.jpg"

const TerapijaDonjovilicnogZgloba = () => {
  return (
    <Layout>
      <Seo title="Terapija donjoviličnog zgloba" />
      <Hero heroBg={banner} title="Terapija donjoviličnog zgloba" />
      <section className="category-page">
        <div className="section-center category-breadcrumbs">
          <div>
            <ul className="category-links">
              {services.map((service, index) => {
                if (service.id !== 7) {
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
            <p>
              Kod velikog broja pacijenata se pri rutinskom pregledu detektuju
              različiti problemi sa donjoviličnim zglobom. Oni se ogledaju u
              širokom dijapazonu poremećaja, počevši od{" "}
              <i>krckanja, pucanja, preskakanja</i> u regiji ispred ušne
              školjke, do <i>bolova i glavobolja</i>. Poseban problem imaju
              pacijenti sa poremećajem u zagrižaju, kao i oni koji imaju
              oštećenje bočnih zuba koje nastaje usled prirodnog trošenja zubnog
              tkiva ili kao posledica karijesa. Kod uznapredovalog poremećaja
              funkcije javlja se i otežano otvaranje ili nemogućnost otvaranja
              usta.
            </p>
            <p>
              Terapija najvećeg broja poremećaja se može izvesti vežbama, uz
              izradu specijalnih <i>splinotva</i> ili držača položaja donje
              vilice. Nakon nekoliko dana osećaju se prva olakšanja, a nakon
              mesec dana se uglavnom povlači najveći broj simptoma. Izrada
              splintova je visoko precizan proces, budući da se svakom pacijentu
              pruža individualna terapija. Topao savet pacijentima je da obave
              pregled u slučaju glavobolja (posebno jutarnjih), kao i bolova u
              ramenima, vratu i lopaticama, jer uzrok bolova može biti porekla
              donjoviličnog zgloba.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default TerapijaDonjovilicnogZgloba
