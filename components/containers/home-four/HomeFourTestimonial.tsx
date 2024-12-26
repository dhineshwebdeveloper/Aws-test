"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/testimonial/wpbeginner-dark.png";
import two from "@/public/img/testimonial/hostadvice-dark.png";
import three from "@/public/img/testimonial/capterra.png";

const HomeFourTestimonial = () => {
  return (
    <section className="testimonial-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Testimonials
          </span>
          <h2
            className="mb-3 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Impressions & Feedback
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed
            odio massa{" "}
          </p>
        </div>
        <div className="swiper testimonial-slider">
          <Swiper
            slidesPerGroup={1}
            freeMode={true}
            speed={2000}
            loop={true}
            spaceBetween={20}
            roundLengths={true}
            centeredSlides={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
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
                <div className="testimonial-card-items-2">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
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
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-bottom">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <Image src={one} alt="img" priority />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="testimonial-card-items-2">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-6.jpg)",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Esther Howard</h4>
                      <span>President of Sales</span>
                    </div>
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-bottom">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <Image src={two} alt="img" priority />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="testimonial-card-items-2">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-7.jpg)",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Courtney Henry</h4>
                      <span>Nursing Assistant</span>
                    </div>
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-bottom">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <Image src={three} alt="img" priority />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="testimonial-card-items-2">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
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
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-bottom">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <Image src={one} alt="img" priority />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="testimonial-card-items-2">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-6.jpg)",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Esther Howard</h4>
                      <span>President of Sales</span>
                    </div>
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-bottom">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <Image src={two} alt="img" priority />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="testimonial-card-items-2">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <div className="client-info">
                    <div
                      className="client-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/testimonial/client-7.jpg)",
                      }}
                    ></div>
                    <div className="content">
                      <h4>Courtney Henry</h4>
                      <span>Nursing Assistant</span>
                    </div>
                  </div>
                  <p>
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan felis sed.
                  </p>
                  <div className="client-bottom">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <Image src={three} alt="img" priority />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="testimonial-click-text "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <p>Explore more testimonials by</p>
          <Link href="contact"> Click Here</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFourTestimonial;
