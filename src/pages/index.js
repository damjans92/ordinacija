import React from "react"
//import { useIntl, Link, FormattedMessage } from "gatsby-plugin-react-intl"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import ContactUs from "../components/ContactUs"
import Seo from "../components/SEO"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

import bgImage from "../assets/images/home-banner.jpg"

export default function Home() {
  //const intl = useIntl()
  gsap.registerPlugin(ScrollTrigger)

  return (
    <Layout>
      <Seo title="Početna" />
      <Hero heroBg={bgImage} homeTitle={"Dobro došli"} />
      <Services />
      <ContactUs />
    </Layout>
  )
}
