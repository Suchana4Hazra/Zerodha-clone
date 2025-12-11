import React from 'react'

function Pricing() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-sm-12'>
            <h3 className='mb-5 mt-5'>Unbeatable pricing</h3>
            <p>We pioneered the concept of discount broking and price <br/>transparency in India. Flat fees and no hidden charges.</p>
            <a href='javascript:void(0);' style={{textDecoration:"none"}}> See pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-lg-2'>

        </div>
        <div className='col-lg-6 col-sm-12'>
           <div className='row mt-5 text-center'>
            <div className='col-6 p-2 border'>
              <h3>₹0</h3>
              <p>Free equity delivery
and <br/> direct mutual funds</p>
            </div>
            <div className='col-6 p-2 border'>
              <h3>₹20</h3>
              <p>Intraday and
F&O</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
