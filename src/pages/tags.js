import React from "react"
import Layout from "../components/Layout"

import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import styled from "styled-components"
import slugify from "slugify"

export default function Tags({ data }) {
  console.log(data)
  const newTags = setupTags(data.allContentfulFitPrzepisy.nodes)
  return (
    <Layout>
      <Main>
        <TagsPage>
          {newTags.map((tag, index) => {
            const [text, value] = tag
                  const slug = slugify(text, { lower: true })
            return (
              <LinkRecipe to={`/tags/${slug}`} key={index}>
                <h5>{text}</h5>
                <p>Ilość przepisów: {value} </p>
              </LinkRecipe>
            )
          })}
        </TagsPage>
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
const TagsPage = styled.section`
  display: grid;
  gap: 2rem;
  padding-bottom: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const LinkRecipe = styled(Link)`
  background: ${({ theme }) => theme.colors.grey700};
  text-align: center;
  color: white;
  border-radius: 0.5rem;
  transition: ${({ theme }) => theme.animations.transition};
  padding: 0.75rem 0;
  &:hover {
    background: ${({ theme }) => theme.colors.primary2};
  }
  h5 {
	  margin-bottom: 0;
	  font-weight: 600;
  }
  p {
	  margin-bottom: 0;
  }
`

export const query = graphql`
  {
    allContentfulFitPrzepisy {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
