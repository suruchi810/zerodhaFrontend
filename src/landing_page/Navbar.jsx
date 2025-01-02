import React from 'react'
import logo from '../assets/images/logo.svg' // Assuming this is the correct path for the logo
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar1 navbar-expand-lg">
      <div className="container">
        <img src={logo} alt="Logo" width={200} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown"></div>

        <form className="d-flex" role="search">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/signup">Signup <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/product">Products<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/pricing">Pricing<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>
        </form>

      </div>
    </nav>


  )
}

export default Navbar
