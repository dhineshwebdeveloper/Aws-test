"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/pricing-shape.png";
import two from "@/public/img/arrow.png";

const HomeThreePricing = () => {
  const [tab, setTab] = useState(0);

  return (
    <section className="pricing-section fix section-padding section-bg">
      <div className="pricing-shape">
        <Image src={one} alt="img" priority />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span data-aos="fade-up" data-aos-duration="800">
            Pricing Plans
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Choose Awesome Plan for <br /> your Needs
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
                className="col-xl-3 col-lg-4 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="pricing-items style-2">
                  <h6 className="top-text">Regular Plans</h6>
                  <div className="pricing-header-2">
                    <div className="price-list">
                      <del>120.99</del>
                      <span>SAVE 75%</span>
                    </div>
                    <h2>
                      $99 <sub>/mo</sub>
                    </h2>
                  </div>
                  <p className="text-center">
                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
                    id lorem et
                  </p>
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
                        <i className="fa-solid fa-xmark"></i>
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
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <div className="pricing-items style-2 active">
                  <h6 className="top-text">Premium Plans</h6>
                  <div className="pricing-header-2">
                    <div className="price-list">
                      <del>120.99</del>
                      <span>SAVE 75%</span>
                    </div>
                    <h2>
                      $59 <sub>/mo</sub>
                    </h2>
                  </div>
                  <p className="text-center">
                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
                    id lorem et
                  </p>
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
                        <i className="fa-solid fa-xmark"></i>
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
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <div className="pricing-items style-2">
                  <h6 className="top-text">Business</h6>
                  <div className="pricing-header-2">
                    <div className="price-list">
                      <del>120.99</del>
                      <span>SAVE 75%</span>
                    </div>
                    <h2>
                      $39 <sub>/mo</sub>
                    </h2>
                  </div>
                  <p className="text-center">
                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
                    id lorem et
                  </p>
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
                        <i className="fa-solid fa-xmark"></i>
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
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <div className="pricing-items style-2">
                  <h6 className="top-text">Cloud Startup</h6>
                  <div className="pricing-header-2">
                    <div className="price-list">
                      <del>120.99</del>
                      <span>SAVE 75%</span>
                    </div>
                    <h2>
                      $29 <sub>/mo</sub>
                    </h2>
                  </div>
                  <p className="text-center">
                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
                    id lorem et
                  </p>
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
                        <i className="fa-solid fa-xmark"></i>
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
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-items style-2">
                  <h6 className="top-text">Regular Plans</h6>
                  <div className="pricing-header-2">
                    <div className="price-list">
                      <del>120.99</del>
                      <span>SAVE 75%</span>
                    </div>
                    <h2>
                      $99 <sub>/mo</sub>
                    </h2>
                  </div>
                  <p className="text-center">
                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
                    id lorem et
                  </p>
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
                        <i className="fa-solid fa-xmark"></i>
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
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-items style-2 active">
                  <h6 className="top-text">Premium Plans</h6>
                  <div className="pricing-header-2">
                    <div className="price-list">
                      <del>120.99</del>
                      <span>SAVE 75%</span>
                    </div>
                    <h2>
                      $59 <sub>/mo</sub>
                    </h2>
                  </div>
                  <p className="text-center">
                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
                    id lorem et
                  </p>
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
                        <i className="fa-solid fa-xmark"></i>
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
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-items style-2">
                  <h6 className="top-text">Business</h6>
                  <div className="pricing-header-2">
                    <div className="price-list">
                      <del>120.99</del>
                      <span>SAVE 75%</span>
                    </div>
                    <h2>
                      $39 <sub>/mo</sub>
                    </h2>
                  </div>
                  <p className="text-center">
                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
                    id lorem et
                  </p>
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
                        <i className="fa-solid fa-xmark"></i>
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
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="pricing-items style-2">
                  <h6 className="top-text">Cloud Startup</h6>
                  <div className="pricing-header-2">
                    <div className="price-list">
                      <del>120.99</del>
                      <span>SAVE 75%</span>
                    </div>
                    <h2>
                      $29 <sub>/mo</sub>
                    </h2>
                  </div>
                  <p className="text-center">
                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor
                    id lorem et
                  </p>
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
                        <i className="fa-solid fa-xmark"></i>
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
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThreePricing;
