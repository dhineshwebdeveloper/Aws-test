"use client";
import { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import Counter from "../Counter";
import one from "@/public/img/about/shape.png";
import two from "@/public/img/about/01.jpg";
import three from "@/public/img/about/02.png";
import four from "@/public/img/about/video-img.jpg";

const HomeThreeAbout = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="about-section section-padding fix">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="about-sub">Successful Hosting 25k+</div>
                  <div className="shape-image">
                    <Image src={one} alt="img" priority />
                  </div>
                  <div
                    className="about-image-1"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <Image src={two} alt="img" priority />
                    <div
                      className="about-image-2 "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="500"
                    >
                      <Image src={three} alt="img" priority />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span data-aos="fade-up" data-aos-duration="800">
                      ABOUT US
                    </span>
                    <h2
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="300"
                    >
                      Choose a Website Hosting Partner Right Now.
                    </h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 "
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                  >
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&apos;t look even slightly believable.
                  </p>
                  <div className="about-counter-items">
                    <div
                      className="counter-items "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="300"
                    >
                      <h2>
                        <span className="count">
                          <Counter value={50} />
                        </span>
                        k
                      </h2>
                      <h6>Global Customers</h6>
                    </div>
                    <div
                      className="counter-items ps-0 "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="500"
                    >
                      <h2>
                        <span className="count">
                          <Counter value={98} />
                        </span>
                        %
                      </h2>
                      <h6>Success Case</h6>
                    </div>
                    <div
                      className="video-thumb "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="700"
                    >
                      <Image src={four} alt="video-img" />
                      <div className="video-box">
                        <span
                          className="button-text "
                          data-aos="fade-up"
                          data-aos-duration="800"
                        >
                          <a
                            onClick={() => setOpen(true)}
                            className="video-btn ripple video-popup"
                          >
                            <i className="fa-solid fa-play"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Cn4G2lZ_g2I"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default HomeThreeAbout;
