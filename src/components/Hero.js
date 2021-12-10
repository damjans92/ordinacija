import React, { useEffect } from "react"
import gsap from "gsap"

const Hero = ({ heroBg, title, homeTitle }) => {
  useEffect(() => {
    gsap.from("h1", { opacity: 0, duration: 2, x: 50, ease: "power2.out" })
  }, [])

  return (
    <header className="hero" style={{ backgroundImage: "url(" + heroBg + ")" }}>
      {title && <h1 className="category-title">{title}</h1>}
      {homeTitle && <h1 className="home-title">{homeTitle}</h1>}
    </header>
  )
}

export default Hero
