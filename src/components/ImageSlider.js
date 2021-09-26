import React, { useState } from "react";
import { SliderData } from "./SliderData";
import avatar from "../assets/images/lottie.png";
import { useSwipeable } from "react-swipeable";

let pos = 300;
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const nextSlide = () => {
    pos = pos - 300;
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    pos = pos + 300;
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section {...handlers} className="slider">
      <div className="avatar-wrapper">
        <img className="avatar" src={avatar} alt="avatar" />
        <h3 className="avatar-title">lottie Curtis</h3>
        <h4 className="avatar-info">You have {length} Products</h4>
      </div>

      <div
        className="slide-wrapper"
        style={{ transform: `translateX(${pos}px)` }}
      >
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {slide.image ? (
                <img
                  className="slide-img"
                  src={slide.image}
                  alt={slide.title}
                />
              ) : null}
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p>
              <button className="slide-btn">View</button>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div>
          <p>widhe</p>
          <p>widhe</p>
        </div>
        <div>
          <p>widhe</p>
          <p>widhe</p>
        </div>
        <div>
          <p>widhe</p>
          <p>widhe</p>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
