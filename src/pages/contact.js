import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

export default function Contact() {
  return (
    <Layout>
      <Main>
        <Article>
          <section>
            <h1> Serdecznie zapraszam do kontaktu</h1>

            <p>
              Witam Cię na moim blogu o zdrowym podejściu do życia. W razie
              jakichkolwiek uwag, bądź chęci podjęcia współpracy zachęcam do
              kontaktu{" "}
            </p>
            <p>
              Mój blog jest skierowany przede wszystkim do aktywnych, zdrowo
              odżywiających się osób.
            </p>
          </section>
        </Article>
        <Article>
          <form>
            <div className="form-row">
              <label htmlFor="name">Twoje imie</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Twój email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">wiadomość</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <Button type="submit">Wyślij</Button>
          </form>
        </Article>
      </Main>
    </Layout>
  )
}

export const Main = styled.main`
  width: 90vw;
  margin: 0 auto;
  max-width: 1120px;
  min-height: 60vh;
`

export const Article = styled.article`
  section {
    display: grid;
    gap: 2rem 3rem;
    padding-bottom: 3rem;
    @media (max-width: 992) {
      grid-template-columns: 1f 1fr;
      align-items: center;
    }
  }

  form {
    width: 100%;
    background: white;
    border-radius: 0.25rem;
    padding: 2rem 2.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  .form-row {
    margin-bottom: 1rem;
  }
`
export const Button = styled.button`
  cursor: pointer;
  appearance: none;
  color: white;
  background: #645cff;
  border: none;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: 0.3s ease-in-out all;
  text-transform: capitalize;
  width: 100%;
  &:hover {
    background: #4640b3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`
