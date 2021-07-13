import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/Layout"
import styled from "styled-components"

export default function TagTemplate({ data, pageContext }) {
  const recipes = data.allContentfulFitPrzepisy.nodes
  return (
    <Layout>
      <Main>
        <h2>{pageContext.tag}</h2>
        <div>
          <RecipesList recipes={recipes} />
        </div>
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

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulFitPrzepisy(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        serving
        makro
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
