import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="support-hero">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h1 className="support-title">Support Portal</h1>
            <p className="text-muted mb-0">Find answers, guides and create a support ticket</p>
          </div>
          <Link to="/my-tickets" className="btn btn-primary">My tickets</Link>
        </div>

        <form className="support-search" onSubmit={(e)=>e.preventDefault()}>
          <div className="input-group">
            <span className="input-group-text bg-white"><i className="fa fa-search" aria-hidden="true"></i></span>
            <input
              type="search"
              className="form-control"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              aria-label="Search support"
            />
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Hero