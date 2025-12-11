import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img src='/media/images/logo.svg' alt="Zerodha Logo"/>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar