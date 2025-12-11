import React from 'react'

function Hero() {
  return (
    <div className='container border-bottom mb-5'>
      <div className='row text-center p-5'>
        <h3>Zerodha Products</h3>
        <p style={{fontSize:"1.2rem"}}>Sleek, modern, and intuitive trading platforms</p>
        <p>Check out our <button style={{textDecoration:"none", cursor:'pointer', background:'none', border:'none', padding:0, color:'inherit'}}>investment offerings →</button></p>
        </div>
      </div>
  )
}

export default Hero
