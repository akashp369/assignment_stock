import React from 'react'
import '../styles/Footer.css'
import google from '../assest/google.png'
import twitter from '../assest/twitter.png'
import youtube from '../assest/youtube.png'
import facebook from '../assest/facebook.jpg'
import insta from '../assest/insta.jpg'



const Footer = () => {
  return (
    <div className='footer'>
      <div className="logo">
        <h1>InvestPe</h1>
      </div>
      <div className='footer_first'>
        <div className="contact h5_t">
          <h5>Contact</h5>
          <p>1234567890</p>
          <p>contact@gamil.com</p>
        </div>
        <div className="company h5_t">
          <h5>Company</h5>
          <p>About</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="quicklink h5_t">
          <h5>Quick Links</h5>
          <p>Home</p>
          <p>GateWay</p>
          <p>Blog</p>
        </div>
        <div className="google h5_t">
          <h5>Download the app Now</h5>
          <img src={google} alt="" />
        </div>
      </div>
      <div className="second_div">
        <h5>Find Us On</h5>
        <div className='second_img'>
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
      <p>© 2022 Chhotastock Technologies Privarte Limited. Al rights reserved. CIN - UT4999WER012PTCIB4187 Chihotastock Technologies Privote Limited.</p>
      <p>Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classas,<br />Investing in Stocks/ ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing </p>
    </div>
  )
}

export default Footer
