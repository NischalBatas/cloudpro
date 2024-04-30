"use client"
import About from "@/components/Page/About/About";
import Results from "@/components/Page/Homes/Content/Results";
import ContactInfo from "@/components/Page/Services/GenerativeAI/content/ContactInfo";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
const page = () => {
  return (
    <div>
      <About />
      <ContactInfo />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src='/Image/profile.svg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/Image/profile.svg' alt="slide_image" />
        </SwiperSlide>
        {/* Add more SwiperSlides here */}
      </Swiper>
    </div>
  );
};

export default page;
