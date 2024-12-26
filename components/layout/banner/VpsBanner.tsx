import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hero/hero-1-circle-left.png";
import two from "@/public/img/hero/hero-1-circle-right.png";
import three from "@/public/img/hero/hero-1-dot-left.png";
import four from "@/public/img/hero/hero-1-dot-right.png";
import five from "@/public/img/hero/activity.png";
import six from "@/public/img/breadcrumb.png";

const VpsBanner = () => {
  return (
    <section
      className="hero-section hero-1 style-hosting bg-cover fix"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
    >
      <div className="circle-shape-left">
        <Image src={one} alt="shape-img" priority />
      </div>
      <div className="circle-shape-right">
        <Image src={two} alt="shape-img" priority />
      </div>
      <div className="dot-left">
        <Image src={three} alt="img" priority />
      </div>
      <div className="dot-right">
        <Image src={four} alt="img" priority />
      </div>
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span
                className="sub-text-2 "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Image src={five} alt="img" priority className="me-2" />
                Dedicated Starter Plan - 12 months for $99/month
              </span>
              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Managed Dedicated Server Hosting
              </h1>
              <div
                className="hero-list-items "
                data-aos="fade-up"
                data-aos-duration="800"
                aria-errormessage=".5s"
              >
                <ul className="hero-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Lifetime Free Wildcard SLL certificate
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    24/7 Chat, call & Ticket Support
                  </li>
                </ul>
                <ul className="hero-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Free Domain 2 Years Billing
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    30-day money back guarantee
                  </li>
                </ul>
              </div>
              <Link
                href="pricing"
                className="theme-btn bg-color-2 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="700"
              >
                view plan <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-3 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="hero-image">
              <Image src={six} alt="img" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VpsBanner;
