import React from 'react'
import img1 from '../../assets/images/pricing0.svg'
import img2 from '../../assets/images/intradayPricing.svg'
const Hero = () => {
  return (
    <div className='border-bottom container text-muted'>
      <div style={{ padding: "100px" }}>
        <h2 className='fs-1'>Charges</h2>
        <p>List of all charges and taxes</p>
      </div>

      <div className="row" style={{paddingBottom:"100px"}}>
        <div className="col-4 text-muted" style={{padding:"50px"}}>
          <img src={img1} alt="" />
          <h2>Free equity delivery</h2>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 text-muted" style={{padding:"50px"}}>
          <img src={img2} alt="" />
          <h2>Intraday and F&O trades</h2>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 text-muted" style={{padding:"50px"}}>
          <img src={img1} alt="" />
          <h2>Free direct MF</h2>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>

    </div>
  )
}

export default Hero