import React from "react"
import logo from "../../static/Logo.svg"
import pageLinks from "../constants/links"
import { FaAlignRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
//import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Link from "./Link"

const Navbar = ({ toggleSidebar, isFixed }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="contact-info-box top-left">
          <span className="icon-wrap">
            <a href="tel:+381637241472" rel="noreferrer">
              <FaPhoneAlt style={{ fontSize: "1.5rem" }} />
            </a>
          </span>
          <div className="info-desc">
            <p>
              <a href="tel:+381637241472" rel="noreferrer">
                063/72 414 72
              </a>
            </p>
          </div>
        </div>
        <div className="nav-header">
          <AniLink cover bg="#2caeba" duration={0.9} to="/" className="logo">
            <img src={logo} alt="Dr Savkovic dental office" />
          </AniLink>
        </div>
        <div className="nav-button">
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="contact-info-box ml-auto top-right">
          <span className="icon-wrap">
            <a
              target="_blank"
              href="https://goo.gl/maps/rV71VuZKHquzSyaPA"
              rel="noreferrer"
            >
              <FaMapMarkerAlt style={{ fontSize: "1.5rem" }} />
            </a>
          </span>
          <div className="info-desc">
            <p>
              <a
                target="_blank"
                href="https://goo.gl/maps/rV71VuZKHquzSyaPA"
                rel="noreferrer"
              >
                Lokacija
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          isFixed ? "nav-links-wrap is-fixed shadow" : "nav-links-wrap"
        }
      >
        <div className="nav-links">
          <ul>
            {pageLinks.map(link => {
              let hasSubMenu = link.subMenu !== undefined

              return (
                <li className={hasSubMenu ? "dropdown" : ""} key={link.id}>
                  <Link text={link.text} url={link.url} />

                  {hasSubMenu && (
                    <ul className="sub-nav">
                      {link.subMenu.map((subLink, i) => {
                        return (
                          <li key={i}>
                            <Link text={subLink.text} url={subLink.url} />
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
