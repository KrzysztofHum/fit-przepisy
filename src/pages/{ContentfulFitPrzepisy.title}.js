import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { BsClockHistory } from "react-icons/bs"
import ImSpoonKnife from "react-icons/im"

export default function RecipeTemplate({ data }) {
  const {
    title,
    cookTime,
    content,
    makro,
    description: { description },
    image,
  } = data.contentfulFitPrzepisy
  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content
  return (
    <Main>
		<div>
			<h2>{title}</h2>
		</div>

	</Main>
  )
}

const Main = styled.main`
  width: 90vw;
  max-width: 1120px;
  margin: 0 auto;
  min-height: 77vh;
`


export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulFitPrzepisy(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tools
        tags
      }
      description {
        description
      }
      makro
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
