import homeHero from '../../assets/images/homeHero.png'
import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5'>
      <div className='row'>
        <img src={homeHero} alt="hero_image" className='mb-5' />
        <h1 className='mt-5'>Invest In Everything</h1>
        <p>Online platform to invest in stocks, derivation, mutual funds. and more</p>
        <button style={{width:"20%", margin:"0 auto"}} className='p-2 btn btn-primary fs-5'>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero