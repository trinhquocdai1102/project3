import "../../App.css";
import { dataSliderHome } from "./DataSlider";
import Slider from "./Slider";

function HomeSlider() {
  return (
    <>
      <Slider 
        data={dataSliderHome} 
        />
    </>
  );
}

export default HomeSlider;
