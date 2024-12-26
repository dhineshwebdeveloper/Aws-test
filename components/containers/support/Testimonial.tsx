"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/testimonial/pngwing-shape.png";

const Testimonial = () => {
  return (
    <section className="testimonial-section-2 fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-bg "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            clients Testimonials
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Latest Client Feedback
          </h2>
        </div>
        <div className="swiper testimonial-slider">
          <Swiper
            spaceBetween={20}
            speed={2000}
            loop={true}
            roundLengths={true}
            modules={[Autoplay, Pagination]}
            centeredSlides={true}
            freeMode={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".dot",
              clickable: true,
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
                <div className="testimonial-box-items">
                  <div className="pngwing-shape">
                    <Image src={one} alt="shape-img" priority />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-3.jpg)",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Kristin Watson</h4>
                      <span>Web Designer</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="testimonial-box-items">
                  <div className="pngwing-shape">
                    <Image src={one} alt="shape-img" priority />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-4.jpg)",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Theresa Webb</h4>
                      <span>Web Designer</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="testimonial-box-items">
                  <div className="pngwing-shape">
                    <Image src={one} alt="shape-img" priority />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-5.jpg)",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Ronald Richards</h4>
                      <span>Web Designer</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="testimonial-box-items">
                  <div className="pngwing-shape">
                    <Image src={one} alt="shape-img" priority />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-3.jpg)",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Kristin Watson</h4>
                      <span>Web Designer</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="testimonial-box-items">
                  <div className="pngwing-shape">
                    <Image src={one} alt="shape-img" priority />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-4.jpg)",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Theresa Webb</h4>
                      <span>Web Designer</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="testimonial-box-items">
                  <div className="pngwing-shape">
                    <Image src={one} alt="shape-img" priority />
                  </div>
                  <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-5.jpg)",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Ronald Richards</h4>
                      <span>Web Designer</span>
                    </div>
                    <div className="icon">
                      <i className="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-dot mt-5">
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
