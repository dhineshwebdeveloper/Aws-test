import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hero/hero-1-circle-left.png";
import two from "@/public/img/hero/hero-1-circle-right.png";
import three from "@/public/img/hero/hero-1-dot-left.png";
import four from "@/public/img/hero/hero-1-dot-right.png";
import five from "@/public/img/hero/activity.png";
import six from "@/public/img/hero/author-img.png";
import seven from "@/public/img/hero/hero-llustration.png";

const Banner = () => {
  return (
    <section
      className="hero-section hero-1 bg-cover fix"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
    >
      <div className="circle-shape-left">
        <Image src={one} alt="shape-img" />
      </div>
      <div className="circle-shape-right">
        <Image src={two} alt="shape-img" />
      </div>
      <div className="dot-left">
        <Image src={three} alt="img" priority />
      </div>
      <div className="dot-right">
        <Image src={four} alt="img" priority />
      </div>
      <div className="hero-social">
        <span>Follow on</span>
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
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-6">
            <div className="hero-content">
              <span
                className="sub-text "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Image src={five} alt="img" priority className="me-2" />
                Everything You Need to Create a Website
              </span>
              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Upgrade To Fastest Cloud Hosting Today
              </h1>
              <h6
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                Unlimited storage, unmetered bandwidth, unbeatable hosting.{" "}
                <br /> This gator&apos;s got ya covered.
              </h6>
              <div className="hero-author">
                <Link
                  href="/"
                  className="theme-btn bg-color-2 "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  Start Free <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
                <div
                  className="author-content "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="900"
                >
                  <Image src={six} alt="author-img" />
                  <div className="content">
                    <div className="star">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <p className="text-white">450+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="hero-image">
              <Image src={seven} alt="img" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
