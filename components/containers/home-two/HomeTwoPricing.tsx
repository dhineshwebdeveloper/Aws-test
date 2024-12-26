"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/pricing/icon-2.png";

const HomeTwoPricing = () => {
  const [tab, setTab] = useState(0);

  return (
    <section
      className="pricing-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url(/img/pricing-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-bg-2 text-white "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Pricing Plans
          </span>
          <h2
            className="text-white "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Choose Awesome Plan for <br /> your Needs
          </h2>
        </div>
        <div className="pricing-tab-header style-2">
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
                Domain & Hosting
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
                Dedicated Server
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
                onClick={() => setTab(2)}
                className={`nav-link ${tab === 2 ? " active " : " "}`}
                aria-selected="false"
                role="tab"
              >
                Private Server
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div
            id="domain"
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
                <div className="pricing-items">
                  <div className="tag">
                    <h6>Regular Plans</h6>
                  </div>
                  <div className="pricing-header">
                    <div className="icon">
                      <Image src={one} alt="img" priority />
                    </div>
                    <h2>$99</h2>
                    <span className="month">Par month</span>
                    <del className="price-text">$129</del>
                    <p>
                      Lnteger sapien nec sapien sollicitudin ultrices Cras
                      tempor id lorem et
                    </p>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Branding and design Identity
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Web site Marketing Solutions
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Application Installation
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
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn mt-4">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
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
                <div className="pricing-items">
                  <div className="tag">
                    <h6>Premium Plans</h6>
                  </div>
                  <div className="pricing-header">
                    <div className="icon">
                      <Image src={one} alt="img" priority />
                    </div>
                    <h2>$129</h2>
                    <span className="month">Par month</span>
                    <del className="price-text">$149</del>
                    <p>
                      Lnteger sapien nec sapien sollicitudin ultrices Cras
                      tempor id lorem et
                    </p>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Branding and design Identity
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Web site Marketing Solutions
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Application Installation
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
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn mt-4">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
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
                <div className="pricing-items">
                  <div className="tag">
                    <h6>Starlight Plans</h6>
                  </div>
                  <div className="pricing-header">
                    <div className="icon">
                      <Image src={one} alt="img" priority />
                    </div>
                    <h2>$149</h2>
                    <span className="month">Par month</span>
                    <del className="price-text">$169</del>
                    <p>
                      Lnteger sapien nec sapien sollicitudin ultrices Cras
                      tempor id lorem et
                    </p>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Branding and design Identity
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Web site Marketing Solutions
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Application Installation
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
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn mt-4">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="dedicated"
            className={`tab-pane fade ${tab === 1 ? " show active " : " "}`}
            role="tabpanel"
          >
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-items">
                  <div className="tag">
                    <h6>Regular Plans</h6>
                  </div>
                  <div className="pricing-header">
                    <div className="icon">
                      <Image src={one} alt="img" priority />
                    </div>
                    <h2>$99</h2>
                    <span className="month">Par month</span>
                    <del className="price-text">$129</del>
                    <p>
                      Lnteger sapien nec sapien sollicitudin ultrices Cras
                      tempor id lorem et
                    </p>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Branding and design Identity
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Web site Marketing Solutions
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Application Installation
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
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn mt-4">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-items">
                  <div className="tag">
                    <h6>Premium Plans</h6>
                  </div>
                  <div className="pricing-header">
                    <div className="icon">
                      <Image src={one} alt="img" priority />
                    </div>
                    <h2>$129</h2>
                    <span className="month">Par month</span>
                    <del className="price-text">$149</del>
                    <p>
                      Lnteger sapien nec sapien sollicitudin ultrices Cras
                      tempor id lorem et
                    </p>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Branding and design Identity
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Web site Marketing Solutions
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Application Installation
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
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn mt-4">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-items">
                  <div className="tag">
                    <h6>Starlight Plans</h6>
                  </div>
                  <div className="pricing-header">
                    <div className="icon">
                      <Image src={one} alt="img" priority />
                    </div>
                    <h2>$149</h2>
                    <span className="month">Par month</span>
                    <del className="price-text">$169</del>
                    <p>
                      Lnteger sapien nec sapien sollicitudin ultrices Cras
                      tempor id lorem et
                    </p>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Branding and design Identity
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Web site Marketing Solutions
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Application Installation
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
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn mt-4">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="private"
            className={`tab-pane fade ${tab === 2 ? " show active " : " "}`}
            role="tabpanel"
          >
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-items">
                  <div className="tag">
                    <h6>Regular Plans</h6>
                  </div>
                  <div className="pricing-header">
                    <div className="icon">
                      <Image src={one} alt="img" priority />
                    </div>
                    <h2>$99</h2>
                    <span className="month">Par month</span>
                    <del className="price-text">$129</del>
                    <p>
                      Lnteger sapien nec sapien sollicitudin ultrices Cras
                      tempor id lorem et
                    </p>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Branding and design Identity
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Web site Marketing Solutions
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Application Installation
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
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn mt-4">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-items">
                  <div className="tag">
                    <h6>Premium Plans</h6>
                  </div>
                  <div className="pricing-header">
                    <div className="icon">
                      <Image src={one} alt="img" priority />
                    </div>
                    <h2>$129</h2>
                    <span className="month">Par month</span>
                    <del className="price-text">$149</del>
                    <p>
                      Lnteger sapien nec sapien sollicitudin ultrices Cras
                      tempor id lorem et
                    </p>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Branding and design Identity
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Web site Marketing Solutions
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Application Installation
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
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn mt-4">
                      get Started Now
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="pricing-items">
                  <div className="tag">
                    <h6>Starlight Plans</h6>
                  </div>
                  <div className="pricing-header">
                    <div className="icon">
                      <Image src={one} alt="img" priority />
                    </div>
                    <h2>$149</h2>
                    <span className="month">Par month</span>
                    <del className="price-text">$169</del>
                    <p>
                      Lnteger sapien nec sapien sollicitudin ultrices Cras
                      tempor id lorem et
                    </p>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Branding and design Identity
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Web site Marketing Solutions
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                        Unlimited Application Installation
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
                    <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        Dedicated IP Address
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li>
                  </ul>
                  <div className="pricing-button">
                    <Link href="contact" className="pricing-btn mt-4">
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

export default HomeTwoPricing;
