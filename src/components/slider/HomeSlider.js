import "../../App.css";
import { dataSliderHome } from "./DataSlider";
import InsuranceSlider from "./InsuranceSlider";

function HomeSlider() {
  return (
    <>
      <InsuranceSlider 
        data={dataSliderHome} 
        />
    </>
  );
}

export default HomeSlider;
