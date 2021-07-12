import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/FitPrzepisy.svg"

export default function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <Nav>
      <NavCenter>
        <NavHeader>
          <Link to="/">
            <img src={logo} alt="fit przepisy" />
          </Link>
          <Button onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </Button>
        </NavHeader>
        <NavLinks show={show}>
          <NavLink
            to="/"
            activeStyle={{ color: "#94cc39" }}
            onClick={() => setShow(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            activeStyle={{ color: "#94cc39" }}
            onClick={() => setShow(false)}
          >
            Przepisy
          </NavLink>
          <NavLink
            to="/tags"
            activeStyle={{ color: "#94cc39" }}
            onClick={() => setShow(false)}
          >
            Tagi
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{ color: "#94cc39" }}
            onClick={() => setShow(false)}
          >
            o Mnie
          </NavLink>
          <Contact>
            <ContactLink to="/contact" onClick={() => setShow(false)}>
              Kontakt
            </ContactLink>
          </Contact>
        </NavLinks>
      </NavCenter>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 992px) {
    height: 6rem;
  }
`
const NavCenter = styled.div`
  width: 90vw;
  max-width: 1120px;
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
  }
`
const NavHeader = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 992px) {
    padding: 0;
    margin-right: 2rem;
    height: auto;
  }
  img {
    width: 200px;
    margin-left: -6px;
    margin-bottom: -9px;
  }
`
const NavLinks = styled.div`
  height: ${props => (props.show ? "383px" : "0")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.animations.transition};
  @media (min-width: 992px) {
    height: auto !important;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-width: 100px;
  }
`
const Button = styled.button`
  padding: 0.15rem 0.75rem;
  width: 3rem;
  @media (min-width: 992px) {
    display: none;
  }
  svg {
    font-size: 1.5rem;
  }
`
const NavLink = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1.5rem;
  text-transform: capitalize;
  color: #141516;
  letter-spacing: 1px;
  padding: 1rem 0;
  border-top: 1px solid #cbd3e1;
  transition: ${({ theme }) => theme.animations.transition};
  @media (min-width: 992px) {
    padding: 0;
    border-top: none;
    margin-right: 1rem;
    font-size: 1rem;
    min-width: 5rem;
  }
  &.active-link {
    color: #645cff;
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
const Contact = styled.div`
  text-align: center;
  padding: 0;
  border-top: none;
  margin-right: 1rem;
  font-size: 1rem;
  width: 100%;
  justify-content: flex-end;
  margin-right: 0;
  @media (min-width: 992px) {
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-right: 0;
  }
`
