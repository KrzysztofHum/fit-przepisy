import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"
import styled from "styled-components"

export default function RecipesList({ recipes = [] }) {
  return (
    <Wrapper>
      {recipes.map(recipe => {
        const { id, title, image, cookTime, makro } = recipe
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })

        return (
          <RecipeLink key={id} to={`/${slug}`}>
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Czas: {cookTime}min | Kcal: {makro}
            </p>
          </RecipeLink>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 2rem 1rem;
  padding-bottom: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const RecipeLink = styled(Link)`
  display: block;
  .recipe-img {
    height: 15rem;
    border-radius: 0.25rem;
    @media (min-width: 576px) {
      height: 15rem;
    }
    @media (min-width: 992px) {
      height: 15rem;
      width: 25rem;
    }
  }
  h5 {
    margin-bottom: 0;
    margin-top: 0.25rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.grey1000};
    font-weight: 600;
    @media (min-width: 1200px) {
      font-size: 1.15rem;
    }
  }
  p {
    margin-bottom: 0;
    margin-top: 0.5rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.grey800};
    @media (min-width: 992px) {
      font-size: 0.85rem;
    }
  }
`
