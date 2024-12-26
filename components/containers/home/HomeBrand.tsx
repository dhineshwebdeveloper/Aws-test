"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/brand/indieplex.png";
import two from "@/public/img/brand/nextech.png";
import three from "@/public/img/brand/techbox.png";
import four from "@/public/img/brand/wattse.png";
import five from "@/public/img/brand/chatbot.png";

const HomeBrand = () => {
  return (
    <div className="brand-section pt-100 pb-0">
      <div className="container">
        <div className="swiper brand-slider bor-bottom pb-100 pt-0">
          <Swiper
            slidesPerGroup={1}
            freeMode={true}
            speed={2000}
            loop={true}
            spaceBetween={20}
            roundLengths={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              1199: {
                slidesPerView: 6,
              },
              991: {
                slidesPerView: 5,
              },
              767: {
                slidesPerView: 4,
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
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeBrand;
