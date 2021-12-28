import React from "react";
import "../../App.css";
import leftArrow from "./icons/chevron-back-outline.svg";
import rightArrow from "./icons/chevron-forward-outline.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "Next" ? "Btn-Slide Next" : "Btn-Slide Prev"}
    >
      <img src={direction === "Next" ? rightArrow : leftArrow} alt="Arrow" />
    </button>
  );
}
