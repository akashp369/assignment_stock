import React from 'react'
import '../styles/layout.css'
import AllRoute from '../allroute/AllRoute'
import Footer from '../component/Footer'

const Layout = () => {
  return (
    <div className='layout'>
      <AllRoute />
      <Footer />
    </div>
  )
}

export default Layout
