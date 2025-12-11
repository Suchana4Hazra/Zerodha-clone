import React from 'react'

function Universe() {
  return (
    <div className='container universe-section'>
      <div className='row text-center mb-5 mt-5'>
        <h2 className='mb-3'>The Zerodha Universe</h2>
        <p className='text-muted'>
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>
      
      <div className='row justify-content-center align-items-center mb-5'>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4 text-center'>
          <img 
            src='media/images/zerodhaFundhouse.png' 
            alt='Zerodha Fundhouse'
            className='universe-logo' style={{width:"40%"}}
          />
          <p></p>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4 text-center'>
          <img 
            src='media/images/sensibullLogo.svg' 
            alt='Sensibull'
            className='universe-logo' style={{width:"50%"}}
          />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4 text-center'>
          <img 
            src='media/images/streakLogo.png' 
            alt='Streak' style={{width:"50%"}}
            className='universe-logo'
          />
        </div>
      </div>
      
      <div className='row justify-content-center align-items-center'>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4 text-center'>
          <img 
            src='media/images/smallcaseLogo.png' 
            alt='Smallcase'
            className='universe-logo' style={{width:"50%"}}
          />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4 text-center'>
          <img 
            src='media/images/goldenpiLogo.png' 
            alt='Goldenpi'
            className='universe-logo' style={{width:"50%"}}
          />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4 text-center'>
          <img 
            src='media/images/dittoLogo.png' 
            alt='Ditto'
            className='universe-logo' style={{width:"30%"}}
          />
        </div>
      </div>
    </div>
  )
}

export default Universe