import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <img src='/media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
        <h1 className='mb-3 fs-3'>Invest in everything</h1>
        <p className='text-muted mb-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary mb-5' style={{width:"30%", margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero
