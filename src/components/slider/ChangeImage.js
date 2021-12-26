// import React from 'react';
// import { dataSliderMotorbikeInsurance } from "./DataSlider";
// import { useEffect, useState } from "react";
// import BtnSlider from "./BtnSlider";

// const ChangeImage = (props) => {
//   const [slideIndex, setSlideIndex] = useState(1);

//   const nextSlide = () => {
//     if (slideIndex !== props.dataSliderMotorbikeInsurance.length) {
//       setSlideIndex(slideIndex + 1);
//     } else if (slideIndex === propsdataSliderMotorbikeInsurance.length) {
//       setSlideIndex(1);
//     }
//   };

//   const prevSlide = () => {
//     if (slideIndex !== 1) {
//       setSlideIndex(slideIndex - 1);
//     } else if (slideIndex === 1) {
//       setSlideIndex(dataSliderMotorbikeInsurance.length);
//     }
//   };

//   const moveDot = (index) => {
//     setSlideIndex(index);
//   };

//   useEffect(() => {
//     const sliderChange = setInterval(function () {
//       if (slideIndex !== dataSliderMotorbikeInsurance.length) {
//         setSlideIndex(slideIndex + 1);
//       } else if (slideIndex === dataSliderMotorbikeInsurance.length) {
//         setSlideIndex(1);
//       }
//     }, 3000);
//     return () => clearInterval(sliderChange)
//   }, [slideIndex])

//   return (
//       <>
//         <BtnSlider moveSlide={nextSlide} direction={"Next"} />
//         <BtnSlider moveSlide={prevSlide} direction={"Prev"} />

//         <div className="Container-Dots">
//           {Array.from({ length: 5 }).map((item, index) => (
//             <div
//               key={index}
//               onClick={() => moveDot(index + 1)}
//               className={slideIndex === index + 1 ? "Dot Active" : "Dot"}
//             ></div>
//           ))}
//         </div>
//     </>
//   );
// };

// export default ChangeImage;