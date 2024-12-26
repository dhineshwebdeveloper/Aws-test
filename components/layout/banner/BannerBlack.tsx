"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hero/hero-1-circle-left.png";
import two from "@/public/img/hero/hero-1-circle-right.png";
import three from "@/public/img/hero/hero-1-dot-left.png";
import four from "@/public/img/hero/hero-1-dot-right.png";
import five from "@/public/img/hero/activity.png";
import six from "@/public/img/breadcrumb.png";

const BannerBlack = () => {
  const calculateRemainingTime = () => {
    const now = new Date().getTime();
    const targetDate = now + 200 * 24 * 60 * 60 * 1000;
    return targetDate - now;
  };

  const [remainingTime, setRemainingTime] = useState<number>(
    calculateRemainingTime()
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const padZero = (num: number): string => num.toString().padStart(2, "0");

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <section
      className="hero-section hero-1 style-black-friday bg-cover fix"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
    >
      <div className="circle-shape-left">
        <Image src={one} alt="shape-img" priority />
      </div>
      <div className="circle-shape-right">
        <Image src={two} alt="shape-img" priority />
      </div>
      <div className="dot-left">
        <Image src={three} alt="img" priority />
      </div>
      <div className="dot-right">
        <Image src={four} alt="img" priority />
      </div>
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span
                className="sub-text-2 "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Image src={five} alt="img" priority className="me-2" />
                Black Friday
              </span>
              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <span>Black Friday</span> super Sale Hosting deals
              </h1>
              <div className="coming-soon-timer">
                <div
                  className="timer-content "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <h3 id="day">{padZero(days)}</h3>
                  <p>Days</p>
                </div>
                <div
                  className="timer-content "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <h3 id="hour">{padZero(hours)}</h3>
                  <p>hrs</p>
                </div>
                <div
                  className="timer-content "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                >
                  <h3 id="min">{padZero(minutes)}</h3>
                  <p>mins</p>
                </div>
                <div
                  className="timer-content "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  <h3 id="sec">{padZero(seconds)}</h3>
                  <p>secs</p>
                </div>
              </div>
              <Link
                href="pricing"
                className="theme-btn bg-color-2 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                view plan <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-3 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="hero-image">
              <Image src={six} alt="img" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBlack;
