import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/feature.jpg";

const HomeTwoFeature = () => {
  return (
    <section className="feature-section section-padding pt-0">
      <div className="container">
        <div className="feature-wrapper">
          <div className="row g-4 align-items-center">
            <div
              className="col-lg-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="feature-image">
                <Image src={one} alt="img" priority />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-content">
                <div className="section-title">
                  <span
                    className="style-bg "
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    feature
                  </span>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    Enhanced Security Capabilities
                  </h2>
                </div>
                <p
                  className="mt-3 mt-md-0 "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  Till, having your own dedicated physical computer at a center
                  does improve your security because you have a reduced risk of
                  experiencing security breaches from other sites that you would
                  normally share hardware with. However,
                </p>
                <div className="feature-list">
                  <ul
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <li>
                      <i className="fa-duotone fa-check"></i>
                      Software updates and patching
                    </li>
                    <li>
                      <i className="fa-duotone fa-check"></i>
                      oftware updates and patching,
                    </li>
                  </ul>
                  <ul
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                  >
                    <li>
                      <i className="fa-duotone fa-check"></i>
                      device security using Endpoint
                    </li>
                    <li>
                      <i className="fa-duotone fa-check"></i>
                      Cloud migration consultancy,
                    </li>
                  </ul>
                </div>
                <Link
                  href="contact"
                  className="theme-btn "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  Get Started <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoFeature;
