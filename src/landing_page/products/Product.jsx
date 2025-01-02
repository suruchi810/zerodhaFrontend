import React from 'react'
import kiteImg from '../../assets/images/kite.png'
import coinImg from '../../assets/images/coin.png'
import varsityImg from '../../assets/images/varsity.png'
import consolImg from '../../assets/images/console.png'
import kiteConnectImg from '../../assets/images/kiteconnect.png'
import Hero from './Hero'
import LeftSec from './LeftSec'
import RightSec from './RightSec'
import Universe from './Universe'
const Product = () => {
  return (
    <>
        <Hero/>
        <LeftSec imageURL={kiteImg} productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
        <RightSec imageURL={consolImg} productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="Learn More"/>
        <LeftSec imageURL={coinImg} productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
        <RightSec imageURL={kiteConnectImg} productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="kite connect"/>
        <LeftSec imageURL={varsityImg} productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore=""/>
        <p style={{margin:"80px"}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
        <Universe/>
    </>
  )
}

export default Product