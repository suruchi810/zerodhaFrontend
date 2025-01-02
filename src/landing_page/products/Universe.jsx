import React from 'react'
import zerodhaFuncImg from '../../assets/images/zerodhaFundhouse.png'
import sensibullImg from '../../assets/images/sensibullLogo.svg'
import tijoriImg from '../../assets/images/tijori.svg'
import strikImg from '../../assets/images/streakLogo.png'
import smallcaseImg from '../../assets/images/smallcaseLogo.png'
import dittoLogoImg from '../../assets/images/dittoLogo.png'
const Universe = () => {
  return (
    <div>
      <h2>The Zerodha Universe</h2>
      <p>Extend your trading and investment experience even further with our partner platforms</p>
      <div className="row text-muted">
        <div className="col-4" style={{padding: "50px"}}>
          <img src={zerodhaFuncImg} alt="" width={200} />
          <p style={{margin:"10px"}}>Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.</p>
        </div>
        <div className="col-4" style={{padding: "50px"}}>
          <img src={sensibullImg} alt="" width={200} />
          <p style={{margin:"10px"}}>Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4" style={{padding: "50px"}}>
          <img src={tijoriImg} alt="" width={200} />
          <p style={{margin:"10px"}}>Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4" style={{padding: "50px"}}>
          <img src={strikImg} alt="" width={200} />
          <p style={{margin:"10px"}}>Systematic trading platform
            that allows you to create and backtest
            strategies without coding.</p>
        </div>
        <div className="col-4" style={{padding: "50px"}}>
          <img src={smallcaseImg} alt="" width={200} />
          <p style={{margin:"10px"}}>Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4" style={{padding: "50px"}}>
          <img src={dittoLogoImg} alt="" width={140} />
          <p style={{margin:"10px"}}>Personalized advice on life
            and health insurance. No spam
            and no mis-selling.</p>
        </div>
      </div>
    </div>
  )
}

export default Universe