import React from 'react'
import { FaSearch } from 'react-icons/fa';
import "../styles/navbar.css"
import Button from './Button';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1><Link to={"/"}>InvestPe</Link></h1>
        
      </div>
      <div className="search_Bar">
        <button><FaSearch /> </button>
      <input  type="text"  placeholder="Search stocks, ETF's, Indices"/>
      </div>
      <Link to={'/product'}><Button  name={"Login"}/></Link>
    </div>
  )
}

export default Navbar
