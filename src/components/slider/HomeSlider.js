import { useEffect, useState } from "react";
import { dataSliderHome } from "./DataSlider";
import BtnSlider from "./BtnSlider";
import "../../App.css";

function HomeSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  
  const nextSlide = () => {
    if (slideIndex !== dataSliderHome.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSliderHome.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSliderHome.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const sliderChange = setInterval(function () {
      if (slideIndex !== dataSliderHome.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === dataSliderHome.length) {
        setSlideIndex(1);
      }
    }, 3000);
    return () => clearInterval(sliderChange)
  }, [slideIndex])

  return (
    <div className="Container-Slider">
      {dataSliderHome.map((item, index) => {
        return (
          <div key={index}>
             <div
            className={
              slideIndex === index + 1 ? "Slide Active-Animation" : "Slide"
            }
          >
            <img
              src={
                process.env.PUBLIC_URL + `/image/slider/home-slider/slider${index + 1}.jpg`
              }
              alt={item.title}
            />
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"Next"} />
      <BtnSlider moveSlide={prevSlide} direction={"Prev"} />

      <div className="Container-Dots">
        {Array.from({ length: 3 }).map((item, index) => (
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

export default HomeSlider;
