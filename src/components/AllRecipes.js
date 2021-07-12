import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const query = graphql`
  {
    allContentfulFitPrzepisy(sort: { fields: title, order: ASC }) {
      nodes {
        id
        makro
        title
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
export default function AllRecipes() {
  //   const data = useStaticQuery(query)
  //   const recipes = data.allContentfulFitPrzepisy.nodes
  const {
    allContentfulFitPrzepisy: { nodes: recipes },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 2rem 1rem;
  @media (min-width: 992px) {
    grid-template-columns: 200px 1fr;
    gap: 1rem;
  }
`
