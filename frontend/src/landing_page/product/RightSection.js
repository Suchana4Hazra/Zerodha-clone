import React from 'react'

function RightSection({imageUrl, productName, productDescription, learnMore}) {
  return (
     <div className='container p-3'>
      <div className='row'> {/* Add row to make columns work */}
        <div className='col-lg-5 col-sm-12 mt-5' >
          <h2 className='mt-5'>{productName}</h2>
          <p className="fs-6" style={{lineHeight:"1.8"}}>{productDescription}</p>
          <div className="d-flex gap-3 mb-3">
            <a href={learnMore} className="btn btn-outline-primary">Learn More</a>
          </div>
        </div>
        <div className='col-lg-2'></div>
        <div className='col-lg-5 col-sm-12'>
          <img 
            src={imageUrl} 
            alt={`${productName} platform interface`} 
            className="img-fluid" 
          />
        </div>
      </div>
    </div>
  )
}

export default RightSection
