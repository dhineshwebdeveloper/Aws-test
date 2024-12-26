import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/icon-4.png";
import two from "@/public/img/hosting/icon-5.png";
import three from "@/public/img/hosting/icon-7.png";
import four from "@/public/img/hosting/icon-8.png";

const HomeTwoHosting = () => {
  return (
    <section className="hosting-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span
              className="style-bg "
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Premium Feature
            </span>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              Discover all Our Web <br /> Hosting Services
            </h2>
          </div>
          <Link
            href="pricing"
            className="theme-btn "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            see all Feature <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={one} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="cloud-hosting">Cloud Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
                <Link href="cloud-hosting" className="theme-btn mt-4">
                  Best hosting <i className="fa-regular fa-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={two} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="cloud-hosting">Reseller Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
                <Link href="reseller-hosting" className="theme-btn mt-4">
                  Best hosting <i className="fa-regular fa-chevrons-right"></i>
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
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={three} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="share-hosting">Web Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
                <Link href="cloud-hosting" className="theme-btn mt-4">
                  Best hosting <i className="fa-regular fa-chevrons-right"></i>
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
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="domain">Domain Name</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
                <Link href="cloud-hosting" className="theme-btn mt-4">
                  Best hosting <i className="fa-regular fa-chevrons-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoHosting;
