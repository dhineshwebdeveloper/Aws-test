"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/hosting-2.png";
import two from "@/public/img/hosting/web-host-icon.png";
import three from "@/public/img/hosting/vps-host-icon.png";
import four from "@/public/img/hosting/cloud-host-icon.png";

const HomeFourHosting = () => {
  const [tab, setTab] = useState(0);

  return (
    <section className="feature-hosting-section fix section-padding">
      <div className="container">
        <div className="feature-content-warpper style-3">
          <div className="row g-4 justify-content-between align-items-center">
            <div
              className="col-lg-5 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="hosting-image">
                <Image src={one} alt="img" priority />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-hosting-content">
                <div className="section-title">
                  <span data-aos="fade-up" data-aos-duration="800">
                    Best hosting
                  </span>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    A Successful Web Hosting <br /> Migration Story
                  </h2>
                </div>
                <div className="feature-hosting-tab-area mt-4 mt-md-0">
                  <ul className="nav">
                    <li
                      className="nav-item "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="300"
                    >
                      <a
                        data-bs-toggle="tab"
                        onClick={() => setTab(0)}
                        className={`nav-link px-0 ${
                          tab === 0 ? " active " : " "
                        }`}
                      >
                        <h5>
                          <Image src={two} alt="img" priority />
                          Web Hosting
                        </h5>
                      </a>
                    </li>
                    <li
                      className="nav-item "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="500"
                    >
                      <a
                        data-bs-toggle="tab"
                        onClick={() => setTab(1)}
                        className={`nav-link ${tab === 1 ? " active " : " "}`}
                      >
                        <h5>
                          <Image src={three} alt="img" priority />
                          VPS Hosting
                        </h5>
                      </a>
                    </li>
                    <li
                      className="nav-item "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="700"
                    >
                      <a
                        data-bs-toggle="tab"
                        onClick={() => setTab(2)}
                        className={`nav-link ${tab === 2 ? " active " : " "}`}
                      >
                        <h5>
                          <Image src={four} alt="img" priority />
                          Cloud Hosting
                        </h5>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    id="web"
                    className={`tab-pane fade ${
                      tab === 0 ? " show active " : " "
                    }`}
                  >
                    <p
                      className="mt-3 mt-md-0 "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="300"
                    >
                      Pellentesque varius mauris sit amet nisi tincidunt finibus
                      Donec faucibus diam quis feugiat accumsan Integer molestie
                      sapien ut ipsum fermentum feugiat Curabitur.
                    </p>
                    <div className="list-items">
                      <ul
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="500"
                      >
                        <li>
                          <i className="far fa-check"></i>
                          Auto Backup & Cloud Storage
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          Free Supersonic CDN
                        </li>
                      </ul>
                      <ul
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="700"
                      >
                        <li>
                          <i className="far fa-check"></i>
                          Understanding brand perception
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          100 Subdomains per account
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="about"
                      className="theme-btn "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="500"
                    >
                      Explore More{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                  <div
                    id="vps"
                    className={`tab-pane fade ${
                      tab === 1 ? " show active " : " "
                    }`}
                  >
                    <p className="mt-3 mt-md-0">
                      Pellentesque varius mauris sit amet nisi tincidunt finibus
                      Donec faucibus diam quis feugiat accumsan Integer molestie
                      sapien ut ipsum fermentum feugiat Curabitur.
                    </p>
                    <div className="list-items">
                      <ul>
                        <li>
                          <i className="far fa-check"></i>
                          Auto Backup & Cloud Storage
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          Free Supersonic CDN
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i className="far fa-check"></i>
                          Understanding brand perception
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          100 Subdomains per account
                        </li>
                      </ul>
                    </div>
                    <Link href="about" className="theme-btn">
                      Explore More{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                  <div
                    id="cloud"
                    className={`tab-pane fade ${
                      tab === 2 ? " show active " : " "
                    }`}
                  >
                    <p className="mt-3 mt-md-0">
                      Pellentesque varius mauris sit amet nisi tincidunt finibus
                      Donec faucibus diam quis feugiat accumsan Integer molestie
                      sapien ut ipsum fermentum feugiat Curabitur.
                    </p>
                    <div className="list-items">
                      <ul>
                        <li>
                          <i className="far fa-check"></i>
                          Auto Backup & Cloud Storage
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          Free Supersonic CDN
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i className="far fa-check"></i>
                          Understanding brand perception
                        </li>
                        <li>
                          <i className="far fa-check"></i>
                          100 Subdomains per account
                        </li>
                      </ul>
                    </div>
                    <Link href="about" className="theme-btn">
                      Explore More{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
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

export default HomeFourHosting;
