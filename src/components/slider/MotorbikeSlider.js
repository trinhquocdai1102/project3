import "../../App.css";
import { dataSliderMotorbikeInsurance } from "./DataSlider";
import InsuranceSlider from "./InsuranceSlider";

function MotorbikeSlider() {

  return (
    <>
      <InsuranceSlider 
        data={dataSliderMotorbikeInsurance}
        />
    </>
  );
}

export default MotorbikeSlider;
