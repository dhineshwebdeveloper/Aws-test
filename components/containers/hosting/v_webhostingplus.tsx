"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import two from "@/public/img/arrow.png";
import vstyles from "@/components/containers/home-three//vstyles.module.css";

const HostingPricing = () => {
    const [tab, setTab] = useState(0);

    type ModalKey = 'Launch' | 'Premium' | 'Enhance' | 'Grow';
    const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
    const modalContent: Record<ModalKey, string> = {
        Launch: `*The total amount of usable storage capacity for your particular Hosting Service(s) may differ from the represented capacity as there is required space for the operating system(s), system file(s) and other supporting file(s).<br>
**If you cancel the Web Hosting Plus product, you will lose the associated SSL certificate as well.`,
        Premium: `*The total amount of usable storage capacity for your particular Hosting Service(s) may differ from the represented capacity as there is required space for the operating system(s), system file(s) and other supporting file(s).<br>
**If you cancel the Web Hosting Plus product, you will lose the associated SSL certificate as well.`,
        Enhance: `*The total amount of usable storage capacity for your particular Hosting Service(s) may differ from the represented capacity as there is required space for the operating system(s), system file(s) and other supporting file(s).<br>
**If you cancel the Web Hosting Plus product, you will lose the associated SSL certificate as well.`,
        Grow: `*The total amount of usable storage capacity for your particular Hosting Service(s) may differ from the represented capacity as there is required space for the operating system(s), system file(s) and other supporting file(s).<br>
**If you cancel the Web Hosting Plus product, you will lose the associated SSL certificate as well.`,
    };

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
                                Monthly Plans
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
                                            <h4>Launch
                                            </h4>
                                            <p className="pt-4">
                                                For multiple basic sites.
                                            </p>
                                        </div>
                                        <h2>
                                            ₹2,309.00<sup>/ Month</sup>
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
                                                100 GB storage*
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                4 GB RAM
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                2 CPUs
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                Unmetered traffic
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                50 websites & databases
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li className="">
                                            <span>
                                                <i className="fa-solid fa-check "></i>
                                                Free, unlimited SSL for all your websites**
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>

                                    </ul>
                                    <div className="mt-3">
                                        <div
                                            onClick={() => setActiveModal("Launch")}
                                            className={`${vstyles["disclaimer-btn"]}`}
                                        >
                                            <a className="text-decoration-none">Disclaimer</a>
                                        </div>
                                    </div>
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
                                            <p className="pt-4">
                                                For multiple basic sites.
                                            </p>
                                        </div>
                                        <h2>
                                            ₹7,989.00<sup>/ Month</sup>
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
                                                400 GB storage*
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                32 GB RAM
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                16 CPUs
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                Unmetered traffic
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                200 websites & databases
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li className="">
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                Free, unlimited SSL for all your websites**
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>

                                    </ul>
                                    <div className="mt-3">
                                        <div
                                            onClick={() => setActiveModal("Premium")}
                                            className={`${vstyles[""]}`}
                                            id={vstyles["premimum1"]}
                                        >
                                            <a className="text-decoration-none" style={{ color: "white" }}>Disclaimer</a>
                                        </div>
                                    </div>
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
                                            <h4>Enhance</h4>
                                            <p className="pt-4">
                                                For high-traffic WordPress, Joomla, and other sites.
                                            </p>
                                        </div>
                                        <h2>
                                            ₹4,009.00<sup>/ Month</sup>
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
                                                200 GB storage*
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                8 GB RAM
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                4 CPUs
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                Unmetered traffic
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                100 websites & databases
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li className="">
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                Free, unlimited SSL for all your websites**
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>

                                    </ul>
                                    <div className="mt-3">
                                        <div
                                            onClick={() => setActiveModal("Enhance")}
                                            className={`${vstyles["disclaimer-btn"]}`}
                                        >
                                            <a className="text-decoration-none">Disclaimer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* =====================================*/}

                            <div
                                className="col-xl-4 col-lg-6 col-md-6 "
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="300"
                            >
                                <div className="pricing-box-items">
                                    <div className="pricing-header">
                                        <div className="price-content">
                                            <h4>Grow</h4>
                                            <p>
                                                For advanced eCommerce sites like Magento.
                                            </p>
                                        </div>
                                        <h2>
                                            ₹5,729.00<sup>/ Month</sup>
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
                                                300 GB storage*
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                16 GB RAM
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                8 CPUs
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                Unmetered traffic
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                150 websites & databases
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li className=" ">
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                Free, unlimited SSL for all your websites**
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        {/* <li className="color-2">
                      <span>
                        <i className="fa-solid fa-xmark"></i>
                        20+ Payment Methods
                      </span>
                      <i className="fa-light fa-circle-question"></i>
                    </li> */}
                                    </ul>
                                    <div className="mt-3">
                                        <div
                                            onClick={() => setActiveModal("Grow")}
                                            className={`${vstyles["disclaimer-btn"]}`}
                                        >
                                            <a className="text-decoration-none">Disclaimer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*================================*/}

                        </div>
                    </div>



                </div>
            </div>

            {activeModal && (
                <div
                    className={vstyles["modal-overlay"]}
                    onClick={() => setActiveModal(null)}
                >
                    <div
                        className={vstyles["modal-content"]}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={vstyles["modal-header"]}>
                            <h5 style={{ color: "#384BFF" }}>Disclaimer</h5>
                            <button
                                onClick={() => setActiveModal(null)}
                                className={vstyles["close-btn"]}
                                style={{ fontSize: "25px", color: "#384BFF" }}
                            >
                                &times;
                            </button>
                        </div>
                        <div
                        className="mt-3"
                            dangerouslySetInnerHTML={{
                                __html: modalContent[activeModal],
                            }}
                        />
                        <div className={vstyles["modal-footer"]}>
                            <button
                                className={`${vstyles["btn-primary"]} ${vstyles["btn-close"]}`}
                                onClick={() => setActiveModal(null)}
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

export default HostingPricing;
