import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className='row text-center mt-5 mb-5'>
        <h2>Charges</h2>
        <p className='text-muted fs-4'>List of all charges and taxes</p>
      </div>
      
      <div className='row justify-content-between align-items-start g-5 mt-5 mb-5'>
        <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
          <img 
            src='media/images/pricing0.svg' 
            alt='Free equity delivery' 
            className='mb-4'
            style={{width: "200px"}}
          />
          <h3 className='mb-3'>Free equity delivery</h3>
          <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
          <img 
            src='media/images/intradayTrades.svg' 
            alt='Intraday and F&O trades' 
            className='mb-4'
            style={{width: "200px"}}
          />
          <h3 className='mb-3'>Intraday and F&O trades</h3>
          <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
          <img 
            src='media/images/pricing0.svg' 
            alt='Free direct MF' 
            className='mb-4'
            style={{width: "200px"}}
          />
          <h3 className='mb-3'>Free direct MF</h3>
          <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero