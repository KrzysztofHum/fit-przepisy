import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

export default function About() {
  return (
    <Layout>
      <Main>
        <Section>
          <article>
            <h2>
              {" "}
              Lubie gotować i jeść, na blogu dzielę sie swoimi pomysłami na
              zdrowe posiłki
            </h2>
            <p>
              Dzieki samodzielnego przygoptowywaniu posiłków wiesz co jesz.
              Dodatkowo takie potrawy są duże smaczniejsze oraz pobudzają
              kreatywność
            </p>
            <p>
              Gotowanie pogrubi twój portfel, nawet nie zdajesz sobie sprawy,
              ile można zaoszczedzic poprzez samodzielne gotowanie
            </p>
            <ContactLink to="/contact">Kontakt</ContactLink>
          </article>
          <StaticImage
            src="../assets/images/cooking.jpg"
            alt="Fit przepisy"
            placeholder="blurred"
            className="about-img"
          ></StaticImage>
        </Section>
        <section>
          <h5>Spójrz na to !</h5>
          <RecipesList/>
        </section>

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
const Section = styled.section`
  display: grid;
  gap: 2rem 4rem;
  padding-bottom: 3rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    /* height: 400px; */
    .about-img {
      border-radius: 0.25rem;
      height: 500px;
      @media (min-width: 992px) {
        height: 100%;
      }
    }
  }
`
const ContactLink = styled(Link)`
  cursor: pointer;
  appearance: none;
  color: white;
  background: ${({ theme }) => theme.colors.primary1};
  border: none;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  transition: ${({ theme }) => theme.animations.transition};
  text-transform: capitalize;
  width: 100%;
  &:hover {
    background: ${({ theme }) => theme.colors.primary2};
    box-shadow: ${({ theme }) => theme.shadows.shadow2};
  }
`


export const query = graphql`
  {
    allContentfulFitPrzepisy(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        makro
        title
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        id
      }
    }
  }
`
