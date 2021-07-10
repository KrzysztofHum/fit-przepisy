import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/FitPrzepisy.svg"

export default function Navbar() {
  return (
    <Nav>
      <NavCenter>
        <NavHeader>
          <Link to="/">
            <img src={logo} alt="fit przepisy" />
          </Link>
          <Button>
            <FiAlignJustify />
          </Button>
        </NavHeader>
        <NavLinks>
          <NavLink to="/" activeStyle={{ color: "#94cc39" }}>
            Home
          </NavLink>
          <NavLink to="/recipes" activeStyle={{ color: "#94cc39" }}>
            Przepisy
          </NavLink>
          <NavLink to="/tags" activeStyle={{ color: "#94cc39" }}>
            Tagi
          </NavLink>
          <NavLink to="/about" activeStyle={{ color: "#94cc39" }}>
            O Mnie
          </NavLink>
          <Contact>
            <ContactLink to="/contact">Kontakt</ContactLink>
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
`
const NavCenter = styled.div`
  width: 90vw;
  max-width: 1120px;
`
const NavHeader = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 200px;
    margin-left: -6px;
    margin-bottom: -9px;
  }
`
const NavLinks = styled.div`
  height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease-in-out all;
  height: 23.9375rem;
`
const Button = styled.button`
  /* display: none; */
  padding: 0.15rem 0.75rem;
  background: #94cc39;
  width: 3rem;
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
  transition: var(--transition);
  &.active-link {
    color: #645cff;
  }
`

const ContactLink = styled(Link)`

  cursor: pointer;
  appearance: none;
  color: white;
  background: #94cc39;
  border: none;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: 0.3s ease-in-out all;
  text-transform: capitalize;
  width: 100%;
  &:hover {
    background: #689c13;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`
const Contact = styled.div`
  padding: 0;
  border-top: none;
  margin-right: 1rem;
  font-size: 1rem;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0;
`
