import React from "react";
import "../styles/StockInvesting.css";
import bar from '../assest/bar.jpg'

const StockInvesting = () => {
  return (
    <div className="st1" >
      <div className="st">
        <h1 className="st_logo">STOCK INVESTING, SIMPLIFIED</h1>
        <p>
          Online trading and investing in the market <br />
          does not have to be boring.
        </p>
        <p>
          While we adopt a technology-led approach in <br />
          building our product, we are keeping our users-investors <br />
          and traders even before that
        </p>
      </div>
      <div className="grid_layout">
        <div className="grid_item">
          <div className="first_item">
            <div>
            <img src={bar} alt="" />
            </div>
            <h3>Value Deals</h3>
          </div>
          <div className="second_item">
            <p>
              For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded
            </p>
          </div>
          <div className="third_item">
            <div>
              <p>CAGR</p>
              <p>17.80%</p>
            </div>
            <div>
              <p>Min Amount</p>
              <p>120</p>
            </div>
          </div>
        </div>
        <div className="grid_item">
          <div className="first_item">
            <div>
            <img src={bar} alt="" />
            </div>
            <h3>Value Deals</h3>
          </div>
          <div className="second_item">
            <p>
              For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded
            </p>
          </div>
          <div className="third_item">
            <div>
              <p>CAGR</p>
              <p>17.80%</p>
            </div>
            <div>
              <p>Min Amount</p>
              <p>120</p>
            </div>
          </div>
        </div>
        <div className="grid_item">
          <div className="first_item">
            <div>
            <img src={bar} alt="" />
            </div>
            <h3>Value Deals</h3>
          </div>
          <div className="second_item">
            <p>
              For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded
            </p>
          </div>
          <div className="third_item">
            <div>
              <p>CAGR</p>
              <p>17.80%</p>
            </div>
            <div>
              <p>Min Amount</p>
              <p>120</p>
            </div>
          </div>
        </div>
        <div className="grid_item">
          <div className="first_item">
            <div>
            <img src={bar} alt="" />
            </div>
            <h3>Value Deals</h3>
          </div>
          <div className="second_item">
            <p>
              For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded
            </p>
          </div>
          <div className="third_item">
            <div>
              <p>CAGR</p>
              <p>17.80%</p>
            </div>
            <div>
              <p>Min Amount</p>
              <p>120</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default StockInvesting;
