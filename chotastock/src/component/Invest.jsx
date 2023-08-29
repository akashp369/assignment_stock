import React from "react";
import "../styles/Invest.css";
import { BsChevronCompactDown } from "react-icons/bs";
import Button from './Button'
import mutualfund from '../assest/mutualfund.jpg'

const Invest = () => {
  return (
    <div className="invest_main">
      <div className="invest_first">
        <div className="first_inv">
          <h1>
            <span className="span_head">INVESTMENT STACK</span>
            <br /> for India
          </h1>
          <p>
            Elevate Your Investment Strategy with Our
            <span className="span_head2">Comprehensive APls</span>
          </p>
        </div>
        <div className="second_inv">
          <h3>
            Launch financial services in a matter of days. Take your pick from
            our flexible APIs, SDKs, or ready-to-use screens.
          </h3>
          <a href="">See our Products <BsChevronCompactDown /></a>
          <Button name={"Contact Us"} />
        </div>
      </div>
      <div className="invest_second">
        <img src={mutualfund} alt="" />
      </div>
    </div>
  );
};

export default Invest;
