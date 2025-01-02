import React from 'react'
const Pricing = () => {
  return (
    <div className='container'>
      <div className="row mb-5">
        <div className="col-6" style={{textAlign:"left"}}>
          <h2>Unbeatable pricing</h2>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="">See pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col border p-2">
              <h2>0</h2>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border p-2">
              <h2>20</h2>
              <p>Intraday and F&Q</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing