import { useState } from "react";
import DataSlider from "./DataSlider";
import BtnSlider from "./BtnSlider";
import "../../App.css";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== DataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="Container-Slider">
      {DataSlider.map((item, index) => {
        return (
          <div key={index}>
             <div
            className={
              slideIndex === index + 1 ? "Slide Active-Animation" : "Slide"
            }
          >
            <img
              src={
                process.env.PUBLIC_URL + `/image/home/slider/slider${index + 1}.jpg`
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

export default Slider;
