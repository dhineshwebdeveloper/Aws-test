"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/arrow.png";
import two from "@/public/img/wing-shape.png";
import three from "@/public/img/pricing/icon-1.png";
import four from "@/public/img/pricing/pricing-shape.png";

const PricingHome = () => {
  const [tab, setTab] = useState(0);

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
            <Image src={one} alt="img" priority />
          </div>
          <ul className="nav" role="tablist">
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
                Monthly
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
                Yearly
              </a>
            </li>
          </ul>
          <div className="save-text">Save 25%</div>
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
                <div className="pricing-card-items responsive-pricing-style">
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
                      <h3>Shared Hosting</h3>
                      <p>Collaboratively formulate</p>
                    </div>
                    <h2>$29</h2>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Branding and design Identity
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Web site Marketing Solutions
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Free 15 GB Linux Hosting
                    </li>
                    <li>
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
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      get Started Now{" "}
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
                <div className="pricing-card-items responsive-pricing-style">
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
                      <h3>VPS Hosting</h3>
                      <p>Collaboratively formulate</p>
                    </div>
                    <h2>$39</h2>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Branding and design Identity
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Web site Marketing Solutions
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Free 15 GB Linux Hosting
                    </li>
                    <li>
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
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      get Started Now{" "}
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
                <div className="pricing-card-items responsive-pricing-style">
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
                      <h3>Cloud Hosting</h3>
                      <p>Collaboratively formulate</p>
                    </div>
                    <h2>$59</h2>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Branding and design Identity
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Web site Marketing Solutions
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Free 15 GB Linux Hosting
                    </li>
                    <li>
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
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      get Started Now{" "}
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
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-card-items responsive-pricing-style">
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
                      <h3>Shared Hosting</h3>
                      <p>Collaboratively formulate</p>
                    </div>
                    <h2>$29</h2>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Branding and design Identity
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Web site Marketing Solutions
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Free 15 GB Linux Hosting
                    </li>
                    <li>
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
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      get Started Now{" "}
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
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>VPS Hosting</h3>
                      <p>Collaboratively formulate</p>
                    </div>
                    <h2>$39</h2>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Branding and design Identity
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Web site Marketing Solutions
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Free 15 GB Linux Hosting
                    </li>
                    <li>
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
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      get Started Now{" "}
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
                  <div className="icon">
                    <Image src={three} alt="img" priority />
                  </div>
                  <div className="pricing-bg">
                    <Image src={four} alt="img" priority />
                  </div>
                  <div className="pricing-header">
                    <div className="price-content">
                      <h3>Cloud Hosting</h3>
                      <p>Collaboratively formulate</p>
                    </div>
                    <h2>$59</h2>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Branding and design Identity
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Web site Marketing Solutions
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Free 15 GB Linux Hosting
                    </li>
                    <li>
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
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      get Started Now{" "}
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
    </section>
  );
};

export default PricingHome;
