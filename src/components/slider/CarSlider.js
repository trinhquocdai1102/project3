import "../../App.css";
import { dataSliderCarInsurance } from "./DataSlider";
import Slider from "./Slider";

function CarSlider() {
	return (
		<>
			<Slider data={dataSliderCarInsurance} />
		</>
	);
}

export default CarSlider;
