"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/testimonial/circle.png";

const HomeTestimonial = () => {
  return (
    <section
      className="testimonial-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url(/img/section-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span
              className="white-text "
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Testimonials
            </span>
            <h2
              className="text-white "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Latest Clients Feedback
            </h2>
          </div>
          <div
            className="array-button "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <button className="array-prev">
              <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <button className="array-next">
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
        <div className="tesimonial-wrapper">
          <div className="swiper testimonial-slider">
            <Swiper
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
              breakpoints={{
                1199: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              className="swiper-wrapper"
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-card-items">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="33"
                        viewBox="0 0 44 33"
                        fill="none"
                      >
                        <path
                          d="M16 16.2929L0.5 31.7929V0.5H16V16.2929ZM43.5 16.2929L28 31.7929V0.5H43.5V16.2929Z"
                          stroke="white"
                        />
                      </svg>
                    </div>
                    <div
                      className="client-image bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-1.jpg)",
                      }}
                    >
                      <div className="circle-shape">
                        <Image src={one} alt="img" priority />
                      </div>
                    </div>
                    <p>
                      Consectetur adipiscing elit. Integer nunc viverra laoreet
                      est the is porta pretium metus aliquam eget maecenas porta
                      is nunc viverra Aenean pulvinar maximus leo
                    </p>
                    <div className="client-info">
                      <h4>Cameron Williamson</h4>
                      <span>Marketing Coordinator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-card-items">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="33"
                        viewBox="0 0 44 33"
                        fill="none"
                      >
                        <path
                          d="M16 16.2929L0.5 31.7929V0.5H16V16.2929ZM43.5 16.2929L28 31.7929V0.5H43.5V16.2929Z"
                          stroke="white"
                        />
                      </svg>
                    </div>
                    <div
                      className="client-image bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-2.jpg)",
                      }}
                    >
                      <div className="circle-shape">
                        <Image src={one} alt="img" priority />
                      </div>
                    </div>
                    <p>
                      Consectetur adipiscing elit. Integer nunc viverra laoreet
                      est the is porta pretium metus aliquam eget maecenas porta
                      is nunc viverra Aenean pulvinar maximus leo
                    </p>
                    <div className="client-info">
                      <h4>Cameron Williamson</h4>
                      <span>Marketing Coordinator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-card-items">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="33"
                        viewBox="0 0 44 33"
                        fill="none"
                      >
                        <path
                          d="M16 16.2929L0.5 31.7929V0.5H16V16.2929ZM43.5 16.2929L28 31.7929V0.5H43.5V16.2929Z"
                          stroke="white"
                        />
                      </svg>
                    </div>
                    <div
                      className="client-image bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-1.jpg)",
                      }}
                    >
                      <div className="circle-shape">
                        <Image src={one} alt="img" priority />
                      </div>
                    </div>
                    <p>
                      Consectetur adipiscing elit. Integer nunc viverra laoreet
                      est the is porta pretium metus aliquam eget maecenas porta
                      is nunc viverra Aenean pulvinar maximus leo
                    </p>
                    <div className="client-info">
                      <h4>Cameron Williamson</h4>
                      <span>Marketing Coordinator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-card-items">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="33"
                        viewBox="0 0 44 33"
                        fill="none"
                      >
                        <path
                          d="M16 16.2929L0.5 31.7929V0.5H16V16.2929ZM43.5 16.2929L28 31.7929V0.5H43.5V16.2929Z"
                          stroke="white"
                        />
                      </svg>
                    </div>
                    <div
                      className="client-image bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-1.jpg)",
                      }}
                    >
                      <div className="circle-shape">
                        <Image src={one} alt="img" priority />
                      </div>
                    </div>
                    <p>
                      Consectetur adipiscing elit. Integer nunc viverra laoreet
                      est the is porta pretium metus aliquam eget maecenas porta
                      is nunc viverra Aenean pulvinar maximus leo
                    </p>
                    <div className="client-info">
                      <h4>Cameron Williamson</h4>
                      <span>Marketing Coordinator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-card-items">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="33"
                        viewBox="0 0 44 33"
                        fill="none"
                      >
                        <path
                          d="M16 16.2929L0.5 31.7929V0.5H16V16.2929ZM43.5 16.2929L28 31.7929V0.5H43.5V16.2929Z"
                          stroke="white"
                        />
                      </svg>
                    </div>
                    <div
                      className="client-image bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-2.jpg)",
                      }}
                    >
                      <div className="circle-shape">
                        <Image src={one} alt="img" priority />
                      </div>
                    </div>
                    <p>
                      Consectetur adipiscing elit. Integer nunc viverra laoreet
                      est the is porta pretium metus aliquam eget maecenas porta
                      is nunc viverra Aenean pulvinar maximus leo
                    </p>
                    <div className="client-info">
                      <h4>Cameron Williamson</h4>
                      <span>Marketing Coordinator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial-card-items">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="33"
                        viewBox="0 0 44 33"
                        fill="none"
                      >
                        <path
                          d="M16 16.2929L0.5 31.7929V0.5H16V16.2929ZM43.5 16.2929L28 31.7929V0.5H43.5V16.2929Z"
                          stroke="white"
                        />
                      </svg>
                    </div>
                    <div
                      className="client-image bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-1.jpg)",
                      }}
                    >
                      <div className="circle-shape">
                        <Image src={one} alt="img" priority />
                      </div>
                    </div>
                    <p>
                      Consectetur adipiscing elit. Integer nunc viverra laoreet
                      est the is porta pretium metus aliquam eget maecenas porta
                      is nunc viverra Aenean pulvinar maximus leo
                    </p>
                    <div className="client-info">
                      <h4>Cameron Williamson</h4>
                      <span>Marketing Coordinator</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
