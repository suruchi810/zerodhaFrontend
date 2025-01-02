import React from 'react'
import googlePlayImg from '../../assets/images/googlePlayBadge.svg'
import appStoreImg from '../../assets/images/appstoreBadge.svg'
const LeftSec = ({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore,}) => {
  return (
    <div className='container text-muted fs-6 m-5 border-top'>
      <div className="row" style={{textAlign:"left", marginTop: "100px", lineHeight:"1.9"}}>
        <div className="col-6" style={{marginLeft:"80px"}}>
          <img src={imageURL} alt="" />
        </div>
        <div className="col" style={{marginRight:"120px"}}>
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <a href={tryDemo}>Try Demo</a>
          <a href={learnMore} style={{marginLeft: "50px"}}>learnMore</a><br/><br></br>
          <a href={googlePlay}><img src={googlePlayImg} alt="" /></a>
          <a href={appStore} style={{marginLeft: "50px"}}><img src={appStoreImg} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default LeftSec