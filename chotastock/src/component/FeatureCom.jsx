import React from "react";
import "../styles/FeatureCom.css";
import Button from "../component/Button";
import mobile_img from '../assest/mobile_img.jpg';
import laptop_img from '../assest/laptop_img.avif'
import amazon from '../assest/amazon.jpg'
import my from '../assest/my.jpg'
import myntra from '../assest/myntra.jpg'
import apple from '../assest/apple.png'
import croma from '../assest/croma.png'

const FeatureCom = () => {
  return (
    <div className="feature">
      <div className="fea_head">
        <h3>FEATURES</h3>
        <h1>SAVE NOW. BUY LATER. SIMPLE & REALISTIC </h1>
        <p>
          Get what you love and save up over weeks or months to achieve it much
          lower price. Time & Flexibility onyourside.
        </p>
        <div className="btn_bottom">
          <Button name={"Get the App"} />
          <a href="">Learn More</a>
        </div>
      </div>
      <div className="fea_img">
      <div className="center-image">
        <div className="first_img" >
        <img src={mobile_img} alt="Center" className="first_img" />
        <div className="btn_bottom_img">
            <button>Flat &#8377;400 off</button>
            <p>10% return +</p>
        </div>
        </div>
        <div className="second_imgg" >
        <img src={laptop_img} alt="Center" className="second_imgg" />
        <div className="btn_bottom_img">
            <button>Flat &#8377;400 off</button>
            <p>10% return +</p>
        </div>
        </div>
      </div>
      <div className="clockwise-images">
        <img src={apple} alt="" />
        <img src={apple} alt="" />
        <img src={myntra} alt="" />
        <img src={croma} alt="" />
        <img src={amazon} alt="" />
        <img src={my} alt="" />
      </div>
      </div>
    </div>
  );
};

export default FeatureCom;
