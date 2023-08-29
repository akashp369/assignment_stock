import React from "react";
import "../styles/EsenFeatCom.css";
import Button from "./Button";
import trading1 from '../assest/trading1.png'
import trading2 from '../assest/trading2.jpg'
import trading3 from '../assest/trading3.png'

const EsenFeatCom = () => {
  return (
    <div className="esenfeat">
      <div className="start_esen">
        <div className="images_esen">
            <img src={trading1} alt="" />
            <img src={trading2} alt="" />
            <img src={trading3} alt="" />
        </div>
        <h1>
          Essential Features for the Super <br /> Trader in You - All in
          <span className="newstyle">One Platform</span>
        </h1>
        <p>
          Save hours of research by using our readymade <br />
          screens to find your next investment
        </p>
        <h3>
          30+ ANALYTICAL TOOLS & CHARTING + LIVE <br />
          TRADES + STOCK PICKS & MUCH MORE
        </h3>
        <div className="btn_esen">
            <Button name={"Get started Now"} />
            <a href="">See all features</a>
        </div>
      </div>
    </div>
  );
};

export default EsenFeatCom;
