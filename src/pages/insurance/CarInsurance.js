import React from "react";
import { Link } from "react-router-dom";
import CarSlider from "../../components/slider/CarSlider";
import { CarInsuranceOptions } from "./CarInsuranceItems";

const CarInsurance = () => {
	return (
		<>
			<title>Car Insurance</title>
			<CarSlider />
			<div className="Insurance Content">
				<div className="CarInsurance"></div>
				<h2>Car insurance quotes that are customized for you.</h2>
				<div className="Content-Section">
					<p>
						Everyone needs car insurance. Get a quote from a company
						that delivers affordable rates and personalized service
						when you need it. CARE's Auto Insurance been saving
						people money for many years. We know a thing or two
						about cheap car insurance rates. We deliver a car
						insurance policy with exceptional coverage and
						best-in-class customer service, and that matters when
						you have an accident or are stuck on the side of the
						road. Get a fast and free car insurance quote to see
						everything CARE has to offer.
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
								<h4>Why do you need Car insurance?</h4>
								<p>
									If you own a car, you need auto insurance. A
									car insurance policy helps provide financial
									protection for you, and possibly others if
									you're involved in an accident. All it takes
									is 15 minutes to get a personalized car
									insurance quote with the best rates,
									discounts, and options available to you.
								</p>
							</div>
						</div>
						<div className="Right-Description">
							<h4>
								What do you need to know about auto insurance?
							</h4>
							<p>
								Understanding a few things about a car insurance
								policy helps you make the best decisions about
								your policy. Here are a few helpful resources
								for car insurance information.
							</p>
						</div>
					</div>
				</div>
				<h2>What are your Car insurance quote options?</h2>
				<div className="Content-Section">
					<ul className="Center-Description CarOption-Description">
						{CarInsuranceOptions.map((item, index) => {
							return (
								<li key={index} className={item.className}>
									<h3>{item.name}</h3>
									{item.description.map((child, index) => {
										return (
											<p key={index}>{child.benefit}</p>
										);
									})}
									{/* <p>{item.price}</p> */}
									<Link
										className="Submit-Btn Insurance-Btn"
										to="/Login"
									>
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

export default CarInsurance;
