"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import five from "@/public/img/team/05.jpg";
import six from "@/public/img/team/06.jpg";
import seven from "@/public/img/team/07.jpg";
import eight from "@/public/img/team/08.jpg";

const TeamSlider = () => {
  return (
    <section className="team-section-details fix section-padding pt-0">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title mb-0">
            <span>Our Expert</span>
            <h2>Other team Member</h2>
          </div>
          <div className="arry-button">
            <button className="array-prev">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="array-next">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="swiper team-slider">
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
                slidesPerView: 4,
              },
              991: {
                slidesPerView: 3,
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
                <div className="team-card-item">
                  <div className="team-image">
                    <Image src={five} alt="img" priority />
                  </div>
                  <div
                    className="team-content bg-cover"
                    style={{
                      backgroundImage: "url(/img/team/team-shape.png)",
                    }}
                  >
                    <h5>
                      <Link href="team-details">Esther Howard</Link>
                    </h5>
                    <p>Legal adviser</p>
                    <div className="social-profile">
                      <ul>
                        <li>
                          <Link href="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-card-item">
                  <div className="team-image">
                    <Image src={six} alt="img" priority />
                  </div>
                  <div
                    className="team-content bg-cover"
                    style={{
                      backgroundImage: "url(/img/team/team-shape.png)",
                    }}
                  >
                    <h5>
                      <Link href="team-details">Wade Warren</Link>
                    </h5>
                    <p>Nursing Assistant</p>
                    <div className="social-profile">
                      <ul>
                        <li>
                          <Link href="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-card-item">
                  <div className="team-image">
                    <Image src={seven} alt="img" priority />
                  </div>
                  <div
                    className="team-content bg-cover"
                    style={{
                      backgroundImage: "url(/img/team/team-shape.png)",
                    }}
                  >
                    <h5>
                      <Link href="team-details">Bessie Cooper</Link>
                    </h5>
                    <p>UI/UX Designer</p>
                    <div className="social-profile">
                      <ul>
                        <li>
                          <Link href="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-card-item">
                  <div className="team-image">
                    <Image src={eight} alt="img" priority />
                  </div>
                  <div
                    className="team-content bg-cover"
                    style={{
                      backgroundImage: "url(/img/team/team-shape.png)",
                    }}
                  >
                    <h5>
                      <Link href="team-details">Kathryn Murphy</Link>
                    </h5>
                    <p>Physiotherapist</p>
                    <div className="social-profile">
                      <ul>
                        <li>
                          <Link href="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-card-item">
                  <div className="team-image">
                    <Image src={five} alt="img" priority />
                  </div>
                  <div
                    className="team-content bg-cover"
                    style={{
                      backgroundImage: "url(/img/team/team-shape.png)",
                    }}
                  >
                    <h5>
                      <Link href="team-details">Esther Howard</Link>
                    </h5>
                    <p>Legal adviser</p>
                    <div className="social-profile">
                      <ul>
                        <li>
                          <Link href="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-card-item">
                  <div className="team-image">
                    <Image src={six} alt="img" priority />
                  </div>
                  <div
                    className="team-content bg-cover"
                    style={{
                      backgroundImage: "url(/img/team/team-shape.png)",
                    }}
                  >
                    <h5>
                      <Link href="team-details">Wade Warren</Link>
                    </h5>
                    <p>Nursing Assistant</p>
                    <div className="social-profile">
                      <ul>
                        <li>
                          <Link href="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-card-item">
                  <div className="team-image">
                    <Image src={seven} alt="img" priority />
                  </div>
                  <div
                    className="team-content bg-cover"
                    style={{
                      backgroundImage: "url(/img/team/team-shape.png)",
                    }}
                  >
                    <h5>
                      <Link href="team-details">Bessie Cooper</Link>
                    </h5>
                    <p>UI/UX Designer</p>
                    <div className="social-profile">
                      <ul>
                        <li>
                          <Link href="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-card-item">
                  <div className="team-image">
                    <Image src={eight} alt="img" priority />
                  </div>
                  <div
                    className="team-content bg-cover"
                    style={{
                      backgroundImage: "url(/img/team/team-shape.png)",
                    }}
                  >
                    <h5>
                      <Link href="team-details">Kathryn Murphy</Link>
                    </h5>
                    <p>Physiotherapist</p>
                    <div className="social-profile">
                      <ul>
                        <li>
                          <Link href="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
