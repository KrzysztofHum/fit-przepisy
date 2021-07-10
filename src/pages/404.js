import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const Error = () => {
  return (
    <Layout>
      <Main>
        <section>
          <h1>404</h1>
          <h3>Stronie nie znaleziona</h3>
        </section>
      </Main>
    </Layout>
  )
}

export const Main = styled.main`
  text-align: center;
  padding-top: 1rem;
  h1 {
    font-size: 9rem;
  }
`

export default Error
