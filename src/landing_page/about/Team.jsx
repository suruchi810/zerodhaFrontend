import React from 'react'
import img from '../../assets/images/nithinKamath.jpg'
const Team = () => {
  return (
    <div className="container border-top">
        <div className="row" style={{ margin: "100px 205px"}}>
            <h2>People</h2>
        </div>
        <div className="row text-muted mb-5" style={{}}>
            <div className="col-5">
                <img src={img} alt="" style={{borderRadius:"100%"}} width={300}/> 
                <h4>Nitin Kamath</h4>  
                <h5>Founder, CEO</h5>
            </div>
            <div className="col-1"></div>
            <div className="col-5 fs-5" style={{textAlign:"left"}}>

                <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
            </div>
        </div>

    </div>
)
}

export default Team