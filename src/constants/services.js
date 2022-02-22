import React from "react"
import endodoncija from "../assets/images/endodoncija.svg"
import izbeljivanje from "../assets/images/Izbeljivanje.svg"
import konzervativa from "../assets/images/konzervativa.svg"
import ortodoncija from "../assets/images/ortodoncija.svg"
import pregled from "../assets/images/pregled.svg"
import protetika from "../assets/images/protetika.svg"
import terapijaDZ from "../assets/images/Terapija vilicnog zgloba.svg"

const services = [
  {
    id: 1,
    url: "/terapijske-usluge/konzervativna-stomatologija",
    icon: <img src={konzervativa} alt="konzervativa" />,
    title: <h4>Konzervativna stomatologija</h4>,
    bcTitle: <h4>Konzervativna stomatologija</h4>,
  },
  {
    id: 2,
    url: "/terapijske-usluge/endodoncija",
    icon: <img src={endodoncija} alt="endodoncija" />,
    title: <h4>Endodoncija</h4>,
    bcTitle: <h4>Endodoncija</h4>,
  },
  {
    id: 3,
    url: "/terapijske-usluge/protetika",
    icon: <img src={protetika} alt="protetika" />,
    title: (
      <h4>
        Protetika <br />
        Hirurgija
      </h4>
    ),
    bcTitle: <h4>Protetika Hirurgija</h4>,
  },
  {
    id: 4,
    url: "/terapijske-usluge/izbeljivanje",
    icon: <img src={izbeljivanje} alt="izbeljivanje" />,
    title: <h4>Izbeljivanje</h4>,
    bcTitle: <h4>Izbeljivanje</h4>,
  },
  {
    id: 5,
    url: "/terapijske-usluge/pregled",
    icon: <img src={pregled} alt="pregled" />,
    title: <h4>Pregled</h4>,
    bcTitle: <h4>Pregled</h4>,
  },
  {
    id: 6,
    url: "/terapijske-usluge/ortodoncija",
    icon: <img src={ortodoncija} alt="ortodoncija" />,
    title: <h4>Ortodoncija</h4>,
    bcTitle: <h4>Ortodoncija</h4>,
  },

  {
    id: 7,
    url: "/terapijske-usluge/terapija-donjovilicnog-zgloba",
    icon: <img src={terapijaDZ} alt="terapija donjoviličnog zgloba" />,
    title: (
      <h4 style={{ fontSize: "1.2rem" }}>Terapija donjoviličnog zgloba</h4>
    ),
    bcTitle: <h4>Terapija donjoviličnog zgloba</h4>,
  },
]

export default services
