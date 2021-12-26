import { useEffect, useState } from "react";
import { dataSliderMotorbikeInsurance } from "./DataSlider";
import BtnSlider from "./BtnSlider";
import "../../App.css";

function MotorbikeSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSliderMotorbikeInsurance.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSliderMotorbikeInsurance.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSliderMotorbikeInsurance.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const sliderChange = setInterval(function () {
      if (slideIndex !== dataSliderMotorbikeInsurance.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === dataSliderMotorbikeInsurance.length) {
        setSlideIndex(1);
      }
    }, 3000);
    return () => clearInterval(sliderChange)
  }, [slideIndex])

  return (
    <div className="Container-Slider">
      {dataSliderMotorbikeInsurance.map((item, index) => {
        return (
          <div key={index}>
             <div
            className={
              slideIndex === index + 1 ? "Slide Active-Animation" : "Slide"
            }
          >
            <img
              src={
                process.env.PUBLIC_URL + `/image/slider/motorbike-slider/slider${index + 1}.jpg`
              }
              alt={item.title}
            />
            </div>
            {/* <div className="Slider-Content">
              <p>{item.title}</p>
              <h1>{item.slogan}</h1>
            </div> */}
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"Next"} />
      <BtnSlider moveSlide={prevSlide} direction={"Prev"} />

      <div className="Container-Dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "Dot Active" : "Dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MotorbikeSlider;
