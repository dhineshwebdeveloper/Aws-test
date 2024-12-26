"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import one from "@/public/img/hero/hero-2-dot-right.png";
import two from "@/public/img/hero/circle.png";
import three from "@/public/img/hero/hero-girl.png";

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section
        className="hero-section hero-1 style-hero-3 bg-cover fix"
        style={{
          backgroundImage: "url(/img/hero/hero-bg-3.jpg)",
        }}
      >
        <div className="dot-right">
          <Image src={one} alt="img" priority />
        </div>
        <div className="hero-social">
          <span>Follow on</span>
          <Link href="/">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="/">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="/">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link href="/">
            <i className="fa-brands fa-youtube"></i>
          </Link>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Fast & secure Best web <span>Hosting</span>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  Unlimited storage, unmetered bandwidth, unbeatable hosting.{" "}
                  <br /> This gator&apos;s got ya covered.
                </p>
                <div className="hero-author">
                  <Link
                    href="contact"
                    className="theme-btn bg-color-2 "
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="700"
                  >
                    Get Started <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                  <span
                    className="button-text "
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="900"
                  >
                    <a
                      onClick={() => setOpen(true)}
                      className="video-btn ripple video-popup"
                    >
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <span className="ms-4 d-line">Watch Video</span>
                  </span>
                </div>
                <ul
                  className="hosting-list "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <li>
                    <span>.com</span>
                    $9.95
                  </li>
                  <li>
                    <span>.Info</span>
                    $11.99
                  </li>
                  <li>
                    <span>.Net</span>
                    $8.95
                  </li>
                </ul>
                <form
                  action="#"
                  className="domain-input-form "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <div className="domain-input">
                    <input type="text" placeholder="domain.com" />
                    <button className="theme-btn bg-color-2" type="submit">
                      Search Now
                    </button>
                    <div className="select-area">
                      <select name="cate" className="category">
                        <option value="1">.com</option>
                        <option value="1">.net</option>
                        <option value="1">.info</option>
                        <option value="1">.store</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-5 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="hero-image-items">
                <div className="circle-shape">
                  <Image src={two} alt="shape-img" priority />
                </div>
                <div className="hero-image">
                  <Image src={three} alt="img" priority />
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

export default BannerThree;
