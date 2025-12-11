import React from 'react'

function Team() {
  return (
    <div>
      <div className='container team'>
        <div className='row text-center mt-5'>
          <h3 className='mb-5'>People</h3>
        </div>
        <div className='row'>
          <div className='col-lg-6 col-sm-12 p-3 text-center'>
            <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"70%"}}></img>
            <p className='mt-3'>Nithin Kamath</p>
            <p className='text-muted'>Founder, CEO</p>
          </div>
          <div className='col-lg-6 col-sm-12 p-5' style={{fontSize:"1rem"}}>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href='#'>HomePage</a> / 
             <a href='#'> TradingQnA</a> / 
             <a href='#'> Twitter</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
