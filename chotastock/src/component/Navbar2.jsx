import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar2.css"
import { BsChevronCompactDown } from "react-icons/bs";

const Navbar2 = () => {
  const[disp, setDisp]=useState('none')
  return (
    <div className='navbar btn_logo_2'>
    <div className="logo ">
      <h1><Link to={"/"}>InvestPe</Link></h1>
      <button>GateWay</button>
    </div>
    <div className='nav_2'>
        <h3 className='product_hover' onMouseEnter={() => setDisp("block")}
        onMouseLeave={() => setDisp("none")}>Product <BsChevronCompactDown/></h3>
        <div className="hover-box" style={{display:`${disp}`}}>
          <div>
        <div className="investment">
          <h3>Investment</h3>
          <div>
            <h4>Mutual Funds</h4>
            <p>E2E infrastructure for mutual fund investing</p>
          </div>
          <div>
            <h4>Indian Equity</h4>
            <p>Ready-made stock baskets with major broker integrations</p>
          </div>
          <div>
            <h4>Digital Gold</h4>
            <p>Allow your users to buy & sell digital gold</p>
          </div>
          <div>
            <h4>Fixed Deposits</h4>
            <p>Book FDs in one-click without opening a bank account</p>
          </div>
         
          
        </div>
        <div className="data investment">
          <h3>Data</h3>
          <div>
            <h4>Market Research</h4>
            <p>Deep-tech stock research & analysis</p>
          </div>
          <div>
            <h4>Historical Performance</h4>
            <p>Multi timeframe historical data for stocks,
mutual funds & digital gold 3</p>
          </div>
          </div>
        </div>
      </div>
        <h3>AboutUs</h3>
    </div>
    </div>
  )
}

export default Navbar2
