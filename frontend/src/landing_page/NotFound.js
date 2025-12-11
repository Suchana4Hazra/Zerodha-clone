import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-card container text-center">
        <h1 className="display-1">404</h1>
        <h2 className="mb-3">Page not found</h2>
        <p className="lead text-muted mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div>
          <Link to="/" className="btn btn-primary me-2">Go to Homepage</Link>
          <Link to="/support" className="btn btn-outline-secondary">Contact Support</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
