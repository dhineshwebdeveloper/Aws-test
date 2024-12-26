"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/pricing-shape.png";
import two from "@/public/img/arrow.png";
import vstyles from './vstyles.module.css';


const VhomeThreePricing = () => {

    const [tab, setTab] = useState(0);

    type ModalKey = 'first' | 'second' | 'third' | 'fourth';
    const [activeModal, setActiveModal] = useState<ModalKey | null>(null);
    const modalContent: Record<ModalKey, string> = {
        first: `*Storage Capacity. The total amount of usable storage capacity for your particular Hosting Service(s) may differ from the represented capacity as there is required space for the operating system(s), system file(s), and other supporting file(s).`,
        second: `*Storage Capacity. The total amount of usable storage capacity for your particular Hosting Service(s) may differ from the represented capacity as there is required space for the operating system(s), system file(s), and other supporting file(s).<br><br>
                **We’ve added AutoSSL to this plan, a cPanel feature which is designed to automatically assign and renew SSL certificates for every website managed on your cPanel account. If you cancel the hosting plan, you will lose the associated SSL(s).`,
        third: `*Storage Capacity. The total amount of usable storage capacity for your particular Hosting Service(s) may differ from the represented capacity as there is required space for the operating system(s), system file(s), and other supporting file(s).`,
        fourth: `*Storage Capacity. The total amount of usable storage capacity for your particular Hosting Service(s) may differ from the represented capacity as there is required space for the operating system(s), system file(s), and other supporting file(s).<br><br>
                **We’ve added AutoSSL to this plan, a cPanel feature which is designed to automatically assign and renew SSL certificates for every website managed on your cPanel account. If you cancel the hosting plan, you will lose the associated SSL(s).`,
    };

    // form submition link tag
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const form = document.getElementById("form-submit") as HTMLFormElement | null;
        if (form) {
          form.submit();
        }
      };

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
                                className="col-xl-3 col-lg-4 col-md-6 "
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="200"
                            >
                                <div className="pricing-items style-2">
                                    <h6 className="top-text">Regular</h6>
                                    <div className="pricing-header-2">
                                        <div className="price-list">
                                            <del>120.99</del>
                                            <span>SAVE 75%</span>
                                        </div>
                                        <h2>
                                            ₹399.00
                                        </h2>
                                        <div className="" style={{ textAlign: "center", fontWeight: "bold" }}>Per Month</div>

                                    </div>
                                    <p className="text-center">
                                        cPanel that’s easy, reliable and lightning-fast.
                                    </p>
                                    <ul className="pricing-list">
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                1 website
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                1 database
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                10 GB storage*
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-xmark" style={{ color: 'red' }}></i>
                                                Free, unlimited SSL for all your websites**
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>


                                    </ul>


                                    {/* =========================Model=========================== */}
                                    <div>
                                        <div className="mt-3">
                                            <div
                                                onClick={() => setActiveModal("first")}
                                                className={`${vstyles["disclaimer-btn"]}`}
                                            >
                                                <a className="text-decoration-none">Disclaimer</a>
                                            </div>

                                        </div>

                                    </div>

                                    {/*=========================================================*/}
                                    <a
                                        href="#"
                                        onClick={handleClick}
                                    >
                                        <form
                                            id="form-submit"
                                            method="POST"
                                            action="https://www.secureserver.net/api/v1/cart/596796?itc=slp_rstdstore&redirect=true"
                                        >
                                            <input type="hidden" name="items" value='[{"id":"cpanel-starter","quantity":1}]' />
                                        </form>
                                        <div className="pricing-button">
                                            <span className="pricing-btn">
                                                Get Started Now
                                                <i className="fa-solid fa-arrow-right-long"></i>
                                            </span>
                                        </div>
                                    </a>

                                  {/* submit button end   */}
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-lg-4 col-md-6 "
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="400"
                            >
                                <div className="pricing-items style-2 active">
                                    <h6 className="top-text">Premium</h6>
                                    <div className="pricing-header-2">
                                        <div className="price-list">
                                            <del>120.99</del>
                                            <span>SAVE 75%</span>
                                        </div>
                                        <h2>
                                            ₹1,289.00
                                        </h2>
                                        <div className="" style={{ textAlign: "center", fontWeight: "bold" }}>Per Month</div>
                                    </div>
                                    <p className="text-center">
                                        cPanel Hosting that’s easy, reliable and lightning-fast.
                                    </p>
                                    <ul className="pricing-list">
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                25 websites
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                50 databases

                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                75 GB storage*
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                Free, unlimited SSL for all your websites**
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>

                                        <div
                                            onClick={() => setActiveModal("second")}
                                            className={`${vstyles["disclaimer-btn"]}`}
                                        >
                                            <a className="text-decoration-none">Disclaimer</a>
                                        </div>



                                    </ul>


                                    <div className="pricing-button">
                                        <Link href="contact" className="pricing-btn" id={vstyles["button"]}>
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
                                    <h6 className="top-text">Economy</h6>
                                    <div className="pricing-header-2">
                                        <div className="price-list">
                                            <del>120.99</del>
                                            <span>SAVE 75%</span>
                                        </div>
                                        <h2>
                                            ₹719.00
                                        </h2>
                                        <div className="" style={{ textAlign: "center", fontWeight: "bold" }}>Per Month</div>
                                    </div>
                                    <p className="text-center">
                                        cPanel Hosting that’s easy, reliable and lightning-fast.
                                    </p>
                                    <ul className="pricing-list">
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                1 website

                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                10 databases
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                25 GB storage*
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-xmark" style={{ color: 'red' }}></i>
                                                Free, unlimited SSL for all your websites*
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>



                                    </ul>

                                    {/* model-button */}
                                    <div className="mt-3">
                                        <div
                                            onClick={() => setActiveModal("third")}
                                            className={`${vstyles["disclaimer-btn"]}`}
                                        >
                                            <a className="text-decoration-none">Disclaimer</a>
                                        </div>

                                    </div>

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
                                    <h6 className="top-text">Deluxe</h6>
                                    <div className="pricing-header-2">
                                        <div className="price-list">
                                            <del>120.99</del>
                                            <span>SAVE 75%</span>
                                        </div>
                                        <h2>
                                            ₹1,009.00
                                        </h2>
                                        <div className="" style={{ textAlign: "center", fontWeight: "bold" }}>Per Month</div>
                                    </div>
                                    <p className="text-center">
                                        cPanel Hosting that’s easy, reliable and lightning-fast.
                                    </p>
                                    <ul className="pricing-list">
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                10 websites
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                25 databases
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                50 GB storage*
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa-solid fa-check"></i>
                                                Free, unlimited SSL for all your websites**
                                            </span>
                                            <i className="fa-light fa-circle-question"></i>
                                        </li>


                                    </ul>
                                    {/* model-button */}
                                    <div className="mt-3">
                                        <div
                                            onClick={() => setActiveModal("fourth")}
                                            className={`${vstyles["disclaimer-btn"]}`}
                                        >
                                            <a className="text-decoration-none">Disclaimer</a>
                                        </div>

                                    </div>
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

            {/* {model} */}

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
                            <h5 className={vstyles["modal-title"]}>Disclaimer</h5>
                            <button
                                onClick={() => setActiveModal(null)}
                                className={vstyles["close-btn"]}
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

export default VhomeThreePricing;
