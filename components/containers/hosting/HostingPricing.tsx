"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import two from "@/public/img/arrow.png";

const HostingPricing = () => {
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
            <Image src={two} alt="img" priority />
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
                data-bs-toggle="tab"
                onClick={() => setTab(0)}
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
                data-bs-toggle="tab"
                onClick={() => setTab(1)}
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
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Regular Plans</h4>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                    </div>
                    <h2>
                      $49<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Weekly Backups
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Free SSL
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        24/7 system Monitoring
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain ($9.99 value)
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        20+ Payment Methods
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <div className="pricing-box-items active">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Premium Plans</h4>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                    </div>
                    <h2>
                      $69<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Weekly Backups
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Free SSL
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        24/7 system Monitoring
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain ($9.99 value)
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        20+ Payment Methods
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="700"
              >
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Cloud Startup</h4>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                    </div>
                    <h2>
                      $79<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Weekly Backups
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Free SSL
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        24/7 system Monitoring
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain ($9.99 value)
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        20+ Payment Methods
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
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
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Regular Plans</h4>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                    </div>
                    <h2>
                      $49<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Weekly Backups
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Free SSL
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        24/7 system Monitoring
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain ($9.99 value)
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        20+ Payment Methods
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-box-items active">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Premium Plans</h4>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                    </div>
                    <h2>
                      $69<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Weekly Backups
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Free SSL
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        24/7 system Monitoring
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain ($9.99 value)
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        20+ Payment Methods
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-box-items">
                  <div className="pricing-header">
                    <div className="price-content">
                      <h4>Cloud Startup</h4>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                    </div>
                    <h2>
                      $79<sup>/ Month</sup>
                    </h2>
                  </div>
                  <div className="pricing-button">
                    <Link href="contact" className="theme-btn">
                      Get Started Now
                    </Link>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        100 GB SSD Storage
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Weekly Backups
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Free SSL
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        24/7 system Monitoring
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Free Domain ($9.99 value)
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        20+ Payment Methods
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingPricing;
