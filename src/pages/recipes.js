import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import AllRecipies from "../components/AllRecipes"
import SEO from "../components/SEO"


export default function Recipes() {
  return (
    <Layout>
      <SEO title="fit przepisy"/>
      <Main>
		  <AllRecipies/>
	  </Main>
    </Layout>
  )
}


const Main = styled.main`
  width: 90vw;
  max-width: 1120px;
  margin: 0 auto;
  min-height: 77vh;
`