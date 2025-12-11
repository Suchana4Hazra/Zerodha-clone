import React from 'react'

function Stats() {
  return (
    <div className='container'>
      <h5 className='mt-5 mb-5 mx-3'>Trust with confidence</h5>
      <div className='row'>
         <div className='col-lg-5 col-sm-12'>
            <h5 className='mx-3'>Customer-first always</h5>
            <p className='text-muted mx-3'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            <h5 className='mx-3'>No spam or gimmicks</h5>
            <p className='text-muted mx-3'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<button style={{background:'none', border:'none', padding:0, cursor:'pointer', color:'inherit'}}> Our philosophies.</button></p>
            <h5 className='mx-3'>The Zerodha universe</h5>
            <p className='text-muted mx-3'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            <h5 className='mx-3'>Do better with money</h5>
            <p className='text-muted mx-3'>With initiatives like <button style={{background:'none', border:'none', padding:0, cursor:'pointer', color:'inherit'}}>Nudge</button> and <button style={{background:'none', border:'none', padding:0, cursor:'pointer', color:'inherit'}}>Kill Switch,</button> we don't just facilitate transactions, but actively help you do better with your money.</p>
         </div>
    
         <div className='col-lg-2'></div>
         <div className='col-lg-5 col-sm-12'>
            <img src='media/images/ecosystem.png' alt='StatsImage' style={{width:"96%"}}/>
            <div className='row'>
              <div className='col-1'></div>
              <div className='col-5'><button style={{background:'none', border:'none', padding:0, cursor:'pointer', color:'inherit'}}>Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i></button></div>
              <div className='col-5'><button style={{background:'none', border:'none', padding:0, cursor:'pointer', color:'inherit'}}>Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></button></div>
              <div className='col-1 mb-5'></div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Stats
