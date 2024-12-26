import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/cta-man-2.png";

const HomeTwoCta = () => {
  return (
    <section
      className="cta-contct-section section-padding bg-cover fix"
      style={{
        backgroundImage: "url(/img/cta/cta-conact-bg-2.jpg)",
      }}
    >
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-8">
            <div className="cta-contact-left">
              <div className="section-title">
                <span
                  className="white-text "
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Contact Us
                </span>
                <h2
                  className="text-white "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  24/7 Expert Hosting Support <br /> Our Customers Love
                </h2>
              </div>
              <div className="cta-contact-button mt-4 mt-md-0">
                <Link
                  href="contact"
                  className="theme-btn bg-color-2 "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  WhatsApp Now <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <h4
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <i className="fa-light fa-envelope"></i>
                  <Link href="mailto:info@hostceh.com">info@hostceh.com</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="cta-contact-image mb-0">
              <Image src={one} alt="img" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoCta;
