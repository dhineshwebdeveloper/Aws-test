"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import thumb from "@/public/img/w.png";
import one from "@/public/img/brand/trustipilot.png";
import two from "@/public/img/brand/google.png";
import three from "@/public/img/brand/wpbeginner.png";
import four from "@/public/img/brand/hostadvice.png";
import five from "@/public/img/brand/capterra.png";

const Brand = () => {
  return (
    <div className="brand-section fix section-padding section-bg pt-0 margin-top-10">
      <div className="container">
        <h3 className="brand-head-title">
          <Image src={thumb} alt="img" priority />
          Recommended By <span>WordPress.org</span>
        </h3>
        <div className="swiper brand-slider-2">
          <Swiper
            slidesPerGroup={1}
            freeMode={true}
            speed={2000}
            loop={true}
            spaceBetween={20}
            roundLengths={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              1199: {
                slidesPerView: 5,
              },
              991: {
                slidesPerView: 4,
              },
              767: {
                slidesPerView: 3,
              },
              575: {
                slidesPerView: 3,
              },
              400: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="swiper-wrapper"
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="brand-img center">
                  <Image src={one} alt="img" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="brand-img center">
                  <Image src={two} alt="img" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="brand-img center">
                  <Image src={three} alt="img" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="brand-img center">
                  <Image src={four} alt="img" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="brand-img center">
                  <Image src={five} alt="img" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="brand-img center">
                  <Image src={one} alt="img" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="brand-img center">
                  <Image src={two} alt="img" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="brand-img center">
                  <Image src={three} alt="img" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="brand-img center">
                  <Image src={four} alt="img" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="brand-img center">
                  <Image src={five} alt="img" priority />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brand;
