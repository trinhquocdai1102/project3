import "../../App.css";
import { dataSliderCarInsurance } from "./DataSlider";
import InsuranceSlider from "./InsuranceSlider";

function CarSlider() {

  return (
    <>
      <InsuranceSlider 
        data={dataSliderCarInsurance}
        />
    </>
  );
}

export default CarSlider;
          