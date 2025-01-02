import React from 'react'
import eco_img from '../../assets/images/ecosystem.png'
import pressLogs from '../../assets/images/pressLogos.png'
const Stats = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6" style={{textAlign:'left'}}>
          <h2>Trust with confidence</h2>
          <div className='mt-5'>
          <h4>Customer-first always</h4>
          <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          </div>

          <div className='mt-5'>
          <h4>No spam or gimmicks</h4>
          <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          </div>

          <div className='mt-5'>
          <h4>The Zerodha universe</h4>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>

          <div className='mt-5'>
          <h4>Do better with money</h4>
          <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>

        </div>
        <div className="col-6">
          <img src={eco_img} alt="" style={{ width: "85%" }} className='mb-5'/>
          <a href="">Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href="">Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="row m-5">
      <img src={pressLogs} alt="pressLogs" />
      </div>
    </div>
  )
}

export default Stats