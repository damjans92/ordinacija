import React from "react"
import Title from "../components/Title"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

import imgOsnivac from "../assets/images/osnivac.jpg"

const About = () => {
  return (
    <Layout>
      <Seo title="O osnivaču" />
      <section className="about-page">
        <Title title="O osnivaču" isH1 />
        <div className="section-center about-center">
          <img src={imgOsnivac} alt="Osnivac" className="about-img" />
          <article className="about-text">
            <p>
              Diplomirao na Stomatološkom fakultetu Univerziteta u Beogradu
              2013. godine, a 2014. nakon završenog staža otpočinje rad u
              privatnoj praksi. Usavršava se u oblasti endodontologije,
              konzervativne stomatologije i stomatološke protetike. Paralelno sa
              radom učestvuje u sertifikovanim kursevima domaćih i stranih
              predavača iz pomenutih oblasti, kao i iz oblasti terapije
              poremećaja u radu donjoviličnog zgloba i estetske medicine uz
              primenu hijaluronskih preparata. Tokom studija otpočinje saradnju
              sa Dijabetološkim savezom Srbije i učestvuje na kongresima u
              Berlinu i Barseloni kao stručni saradnik, gde stiče dodatna znanja
              iz oblasti dijabetologije u stomatologiji. Divnu saradnju sa
              kolegama, domaćim i inostranim pacijentima koristi kao podstrek za
              osnivanje sopstvene private prakse.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
