import React from 'react'

function Hero() {
  return (
    <div className='container about'>
      <div className='row text-center mt-5'>
        <h4 className='mt-5'>We pioneered the discount broking model in India.</h4>
        <h4 className='mb-5'>Now, we are breaking ground with our technology.</h4>
      </div>
      <div className='row border-top p-5 mt-5 text-muted' style={{fontSize:"1rem", lineHeight:"1.8"}}>
        <div className='col-lg-6 col-sm-12 p-5'>
          <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
          <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
          <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
        </div>
        <div className='col-lg-6 col-sm-12 p-5'>
            <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
            <p><button style={{background:'none', border:'none', padding:0, cursor:'pointer', color:'inherit'}}>Rainmatter</button>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
            <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <button style={{background:'none', border:'none', padding:0, cursor:'pointer', color:'inherit'}}>blog</button> or see what the media <button style={{background:'none', border:'none', padding:0, cursor:'pointer', color:'inherit'}}>is saying about us</button> or learn more about our business and product <button style={{background:'none', border:'none', padding:0, cursor:'pointer', color:'inherit'}}>philosophies</button>.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
