import React from 'react'
import Education_IMG from '../../assets/images/education.svg'
const Education = () => {
  return (
    <div className='container'>
      <div className="row m-5" >

        <div className="col-6">
          <img src={Education_IMG} alt="" />
        </div>

        <div className="col-6" style={{textAlign:"left"}}>
          <h2>Free and open market education</h2>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="">Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

          <h2>Varsity</h2>
          <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="">TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education