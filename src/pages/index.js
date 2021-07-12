import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Gallery from "../components/Gallery"

export default function Home() {
  return (
    <Layout>
      <Main>
        <Header>
          <StaticImage
            src="../assets/images/cooking.jpg"
            alt="fit przepisy"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <HeroContainer>
            <div>
              <h1>Fit przepisy</h1>
              <h4>Spróbuj, a nie pożałujesz</h4>
            </div>
          </HeroContainer>
        </Header>
          <Gallery></Gallery>
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

const Header = styled.header`
  height: 40vh;
  position: relative;
  margin-bottom: 2rem;
  .hero-img {
    height: 100%;
    border-radius: 0.25rem;
  }
`
const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0.25rem;
  div {
    color: white;
    text-align: center;
  }
`
