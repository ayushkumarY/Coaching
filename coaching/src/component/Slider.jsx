import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Sliderr() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div className="flex flex-col items-center h-[40rem] justify-center">
      <div className="w-[90rem] text-2xl">
        <Slider {...settings}>
          {slides.map((d, index) => (
            <div key={index} className=" h-[250px] text-white rounded-xl">
              <div className="flex flex-col items-center justify-center ">
                <h1 className=" font-semibold tracking-wider text-5xl mb-4">
                  {d.heading}
                </h1>
                <p className="text-center tracking-wider">{d.para1}</p>
                <p className="text-center tracking-wider">{d.para2}</p>
                <button></button>
                <button className="bg-red-700 hover:bg-red-800 rounded-md px-4 py-1 mt-4">
                  Know more!
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const slides = [
  {
    heading: "Online Coaching",
    para1: "Get Motivation.Any time.Any place.Learn What life",
    para2: "coaching can do for you!",
  },
  {
    heading: "Online Coaching",
    para1: "Get Motivation.Any time.Any place.Learn What life",
    para2: "coaching can do for you!",
  },
  {
    heading: "Online Coaching",
    para1: "Get Motivation.Any time.Any place.Learn What life",
    para2: "coaching can do for you!",
  },
  {
    heading: "Online Coaching",
    para1: "Get Motivation.Any time.Any place.Learn What life",
    para2: "coaching can do for you!",
  },
];

export default Sliderr;
