import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import '../App.css';
import "../styles/App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
 // Import Swiper modules

 const slides = [
  {
    url: "https://images.bewakoof.com/uploads/grid/app/DesktopStrip-TriBe-1606924612.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/bewakoof-shirt-and-kurta-online-fashion-shopping-DESKTOP-STRIP-1603893838.jpg",
  },
  {
    url: "https://images.bewakoof.com/uploads/grid/app/bewakoof-mobile-cover-parade-shopping-banner-desktop-strip-1606294605.jpg",
  },
  
];

function Slider() {
  return (
    <div className=" flex justify-center m-10">
    <div className="w-10/12 m-1/12 z-0">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.url} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    </div>
  );
}

export default Slider;
