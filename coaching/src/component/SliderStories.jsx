import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function SliderStories() {
  return (
    <div className="bg-black h-[15rem] flex flex-col items-center text-white py-5">
      <h2 className="text-2xl font-Roboto font-bold">Success Stories</h2>
      <div className="border-4 border-red-700 w-[5rem] mt-2"></div>
      <Swiper
        navigation={true}
        centeredSlides={true}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="h-[18rem] w-[67rem] "
      >
        <SwiperSlide>
          <div className="flex items-center px-28 py-2">
            <div>
              <img src="Image/user.png" alt="" className="h-36 w-[24rem]" />
            </div>
            <div className="ml-7">
              <p className="font-Roboto tracking-wider">
                "Mekosh has equipped me with tools and techniques that have
                helped me become a happier person, a mindful mother and a
                resourceful employee. Mekosh has taught me 'a way of life'. All
                their programs are inclusive and interactive"..
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center px-28 py-2">
            <div>
              <img src="Image/user.png" alt="" className="h-36 w-[24rem]" />
            </div>
            <div className="ml-7">
              <p className="font-Roboto tracking-wider">
                "Mekosh has equipped me with tools and techniques that have
                helped me become a happier person, a mindful mother and a
                resourceful employee. Mekosh has taught me 'a way of life'. All
                their programs are inclusive and interactive"..
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center px-28 py-2">
            <div>
              <img src="Image/user.png" alt="" className="h-36 w-[24rem]" />
            </div>
            <div className="ml-7">
              <p className="font-Roboto tracking-wider">
                "Mekosh has equipped me with tools and techniques that have
                helped me become a happier person, a mindful mother and a
                resourceful employee. Mekosh has taught me 'a way of life'. All
                their programs are inclusive and interactive"..
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center px-28 py-2">
            <div>
              <img src="Image/user.png" alt="" className="h-36 w-[24rem]" />
            </div>
            <div className="ml-7">
              <p className="font-Roboto tracking-wider">
                "Mekosh has equipped me with tools and techniques that have
                helped me become a happier person, a mindful mother and a
                resourceful employee. Mekosh has taught me 'a way of life'. All
                their programs are inclusive and interactive"..
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderStories;
