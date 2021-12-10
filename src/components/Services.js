import React, { useEffect } from "react"

import Link from "./Link"
import Title from "./Title"
import services from "../constants/services"
import { gsap } from "gsap"

const Services = () => {
  useEffect(() => {
    gsap.from(".service", {
      scrollTrigger: ".service",
      opacity: 0,
      duration: 1.25,
      y: -50,
      delay: 0.5,
      stagger: 0.2,
    })
  }, [])
  return (
    <section className="section bg-grey section-services">
      <Title title="Terapijske usluge" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, url, title } = service
          return (
            <div className="service" key={id}>
              <Link text={title} url={url} id={id} icon={icon} isService />
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Services
