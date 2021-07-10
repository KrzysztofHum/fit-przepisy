import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"
import GlobalStyle from "../theme/globalStyles"


export default function Layout({ children }) {
  return (
    <>
<GlobalStyle/>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
