"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/arrow.png";
import two from "@/public/img/wing-shape.png";
import three from "@/public/img/pricing/icon-1.png";
import four from "@/public/img/pricing/pricing-shape.png";
import vstyles from "./vstyles.module.css"
const PricingHome = () => {
  const [tab, setTab] = useState(0);
  const [activeModal, setActiveModal] = useState(false);

  return (
    <section className="pricing-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Pricing Plans
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Get the More Powerful With Hostech <br /> Website Hosting Plans
          </h2>
        </div>
        <div className="pricing-tab-header">
          <div className="arrow-shape">
            <Image src={one} style={{ margin: '20px 35px' }} alt="img" priority />
          </div>
          <ul className="nav" style={{ maxWidth: 370 }} role="tablist">
            <li
              className="nav-item "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              role="presentation"
            >
              <a
                onClick={() => setTab(0)}
                data-bs-toggle="tab"
                className={`nav-link ${tab === 0 ? " active " : " "}`}
                aria-selected="true"
                role="tab"
              >
                Performance
              </a>
            </li>
            <li
              className="nav-item "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              role="presentation"
            >
              <a
                onClick={() => setTab(1)}
                data-bs-toggle="tab"
                className={`nav-link ${tab === 1 ? " active " : " "}`}
                aria-selected="false"
                role="tab"
              >
                High Performance
              </a>
            </li>
          </ul>
          <div className="save-text" style={{ marginLeft: '44%' }}>Save 25%</div>
        </div>
        <div className="tab-content">
          <div
            id="monthly"
            className={`tab-pane fade ${tab === 0 ? " show active " : " "}`}
            role="tabpanel"
          >
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="pricing-card-items responsive-pricing-style" style={{height:'520px'}}>
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>1 vCPU</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <div className="">
                      <h2>₹399.00</h2>
                      <p >per month</p>
                    </div>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      B1 CPU Core
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      1 GB RAM
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      20 GB SSD Storage
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Linux only, no control panel*
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Download Data
                    </li>
                    <li className="color-2">
                      <i className="fa-solid fa-xmark"></i>
                      Dedicated IP Address
                    </li> */}
                  </ul>
                  <div className=" ms-5 mt-3">
                    <div
                      onClick={() => setActiveModal(true)}
                      className={`${vstyles["disclaimer-btn"]}`}
                    >
                      <a className="text-decoration-none">Disclaimer</a>
                    </div>
                  </div>


                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Configure Your Server{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="pricing-card-items responsive-pricing-style" style={{height:'520px'}}>
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>2 vCPU</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <div className="">
                      <h2>₹2,259.00</h2>

                      <p>per month</p>
                    </div>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      2 CPU Cores
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      4 GB RAM
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      100 GB SSD Storage
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Download Data
                    </li> */}
                    {/* <li className="color-2">
                      <i className="fa-solid fa-xmark"></i>
                      Linux only, no control panel*
                    </li> */}
                  </ul>

                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn" style={{top:'84px'}}>
                      Configure Your Server{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="pricing-card-items responsive-pricing-style" style={{height:'520px'}}>
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>



                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>4 vCPU</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <div className="">
                      <h2>₹4,489.00</h2>
                      <p> per month</p>
                    </div>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      4 CPU Cores
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      8 GB RAM
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      200 GB SSD Storage
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Download Data
                    </li> */}
                    {/* <li className="color-2">
                      <i className="fa-solid fa-xmark"></i>
                      Linux only, no control panel*
                    </li> */}
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn" style={{top:'84px'}}>
                      Configure Your Server{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <div className="pricing-card-items responsive-pricing-style" style={{height:'520px'}}>
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>8 vCPU</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <div className="">
                      <h2>₹7,759.00</h2>
                      <p>per month</p>
                    </div>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      8 CPU Cores
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      16 GB RAM
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      400 GB SSD Storage
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Download Data
                    </li> */}
                    {/* <li className="color-2">
                      <i className="fa-solid fa-xmark"></i>
                      Linux only, no control panel*
                    </li> */}
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn" style={{top:'40px'}}>
                      Configure Your Server {" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="700"
              >
                <div className="pricing-card-items responsive-pricing-style" style={{height:'520px'}}>
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>16 vCPU</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <div className="">

                      <h2>₹13,039.00 </h2>
                      <p> per month</p>
                    </div>

                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      16 CPU Cores
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      32 GB RAM
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      800 GB SSD Storage
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Download Data
                    </li> */}
                    {/* <li className="color-2">
                      <i className="fa-solid fa-xmark"></i>
                      Linux only, no control panel*
                    </li> */}
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn" style={{top:'40px'}}>
                      Configure Your Server{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="yearly"
            className={`tab-pane fade ${tab === 1 ? " show active " : " "}`}
            role="tabpanel"
          >

            <div className="row">
              {/* ========================================================================== */}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon" style={{ top: '-12px' }}>
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>2 vCPU</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <div className="">
                      <h2>₹3,449.00</h2>
                      <p>per month</p>
                    </div>

                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      2 CPU Cores
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      8 GB RAM
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      100 GB SSD Storage
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Download Data
                    </li>
                    <li className="color-2">
                      <i className="fa-solid fa-xmark"></i>
                      Dedicated IP Address
                    </li> */}
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn" >
                      Configure Your Server{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon" style={{ top: '-12px' }}>
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>4 vCPU</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <div className="">
                      <h2>₹5,609.00</h2>
                      <p>per month</p>
                    </div>

                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      4 CPU Cores
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      16 GB RAM
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      200 GB SSD Storage
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Download Data
                    </li>
                    <li className="color-2">
                      <i className="fa-solid fa-xmark"></i>
                      Dedicated IP Address
                    </li> */}
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Configure Your Server{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* ========================================================================== */}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon" style={{ top: '-12px' }}>
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>8 vCPU</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <div className="">
                      <h2>₹12,589.00</h2>
                      <p>per month</p>
                    </div>

                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      8 CPU Cores
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      32 GB RAM
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      400 GB SSD Storage
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Download Data
                    </li>
                    <li className="color-2">
                      <i className="fa-solid fa-xmark"></i>
                      Dedicated IP Address
                    </li> */}
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Configure Your Server{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon" style={{ top: '-12px' }}>
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>16 vCPU</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <div className="">
                      <h2>₹16,669.00 </h2>
                      <p> per month</p>
                    </div>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      16 CPU Cores
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      64 GB RAM
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      800 GB SSD Storage
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Download Data
                    </li>
                    <li className="color-2">
                      <i className="fa-solid fa-xmark"></i>
                      Dedicated IP Address
                    </li> */}
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Configure Your Server{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items responsive-pricing-style">
                  <div className="wing-shape">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="icon" style={{ top: '-12px' }}>
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>C32 vCPU</h3>
                      {/* <p>Collaboratively formulate</p> */}
                    </div>
                    <div className="">
                      <h2>₹22,669.00</h2>
                      <p>per month</p>
                    </div>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      32 CPU Cores
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      128 GB RAM
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      1.5 TB SSD Storage
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Unlimited Download Data
                    </li>
                    <li className="color-2">
                      <i className="fa-solid fa-xmark"></i>
                      Dedicated IP Address
                    </li> */}
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Configure Your Server{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pricing-title "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >


          <p>
            Cost-effective hosting that delivers secure, reliable performance.{" "}
          </p>
          <Link href="pricing" className="theme-btn">
            See all plan & details
          </Link>
        </div>
      </div>
      {activeModal && (
        <div
          className={vstyles["modal-overlay"]}
          onClick={() => setActiveModal(false)}
        >
          <div
            className={vstyles["modal-content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={vstyles["modal-header"]}>
              <h5 className={vstyles["modal-title"]}>Disclaimer</h5>
              <button
                onClick={() => setActiveModal(false)}
                className={vstyles["close-btn"]}
              >
                &times;
              </button>
            </div>
            <div className={vstyles["modal-body"]}>
              <p className="disclaimer">
                *If you’re running a high-resource intensive Windows OS or control
                panel, we strongly recommend a minimum of 2 GB of RAM. (The 1 GB plan
                will result in deficient server performance.)
              </p>
            </div>
            <div className={vstyles["modal-footer"]}>
              <button
                className={`${vstyles["btn-primary"]} ${vstyles["btn-close"]}`}
                onClick={() => setActiveModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>


      )}
    </section>
  );
};

export default PricingHome;
