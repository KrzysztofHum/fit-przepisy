import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/main.css"
import GlobalStyle from "../theme/globalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme/theme"

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}
