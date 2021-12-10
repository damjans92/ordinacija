import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a
                href={link.url}
                key={link.id}
                target="_blank"
                className="social-link"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            )
          })}
        </div>

        <h4>
          Copyright &copy; {new Date().getFullYear()}
          <span>Dr Savkovic Dental Office</span> Sva prava su zadržana.
        </h4>
      </div>
    </footer>
  )
}

export default Footer
