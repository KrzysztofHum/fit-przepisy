import React from "react"
import styled from "styled-components"

function Footer() {
  return (
    <Footerr>
      <div>
        <p>
          FitPrzepisy.pl to autorski serwis z szybkimi w wykonaniu, a zarazem
          smacznymi przepisami. Chcę dzielić się z innymi moją pasją do zdrowego
          gotowania, oraz sprawić, że każdy będzie mógł odnaleźć w sobie
          pierwiastek kulinarnej fascynacji.
        </p>
      </div>
      <div>
        <p>
          &copy; {new Date().getFullYear()} <span>Fit przepisy</span> Krzysztof
          Humienny, Wszelkie prawa zastrzeżone{" "}
        </p>
      </div>
    </Footerr>
  )
}

export const Footerr = styled.footer`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222;
  color: #fff;
`

export default Footer
