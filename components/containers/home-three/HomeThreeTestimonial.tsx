"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/testimonial/testimonial.png";

const HomeThreeTestimonial = () => {
  return (
    <section
      className="testimonial-section section-padding bg-cover"
      style={{
        backgroundImage: "url(/img/testimonial/testimonial-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="testimonial-wrapper-2">
          <div className="arry-button">
            <button className="array-prev">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="array-next">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 ps-md-5">
              <div className="swiper testimonial-slider-2">
                <Swiper
                  slidesPerView={1}
                  slidesPerGroup={1}
                  freeMode={true}
                  speed={2000}
                  loop={true}
                  spaceBetween={30}
                  roundLengths={true}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".array-next",
                    prevEl: ".array-prev",
                  }}
                  className="swiper-wrapper"
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="testimonial-box-items-2">
                        <div className="icon">
                          <i className="fa-solid fa-quote-right"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit. Mauris nullam the as integer quam dolor nunc
                          semper. Ornare non nulla faucibus pulvinar as
                          vulputate tristique mauris consectetur platea.
                        </p>
                        <div className="client-info">
                          <h4>Esther Howard</h4>
                          <span>Marketing Manager </span>
                        </div>
                        <div className="star">
                          <span>Excellent Trustipilot</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="testimonial-box-items-2">
                        <div className="icon">
                          <i className="fa-solid fa-quote-right"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit. Mauris nullam the as integer quam dolor nunc
                          semper. Ornare non nulla faucibus pulvinar as
                          vulputate tristique mauris consectetur platea.
                        </p>
                        <div className="client-info">
                          <h4>Esther Howard</h4>
                          <span>Marketing Manager </span>
                        </div>
                        <div className="star">
                          <span>Excellent Trustipilot</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="testimonial-box-items-2">
                        <div className="icon">
                          <i className="fa-solid fa-quote-right"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit. Mauris nullam the as integer quam dolor nunc
                          semper. Ornare non nulla faucibus pulvinar as
                          vulputate tristique mauris consectetur platea.
                        </p>
                        <div className="client-info">
                          <h4>Esther Howard</h4>
                          <span>Marketing Manager </span>
                        </div>
                        <div className="star">
                          <span>Excellent Trustipilot</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-image">
                <Image src={one} alt="img" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThreeTestimonial;
