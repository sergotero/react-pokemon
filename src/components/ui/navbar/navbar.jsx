import { Link } from "react-router";


function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Pokedex
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;