import React from 'react'
import Award from '../../assets/images/largestBroker.svg'

const Awards = () => {
  return (
    <div className='container mb-5'>
      <div className="row">
        <div className="col-6">
          <img src={Award} alt="" />
        </div>
        <div className="col-6 mt-2"  style={{textAlign: 'left'}}>
          <h1 className='fs-1'>Largest stock broker in India</h1>
          <p>2+ milling Zerodka clients contribute to over 15% of all retail order volumes in india daily by tranding and investing in:</p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li><p>Future and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default Awards