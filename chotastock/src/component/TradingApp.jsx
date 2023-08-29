import React from 'react';
import '../styles/TradingApp.css';
import trading_app from '../assest/trading_app_img.png'

const TradingApp = () => {
  return (
    <div className='trading_comp'>
        <div className="head">
            <h1>Knowledge Based <br />Investing & Trading</h1>
            <p>Ready-made solution + Deep Research + Disciplined Investing + Advanced Trading tools</p>
        </div>
        <div className="logo_img">
            <img src={trading_app} alt="" />
        </div>
    </div>
  )
}

export default TradingApp
