import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="error"/>
      <ErrorMain>
        <section>
          <h1>404</h1>
          <h3>Stronie nie znaleziona</h3>
        </section>
      </ErrorMain>
    </Layout>
  )
}

export const ErrorMain = styled.main`
  text-align: center;
  padding-top: 1rem;
  h1 {
    font-size: 9rem;
  }
`

export default Error
