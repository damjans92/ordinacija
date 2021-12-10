import React from "react"
import links from "../constants/links"

import Link from "./Link"
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {links.map(link => {
            let hasSubMenu = link.subMenu !== undefined
            return (
              <li key={link.id}>
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
    </aside>
  )
}

export default Sidebar
