import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/icon-1.png";
import two from "@/public/img/hosting/icon-2.png";
import three from "@/public/img/hosting/icon-3.png";
import four from "@/public/img/hosting/icon-4.png";
import five from "@/public/img/hosting/icon-5.png";
import six from "@/public/img/hosting/icon-6.png";

const HostingHome = () => {
  return (
    <section className="hosting-section fix section-padding pt-0">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span data-aos="fade-up" data-aos-duration="800">
              Best hosting
            </span>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              Discover Most Powerful Web <br /> Hosting Features
            </h2>
          </div>
          <Link
            href="vps-hosting"
            className="theme-btn "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            Explore More <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={one} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="dedicated-hosting">Dedicated Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={two} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="dedicated-hosting">Email Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={three} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="dedicated-hosting">Ecommerce Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="cloud-hosting">Cloud Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={five} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="reseller-hosting">Reseller Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={six} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="vps-hosting">VPS Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingHome;
