import React from "react"
import Title from "./Title"

import imgZakazivanje from "../assets/images/zakazivanje_termina.svg"

const ContactUs = () => {
  return (
    <section className="section">
      <Title title="Kontakt" />
      <div className="contact-us-center">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.6911350433247!2d20.497611681968248!3d44.774319826168764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71d1d92fc845%3A0xebf4ebf097ca252f!2sDr%20Savkovi%C4%87%20Dental%20Office!5e0!3m2!1sen!2srs!4v1637866099433!5m2!1sen!2srs"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Dr Savkovic dental office"
          ></iframe>
        </div>
        <article className="contact-us-info">
          <h3>Zakazivanje termina</h3>

          <div className="info-box">
            <img
              src={imgZakazivanje}
              alt="Zakazivanje termina"
              style={{ width: "200px", marginLeft: "-20px" }}
            />
            <div className="">
              <span>
                <strong>PON - PET</strong>: 11h - 19h
              </span>
              <br />
              <span>
                <strong>SUB i NED</strong> po pozivu
              </span>
              <br />
              <br />
              <span>
                <strong>Email</strong>: info@drsavkovic.rs
              </span>
              <br />
              <span>
                <strong>Telefon</strong>:{" "}
                <a href="tel:+381691986900">069/19 869 00</a>
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ContactUs
