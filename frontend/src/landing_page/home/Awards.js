import React from 'react'

function Awards() {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-lg-5 col-sm-12 mt-5'>
        <img src='media/images/largestBroker.svg' style={{width:"90%"}}/>
      </div>
      <div className='col-lg-2 mt-5'>

      </div>
      <div className='col-lg-5 col-sm-12 mt-5'>
         <h1 className='fs-3'>Largest stock broker in India</h1>
         <p className='text-muted'>2+ milion Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
         <div className='row' style={{lineHeight:"2.5rem"}}>
            <div className='col-6 p-3'>
               <ui>
                <li>Futures and options</li>
                <li>Futures and options</li>
                <li>Futures and options</li>
               </ui>
            </div>
            <div className='col-6 p-3'>
               <ui>
                <li>Futures and options</li>
                <li>Futures and options</li>
                <li>Futures and options</li>
               </ui>
            </div>
         </div>
         <img src='media/images/pressLogos.png' alt='AwardsImage' style={{width:"80%"}} className='mb-5'/>
      </div>
      </div>
    </div>
  )
}

export default Awards


