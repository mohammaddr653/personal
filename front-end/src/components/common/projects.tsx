"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "../../assets/css/projects.css";

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/scrollbar";
import SwiperButtonPrev from "./swiper-button-prev";
import SwiperButtonNext from "./swiper-button-next";
import ProjectSlider from "./projectSlider";

const Projects = () => {
  return (
    <div className="projects-container px-5 md:px-40 flex flex-col gap-6 text-neutral-800 dark:text-neutral-200">
      <h3 className="text-2xl font-weight400">نمونه کارها :</h3>
      <div className="relative">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Scrollbar, A11y]}
          initialSlide={0}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
          }}
        >
          <div className="swiperjs-controlls flex justify-end w-full items-center gap-2 absolute top-full h-[20px] mt-[20px] z-10 text-black">
            <SwiperButtonPrev
              className={
                "hidden cursor-pointer lg:flex w-[30px] bg-white aspect-square justify-center items-center rounded-full"
              }
            ></SwiperButtonPrev>
            <SwiperButtonNext
              className={
                "hidden cursor-pointer lg:flex w-[30px] bg-white aspect-square justify-center items-center rounded-full"
              }
            ></SwiperButtonNext>
          </div>

          <SwiperSlide>
            <ProjectSlider></ProjectSlider>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlider></ProjectSlider>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlider></ProjectSlider>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlider></ProjectSlider>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
