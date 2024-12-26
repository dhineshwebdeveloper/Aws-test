import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/affiliate.png";

const AffiliateProgram = () => {
  return (
    <section className="affiliate-section fix section-padding pb-0">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Affiliate Program
          </span>
          <h2
            className="mb-3 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            How Affiliate Works
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed
            odio massa
          </p>
        </div>
        <div className="row g-0">
          <div
            className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="affiliate-card-items">
              <h6 className="top-text">All Plan Features</h6>
              <div className="pricing-header">
                <div className="affiliate-img">
                  <Image src={one} alt="img" priority />
                </div>
              </div>
              <ul>
                <li>cPanel Accounts</li>
                <li>Disk Space</li>
                <li>Bandwidth (Traffic)</li>
                <li>CPU Cores(per cPanel account)</li>
                <li>RAM(per cPanel account)</li>
                <li>Hosting type</li>
                <li>Multisite ready</li>
                <li>PHP 7 ready</li>
                <li>Money-Back Guarantee</li>
              </ul>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="affiliate-card-items">
              <h6 className="top-text">Regular Plans</h6>
              <div className="pricing-header">
                <div className="price-list">
                  <del>120.99</del>
                  <span>SAVE 75%</span>
                </div>
                <h2>
                  $99 <sub>/mo</sub>
                </h2>
                <p className="text-center">
                  Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id
                  lorem et
                </p>
                <Link href="contact" className="theme-btn">
                  get Started Now{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
              <ul className="text-center">
                <li>50</li>
                <li>40 GB</li>
                <li>4 tB</li>
                <li>2</li>
                <li>3 BG</li>
                <li>Shared</li>
                <li>
                  <i className="fa-regular fa-check"></i>
                </li>
                <li>
                  <i className="fa-regular fa-check"></i>
                </li>
                <li>28 DAY</li>
              </ul>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="affiliate-card-items active">
              <h6 className="top-text">Premium plans</h6>
              <div className="pricing-header">
                <div className="price-list">
                  <del>120.99</del>
                  <span>SAVE 75%</span>
                </div>
                <h2>
                  $69 <sub>/mo</sub>
                </h2>
                <p className="text-center">
                  Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id
                  lorem et
                </p>
                <Link href="contact" className="theme-btn">
                  get Started Now{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
              <ul className="text-center">
                <li>90</li>
                <li>80 GB</li>
                <li>6 TB</li>
                <li>2</li>
                <li>3 BG</li>
                <li>Shared</li>
                <li>
                  <i className="fa-regular fa-check"></i>
                </li>
                <li>
                  <i className="fa-regular fa-check"></i>
                </li>
                <li>28 DAY</li>
              </ul>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="affiliate-card-items">
              <h6 className="top-text">Business</h6>
              <div className="pricing-header">
                <div className="price-list">
                  <del>120.99</del>
                  <span>SAVE 75%</span>
                </div>
                <h2>
                  $39 <sub>/mo</sub>
                </h2>
                <p className="text-center">
                  Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id
                  lorem et
                </p>
                <Link href="contact" className="theme-btn">
                  get Started Now{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
              <ul className="text-center">
                <li>110</li>
                <li>150 GB</li>
                <li>8 TB</li>
                <li>2</li>
                <li>3 BG</li>
                <li>Shared</li>
                <li>
                  <i className="fa-regular fa-check"></i>
                </li>
                <li>
                  <i className="fa-regular fa-check"></i>
                </li>
                <li>28 DAY</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateProgram;
