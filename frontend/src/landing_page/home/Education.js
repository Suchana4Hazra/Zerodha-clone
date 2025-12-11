import React from 'react'

function Education() {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-lg-5 col-sm-12 mt-5'>
       <img src='media/images/education.svg' alt='educationImage'/>
      </div>
      <div className='col-lg-2 mt-5'>

      </div>
      <div className='col-lg-5 col-sm-12 mt-5'>
         <h4 className='mb-4'>Free and open market education</h4>
         <div className='mb-5'>
           <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
           <a href='javascript:void(0);' style={{textDecoration:"none"}}>Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
         </div>
         <div className='mb-5'>
          <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='javascript:void(0);' style={{textDecoration:"none"}} >TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Education
