import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { BsClockHistory, BsPeople } from "react-icons/bs"
import { ImSpoonKnife } from "react-icons/im"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"

export default function RecipeTemplate({ data }) {
  const {
    title,
    cookTime,
    content,
    makro,
    serving,
    description: { description },
    image,
  } = data.contentfulFitPrzepisy
  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Main>
        <div>
          <RecipeHero>
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article>
              <h2>{title}</h2>
              <p>{description}</p>
              <RecipeIcons>
                <article>
                  <BsClockHistory />
                  <h5>Czas przygotowywania:</h5>
                  <p>{cookTime} min</p>
                </article>
                <article>
                  <ImSpoonKnife />
                  <h5>Ilość kcal:</h5>
                  <p>{makro} kcal</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Ilość porcji:</h5>
                  <p>{serving} </p>
                </article>
              </RecipeIcons>
            </article>
          </RecipeHero>
          <RecipeTags>
            Tags:{" "}
            {tags.map((tag, index) => {
              const slug = slugify(tag, { lower: true })
              return (
                <Link to={`/tags/${slug}`} key={index}>
                  {tag}
                </Link>
              )
            })}
          </RecipeTags>
          <RecipeContent>
            <article>
              <h4>Instrukcja</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index}>
                    <InstructionHeader>
                      <p>Krok {index + 1}</p>
                      <div></div>
                    </InstructionHeader>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <SecondArticle>
              <div>
                <h4>Składniki</h4>
                {ingredients.map((item, index) => {
                  return <p key={index}>{item}</p>
                })}
              </div>
              <div>
                <h4>Niezbędne narzędzia</h4>
                {tools.map((item, index) => {
                  return (
                    <p className="tools" key={index}>
                      {item}
                    </p>
                  )
                })}
              </div>
            </SecondArticle>
          </RecipeContent>
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

const RecipeHero = styled.section`
  display: grid;
  gap: 3rem;
  @media (min-width: 992px) {
    grid-template-columns: 4fr 5fr;
    align-items: center;
  }
  .about-img {
    height: 500px;
  }
`
const RecipeContent = styled.section`
  padding: 3rem 0;
  display: grid;
  gap: 2rem 5rem;
  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }
`
const InstructionHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: center;
  p {
    text-transform: uppercase;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary1};
    margin-bottom: 0;
  }
  div {
    height: 1px;
    background: ${({ theme }) => theme.colors.grey500};
  }
`

const SecondArticle = styled.article`
  display: grid;
  row-gap: 2rem;
  p {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
    padding-bottom: 0.75rem;
  }
  .tools {
    color: ${({ theme }) => theme.colors.primary1};
    text-transform: capitalize;
  }
`

const RecipeIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
  text-align: center;
  svg {
    font-size: 1.5rem;
  }
  h5 {
    margin-bottom: 0;
    font-size: 0.85rem;
    font-weight: 600;
  }
  p {
    margin-bottom: 0;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.grey800};
  }
`
const RecipeTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0.7em;
  font-weight: 600;
  a {
    background: ${({ theme }) => theme.colors.primary1};
    border-radius: 0.25rem;
    color: white;
    padding: 0.05rem 0.5rem;
    margin: 0 0.25rem;
    text-transform: capitalize;
  }
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
      serving
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
