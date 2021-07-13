import React from "react"
import styled from "styled-components"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

export default function TagsList({ recipes }) {
  const newTags = setupTags(recipes)

  return (
    <Wrapper>
      <h4>Przepisy:</h4>
      <TagList>
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </TagList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  order: 1;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    order: 0;
  }
  h4 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`

const TagList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  a {
    text-transform: capitalize;
    display: block;
    color: ${({ theme }) => theme.colors.grey800};
    transition: ${({ theme }) => theme.animations.transition};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary2};
  }
`
