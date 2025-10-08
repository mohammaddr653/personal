"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "../../assets/css/projects.css";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
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
          modules={[
            Autoplay,
            Pagination,
            EffectFade,
            Navigation,
            Scrollbar,
            A11y,
          ]}
          initialSlide={0}
          loop={true}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          <div className="swiperjs-controlls flex flex-col md:flex-row justify-end items-center gap-2 absolute top-0 md:top-auto md:bottom-0 right-0 md:left-0 md:right-auto z-10 text-black">
            <SwiperButtonPrev
              className={
                "cursor-pointer flex w-[35px] md:w-[50px] bg-primary md:bg-primary-glass md:border-4 text-white border-white dark:border-neutral-900 aspect-square justify-center items-center rounded-full"
              }
            ></SwiperButtonPrev>
            <SwiperButtonNext
              className={
                "cursor-pointer flex w-[35px] md:w-[50px] bg-primary md:bg-primary-glass md:border-4 text-white border-white dark:border-neutral-900 aspect-square justify-center items-center rounded-full"
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
