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
                                <div className="pricing-card-items responsive-pricing-style">
                                    <div className="wing-shape">
                                        <Image src={two} alt="img" priority />
                                    </div>
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 1 vCPU 2 GB RAM</h3>
                                            <h2 className="price mt-2">₹9,589.00</h2>
                                            <p className="price-period">per month</p>
                                        </div>


                                    </div>
                                    <ul className="pricing-list">
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            1 CPU Core
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            2 GB RAM
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            40 GB SSD Storage
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
                                    </ul>
                            

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
                                <div className="pricing-card-items responsive-pricing-style">
                                    <div className="wing-shape">
                                        <Image src={two} alt="img" priority />
                                    </div>
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 2 vCPU 4 GB RAM</h3>
                                            <h2 className="price mt-2">₹10,639.00</h2>
                                            <p className="price-period">per month</p>
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
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
                                    </ul>
                            

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
                                <div className="pricing-card-items responsive-pricing-style">
                                    <div className="wing-shape">
                                        <Image src={two} alt="img" priority />
                                    </div>
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 4 vCPU 8 GB RAM</h3>
                                            <h2 className="price mt-2">₹13,359.00</h2>
                                            <p className="price-period">per month</p>
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
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
                                    </ul>
                            

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
                                <div className="pricing-card-items responsive-pricing-style">
                                    <div className="wing-shape">
                                        <Image src={two} alt="img" priority />
                                    </div>
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 8 vCPU 16 GB RAM</h3>
                                            <h2 className="price mt-2">₹17,189.00 </h2>
                                            <p className="price-period">per month</p>
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
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
                                    </ul>
                            

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
                                <div className="pricing-card-items responsive-pricing-style">
                                    <div className="wing-shape">
                                        <Image src={two} alt="img" priority />
                                    </div>
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 16 vCPU 32 GB RAM</h3>
                                            <h2 className="price mt-2">₹21,849.00</h2>
                                            <p className="price-period">per month</p>
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
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
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
                    <div
                        id="yearly"
                        className={`tab-pane fade ${tab === 1 ? " show active " : " "}`}
                        role="tabpanel"
                    >

                        <div className="row">
                            {/* ========================================================================== */}
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
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 1 vCPU 4 GB RAM</h3>
                                            <h2 className="price mt-2">₹10,269.00</h2>
                                            <p className="price-period">per month</p>
                                        </div>


                                    </div>
                                    <ul className="pricing-list">
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            1 CPU Core
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            4 GB RAM
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            40 GB SSD Storage
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
                                    </ul>
                            

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
                                <div className="pricing-card-items responsive-pricing-style">
                                    <div className="wing-shape">
                                        <Image src={two} alt="img" priority />
                                    </div>
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 2 vCPU 8 GB RAM</h3>
                                            <h2 className="price mt-2">₹11,909.00 </h2>
                                            <p className="price-period">per month</p>
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
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
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
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 4 vCPU 16 GB RAM</h3>
                                            <h2 className="price mt-2">₹14,629.00</h2>
                                            <p className="price-period">per month</p>
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
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
                                    </ul>
                            

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
                                <div className="pricing-card-items responsive-pricing-style">
                                    <div className="wing-shape">
                                        <Image src={two} alt="img" priority />
                                    </div>
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 8 vCPU 32 GB RAM</h3>
                                            <h2 className="price mt-2">₹21,009.00</h2>
                                            <p className="price-period">per month</p>
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
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
                                    </ul>
                            

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
                                <div className="pricing-card-items responsive-pricing-style">
                                    <div className="wing-shape">
                                        <Image src={two} alt="img" priority />
                                    </div>
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 16 vCPU 64 GB RAM</h3>
                                            <h2 className="price mt-2">₹26,149.00</h2>
                                            <p className="price-period">per month</p>
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
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
                                    </ul>
                            

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
                                <div className="pricing-card-items responsive-pricing-style">
                                    <div className="wing-shape">
                                        <Image src={two} alt="img" priority />
                                    </div>
                                    <div className="icon" style={{top: "7px"}}>
                                        <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="pricing-bg">
                                        <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h3 className="card-title">Fully Managed VPS 32 vCPU 128 GB RAM</h3>
                                            <h2 className="price mt-2">₹22,669.00 </h2>
                                            <p className="price-period">per month</p>
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
                                        <li>
                                            <i className="fa-solid fa-check"></i>
                                            Dedicated team of experts to fully manage your server
                                        </li>
                                       
                    
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
        
        </section>
    );
};

export default PricingHome;
