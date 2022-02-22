import React from "react"
import services from "../../constants/services"
import Title from "../../components/Title"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import Seo from "../../components/SEO"

import bannerProtetika from "../../assets/images/banners/protetika_banner.jpg"

const Protetika = () => {
  return (
    <Layout>
      <Seo title="Protetika / hirurgija" />
      <Hero heroBg={bannerProtetika} title="Protetika / hirurgija" />
      <section className="category-page">
        <div className="section-center category-breadcrumbs">
          <div>
            <ul className="category-links">
              {services.map((service, index) => {
                if (service.id !== 3) {
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
            <Title title="Fiksna protetika – mostovi, krunice i implanti" />
            <p>
              Najbrži način nadoknade izgubljenog zuba je svakako izrada mosta,
              a najbrži način estetskog zbrinjavanja zuba (veliki ispuni –
              plombe, promena boje zuba zbog povrede ili nakon starog lečenja)
              je izrada krunica. Danas postoje, pored klasičnih metalokeramičkih
              kruna i mostova, i <i>bezmetalne</i> varijante koje pružaju{" "}
              <i>superiornu estetiku</i> po pristupačnim cenama. Zubni implanti
              su sastavni deo moderne stomatologije i danas postoji širok
              dijapazon pouzdanih svetskih proizvođača, te je moguće nadoknaditi
              zub, uz očuvanje susednih zuba, za novac koji više nije
              nedostižan.
            </p>
            <Title title="Mobilna protetika – zubne proteze" />
            <p>
              U situacijama kada nedostaje veliki broj zuba a fiksni rad ili
              ugradnja implantata nisu mogući, klasične zubne proteze su jedini
              izbor. One se mogu kombinovati sa fiksnim radovima – mostovima i
              krunicama, kada situacija to dozvoljava, što povećava njihovu
              stabilnost i ujedno <i>čuva preostale zube</i>. Totalne zubne
              proteze su terapija izbora kada nedostaju svi zubi i one mogu biti
              izrađene standardnom metodom ili u kombinaciji sa implantima, kada
              je međusobna veza na bazi magneta ili drikera. Ovo omogućava
              skidanje proteze radi higijene, dok istovremeno omogućava čvrstu
              vezu proteza sa vilicama.
            </p>

            <Title title="Hirurške intervencije" />
            <p>
              Manje hirurške intervencije kao što su vađenje zuba, ušivanje rane
              nakon povreda ili drenaža abscesa, se rutinski izvode. Kod
              komplikovanih vađenja i intervencija angažuje se specijalista
              oralne hirurgije.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default Protetika
