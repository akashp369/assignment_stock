import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../component/Home'
import Product from '../component/Product'


const AllRoute = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
      </Routes>
  )
}

export default AllRoute
