import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const navbarFixed = () => {
    if (window.scrollY >= 88) {
      setIsFixed(true)
    } else {
      setIsFixed(false)
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", navbarFixed)
    }
    return () => window.removeEventListener("scroll", navbarFixed)
  }, [])
  return (
    <>
      <Navbar isFixed={isFixed} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main style={isFixed ? { paddingTop: "50px" } : {}}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
