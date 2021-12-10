import React from "react"
import Title from "../components/Title"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <Seo title="O ordinaciji" />
      <section className="about-page">
        <Title title="O ordinaciji" isH1 />
        <div className="section-center about-center">
          <img src="/Logo.svg" alt="hero img" className="about-img-svg" />
          <article className="about-text">
            <p>
              Ordinaciju ”Dr Savković Dental Office” osnovao sam 2021. godine
              nakon osmogodišnjeg rada u privatnoj praksi. Ideja kojom se vodim
              je da približim stomatologiju i zubnog lekara svakodnevnom životu.
              Neprijatnost od same pomisli zakazivanja termina kod stomatologa
              je nešto što se može i mora promeniti, a ta obaveza je na lekaru.
              Iskustvo sa inostranim pacijentima me je podstaklo da odnos prema
              profesiji i pacijentu negujem u skladu sa svetskim standardima i
              da dodatnu pažnju i energiju usmerim ka otklanjanju straha kod
              pacijenata i na taj način omogućim da njhov boravak kod
              stomatologa bude što opušteniji. Iskreno se radujem Vašoj poseti.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
