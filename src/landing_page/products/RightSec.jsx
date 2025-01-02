import React from 'react'

const RightSec = ({imageURL, productName, productDescription, learnMore}) => {
  return (
    <div className='container text-muted fs-6 m-5 border-top'>
      <div className="row fs-6" style={{textAlign:"left", lineHeight:"1.9"}}>
        
        <div className="col" style={{margin:"100px 80px"}}>
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <a href={learnMore}>{learnMore}</a>
        </div>
      
        <div className="col-6">
          <img src={imageURL} alt=""/>
        </div>
    </div>
    </div>
  )
}

export default RightSec;