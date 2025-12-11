import React from 'react'

function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className='container'>
      <div className='row'> {/* Add row to make columns work */}
        <div className='col-lg-5 col-sm-12'>
          <img 
            src={imageUrl} 
            alt={`${productName} platform interface`} 
            className="img-fluid" 
          />
        </div>
        <div className='col-lg-2'></div>
        <div className='col-lg-5 col-sm-12 mt-5' >
          <h2>{productName}</h2>
          <p className="fs-6" style={{lineHeight:"1.8"}}>{productDescription}</p>
          <div className="d-flex gap-3 mb-3">
            <a href={tryDemo} className="btn btn-primary">Try Demo</a>
            <a href={learnMore} className="btn btn-outline-primary">Learn More</a>
          </div>
          <div className="d-flex gap-3">
            <a href={googlePlay}>
              <img src='media/images/googlePlayBadge.svg' alt="Get it on Google Play" />
            </a>
            <a href={appStore}>
              <img src='media/images/appstoreBadge.svg' alt="Download on App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection