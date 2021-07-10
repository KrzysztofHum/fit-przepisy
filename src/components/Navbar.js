import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
			<Link to="/">Home</Link>
		</li>
        <li>
			<Link to="/about">O Mnie</Link>
		</li>
        <li>
			<Link to="/contact">Kontakt</Link>
		</li>
        <li>
			<Link to="/tags">Tagi</Link>
		</li>
        <li>
			<Link to="/recipes">Przepisy</Link>
		</li>
      </ul>
    </nav>
  )
}
