/** @format */

import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        border: "6px solid black",
        width: "40px",
        height: "40px",
        transform: "rotate(45deg)",
        borderBottom: "none",
        borderLeft: "none",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        border: "6px solid black",
        width: "40px",
        height: "40px",
        transform: "rotate(225deg)",
        borderBottom: "none",
        borderLeft: "none",
      }}
      onClick={onClick}
    />
  );
}
export default class SimpleSlider extends Component {
  render() {
    const showMaxCnt = 2;
    const arr = Array.from(new Array(3));
    const settings = {
      infinite: arr.length > showMaxCnt,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "0px",
      touchThreshold: 100,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <h3>Netflix</h3>
            <a
              href="https://thseogns-netflix.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/project/Netfle.png`}
                alt="Netfle"
              />
            </a>
          </div>
          <div>
            <h3>H&M</h3>
            <a
              href="https://sonhnm.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/project/Hnm.png`}
                alt="Hnm"
              />
            </a>
          </div>
          <div>
            <h3>타이어테크</h3>
            <a
              href="https://thseogns.github.io/tire/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/project/tire.png`}
                alt="tire"
              />
            </a>
          </div>

          <div>
            <h3>Airbnb</h3>
            <a
              href="https://fancy-swan-aa03d0.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/project/air.png`}
                alt="air"
              />
            </a>
          </div>
          <div>
            <h3>frizmworks</h3>
            <a
              href="https://thseogns.github.io/frizm/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/project/frz_title.png`}
                alt="frz_title"
              />
            </a>
          </div>
        </Slider>
      </>
    );
  }
}
