import React from "react";
import { Link } from "react-router-dom";
import MotorbikeSlider from "../../components/slider/MotorbikeSlider";
import { MotorInsuranceOptions } from "./MotorInsuranceItems";

const MotorInsurance = () => {
  return (
    <>
      <MotorbikeSlider />
      <div className="Insurance Content">
        <div className="CarInsurance"></div>
        <h2>Motorbike insurance quotes that are customized for you.</h2>
        <div className="Content-Section">
          <p>
            Every motorcyclist needs insurance; it's illegal to ride on the
            roads without it. But there's no good reason to pay over the odds
            for your motorbike insurance. Letting your policy auto-renew is
            often the easiest route to over-paying. Loyalty often isn't rewarded
            when it comes to insurance.
          </p>
          <div className="Content-Description">
            <div className="Center-Description">
              <div className="Content-Image">
                <img
                  src="/image/car-insurance/protect-icon.jpg"
                  alt="Protect Icon"
                />
              </div>
              <div>
                <h4>Why do you need Motorbike insurance?</h4>
                <p>
                  If you own a motorbike, you need auto insurance. A motorbike
                  insurance policy helps provide financial protection for you,
                  and possibly others if you're involved in an accident. All it
                  takes is 15 minutes to get a personalized car insurance quote
                  with the best rates, discounts, and options available to you.
                </p>
              </div>
            </div>
            <div className="Right-Description">
              <h4>What do you need to know about auto insurance?</h4>
              <p>
                As with all insurance products you should remember that the
                cheapest option isn't always the best. The level of cover you
                get is as important as the price - you don't want to end up
                over-insured and paying for insurance you don't need, or
                under-insured and left without cover you do need just to save a
                few money.
              </p>
            </div>
          </div>
        </div>
        <h2>What are your Motorbike insurance quote options?</h2>
        <div className="Content-Section">
          <ul className="Center-Description CarOption-Description">
            {MotorInsuranceOptions.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <h3>{item.name}</h3>
                  {item.description.map((child, index) => {
                    return <p key={index}>{child.benefit}</p>;
                  })}
                  {/* <p>{item.price}</p> */}
                  <Link className="Submit-Btn Insurance-Btn" to="/Login">
                    Sign Up
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MotorInsurance;
