import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

body {
  background: #fafbfc;
  color: #333538;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.75;
}
  p {
    margin: 0;
    margin-bottom: 1rem;
    max-width: 40em;
  }

  h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  margin-bottom: 1.38rem;
  font-family: "Inconsolata", monospace;
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  letter-spacing: 1px;
}

h1 {
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

ul {
  padding: 0;
  list-style-type: none;
}
a {
  text-decoration: none;
}
label {
  display: block;
  font-size:.8em;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
}

input,
textarea {
 width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background: #fafbfc;
    border-color: transparent;
    border: 1px solid #dbe0ea;
}
textarea {
  width: 100%;
  height: 7rem;
}
::placeholder {
  color: #adb3bf;
}
form > *:last-child {
  margin-bottom: 0;
}
`

export default GlobalStyle
