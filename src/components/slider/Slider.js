import React, { useEffect, useState } from 'react';
import BtnSlider from './BtnSlider';

const Slider = ( {data} ) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  useEffect(() => {
    const sliderChange = setInterval(function () {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000);
    return () => clearInterval(sliderChange)
  }, [current, length])


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || length <= 0) {
    return null;
  }

  const moveDot = (current) => {
    setCurrent(current);
  };


  
  return (
    <>
      <section className='Container-Slider'>
          {data.map((item, index) => {
              return (
                <div
                  className={index === current ? 'Slide Active-Animation' : 'Slide'}
                  key={index}
                >
                  {index === current && (
                    <img src={item.url} alt={data.title}/>
                  )}
                </div>
              );
          })}
          <div className="Container-Dots">
              {Array.from({ length: length }).map((item, index) => (
                <div
                  key={index}
                  onClick={() => moveDot(index)}
                  className={current === index ? "Dot Active" : "Dot"}
                ></div>
              ))}
          </div>
          <BtnSlider direction={"Prev"} moveSlide={prevSlide} onClick={prevSlide} />
          <BtnSlider direction={"Next"} moveSlide={nextSlide} onClick={nextSlide} />
      </section>
      
    </>
    );
};

export default Slider;