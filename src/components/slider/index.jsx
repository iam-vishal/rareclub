"use client";
import React, { useRef, useState, useEffect } from "react";
// Swiper
import "swiper/css";
import { Swiper } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";

const Slider = ({ show, delay, spaceBetween, children, mobile }) => {
  return (
    <div className="teamSlider">
      <Swiper
        spaceBetween={spaceBetween ?? 20}
        slidesPerView={show}
        loop={true}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: mobile ?? 2,
            spaceBetween: spaceBetween ?? 20,
          },
          640: {
            slidesPerView: mobile ?? 2,
            spaceBetween: spaceBetween ?? 20,
          },
          768: {
            slidesPerView: show ?? 3,
            spaceBetween: spaceBetween ?? 20,
          },
          1024: {
            slidesPerView: show ?? 3,
            spaceBetween: spaceBetween ?? 20,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
