import Link from "next/link";
import Image from "next/image";
import ScrollTop from "./ScrollTop";
import logo from "@/public/img/logo/white-logo.svg";
import one from "@/public/img/visa-logo.png";
import two from "@/public/img/mastercard-logo.png";
import three from "@/public/img/payoneer-logo.png";
import four from "@/public/img/affirm-logo.png";

const FooterTwo = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer-section fix bg-cover"
      style={{
        backgroundImage: "url(/img/footer-bg-2.jpg)",
      }}
    >
      <div className="footer-widgets-wrapper">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <Image src={logo} alt="logo-img" priority />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Nullam interdum libero vitae pretium aliquam donec nibh
                    purus laoreet in ullamcorper vel malesuada.
                  </p>
                  <h4 className="payment-text">Payment Method</h4>
                  <ul className="brand-logo">
                    <li>
                      <Image src={one} alt="img" priority />
                    </li>
                    <li>
                      <Image src={two} alt="img" priority />
                    </li>
                    <li>
                      <Image src={three} alt="img" priority />
                    </li>
                    <li>
                      <Image src={four} alt="img" priority />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="single-footer-widget ml-50">
                <div className="widget-head">
                  <h3>Company</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="about">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Hostech About
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="pricing">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Pricing Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="faq">
                      <i className="fa-regular fa-chevrons-right"></i>
                      FAQ&apos;S
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div className="single-footer-widget style-margin">
                <div className="widget-head">
                  <h3>Hosting</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="share-hosting">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Shared Hosting
                    </Link>
                  </li>
                  <li>
                    <Link href="reseller-hosting">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Reseller Hosting
                    </Link>
                  </li>
                  <li>
                    <Link href="vps-hosting">
                      <i className="fa-regular fa-chevrons-right"></i>
                      VPS Hosting
                    </Link>
                  </li>
                  <li>
                    <Link href="cloud-hosting">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Cloud Hosting
                    </Link>
                  </li>
                  <li>
                    <Link href="dedicated-hosting">
                      <i className="fa-regular fa-chevrons-right"></i>
                      Dedicated Hosting
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-4 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="900"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Newsletter</h3>
                </div>
                <div className="footer-content">
                  <p>
                    Sign up to seargin weekly newsletter to get the latest
                    updates.
                  </p>
                  <div className="footer-input">
                    <input
                      type="email"
                      id="email2"
                      placeholder="Enter Email Address"
                    />
                    <button className="newsletter-btn" type="submit">
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <Link href="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="/">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p>
              &copy; All Copyright {currentYear} by{" "}
              <Link href="/">Hostech</Link>
            </p>
            <ul className="footer-menu">
              <li>
                <Link href="contact">Terms & Condition</Link>
              </li>
              <li>
                <Link href="contact">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <ScrollTop />
      </div>
    </footer>
  );
};

export default FooterTwo;
