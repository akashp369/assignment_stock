import React from 'react'
import Navbar from './Navbar'
import StockInvesting from '../pages/StockInvesting'
import TradingApp from './TradingApp'
import FeatureCom from './FeatureCom'
import '../styles/Home.css'
import EsenFeatCom from './EsenFeatCom'

const Home = () => {
  return (
    <div className='home_comp'>
      <Navbar />
      <TradingApp />
      <FeatureCom />
      <EsenFeatCom />
      <StockInvesting />
    </div>
  )
}

export default Home
