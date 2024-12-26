"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/img/faq.png";

const FaqSupport = () => {
  const [faq, setFaq] = useState(0);

  return (
    <section className="faq-section fix section-padding section-bg">
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4">
            <div
              className="col-lg-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="faq-image">
                <Image src={one} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title">
                  <span data-aos="fade-up" data-aos-duration="800">
                    FAQ&apos;s
                  </span>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    Prioritize Your Site&apos;s Safety and Security
                  </h2>
                </div>
                <div className="faq-accordion mt-4 mt-md-0">
                  <div className="accordion" id="accordion">
                    <div
                      className="accordion-item "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="300"
                    >
                      <h5 className="accordion-header">
                        <button
                          className={
                            (faq == 0 ? "  " : " collapsed") +
                            " accordion-button"
                          }
                          onClick={() => setFaq(faq === 0 ? -1 : 0)}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq1"
                          aria-expanded="true"
                          aria-controls="faq1"
                        >
                          How to Install WordPress theme on cPanel?
                        </button>
                      </h5>
                      <div
                        id="faq1"
                        className={`accordion-collapse collapse${
                          faq === 0 ? " show " : ""
                        }`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Nullam faucibus eleifend mi eu varius. Integer vel
                          tincidunt massa, quis semper odio. Mauris et mollis
                          quam. Nullam fringilla erat id ante commodo sodales.
                          In maximus ultrices euismod. Vivamus porta justo ex.
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="500"
                    >
                      <h5 className="accordion-header">
                        <button
                          className={
                            (faq == 1 ? "  " : " collapsed") +
                            " accordion-button"
                          }
                          onClick={() => setFaq(faq === 1 ? -1 : 1)}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq2"
                          aria-expanded="false"
                          aria-controls="faq2"
                        >
                          Do you have Custom Hosting Service?
                        </button>
                      </h5>
                      <div
                        id="faq2"
                        className={`accordion-collapse collapse${
                          faq === 1 ? " show " : ""
                        }`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Nullam faucibus eleifend mi eu varius. Integer vel
                          tincidunt massa, quis semper odio. Mauris et mollis
                          quam. Nullam fringilla erat id ante commodo sodales.
                          In maximus ultrices euismod. Vivamus porta justo ex.
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="700"
                    >
                      <h5 className="accordion-header">
                        <button
                          className={
                            (faq == 2 ? "  " : " collapsed") +
                            " accordion-button"
                          }
                          onClick={() => setFaq(faq === 2 ? -1 : 2)}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq3"
                          aria-expanded="false"
                          aria-controls="faq3"
                        >
                          Better Security And Faster Server?
                        </button>
                      </h5>
                      <div
                        id="faq3"
                        className={`accordion-collapse collapse${
                          faq === 2 ? " show " : ""
                        }`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          There are many variations of passages Lorem Ipsum but
                          the majority have suffered alteration in some form, by
                          injected humor.
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="700"
                    >
                      <h5 className="accordion-header">
                        <button
                          className={
                            (faq == 3 ? "  " : " collapsed") +
                            " accordion-button"
                          }
                          onClick={() => setFaq(faq === 3 ? -1 : 3)}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          Deployment Within Few Minutes
                        </button>
                      </h5>
                      <div
                        id="faq4"
                        className={`accordion-collapse collapse${
                          faq === 2 ? " show " : ""
                        }`}
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">
                          Nullam faucibus eleifend mi eu varius. Integer vel
                          tincidunt massa, quis semper odio. Mauris et mollis
                          quam. Nullam fringilla erat id ante commodo sodales.
                          In maximus ultrices euismod. Vivamus porta justo ex.
                        </div>
                      </div>
                    </div>
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

export default FaqSupport;
