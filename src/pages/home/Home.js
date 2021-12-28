import React from "react";
import ChooseUs from "../../components/chooseUs/ChooseUs";
import Feedback from "../../components/feedback/Feedback";
import OurProduct from "../../components/our-product/OurProduct";
import PartneredWith from "../../components/partnered-with/PartneredWith";
import HomeSlider from "../../components/slider/HomeSlider";

const Home = () => {
	return (
		<>
			<HomeSlider />
			<div className="HomePage">
				<OurProduct />
				<ChooseUs />
				<PartneredWith />
				<Feedback />
			</div>
		</>
	);
};

export default Home;
