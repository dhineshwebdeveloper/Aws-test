import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/icon-3.png";
import two from "@/public/img/hosting/icon-13.png";
import three from "@/public/img/hosting/icon-14.png";
import four from "@/public/img/hosting/icon-15.png";
import five from "@/public/img/hosting/icon-3.png";
import six from "@/public/img/hosting/icon-17.png";
import seven from "@/public/img/hosting/icon-18.png";
import eight from "@/public/img/hosting/icon-5.png";

const HomeFourService = () => {
  return (
    <section
      className="hosting-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url(/img/hosting/hosting-2.jpg)",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border-white text-white "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Our Services
          </span>
          <h2
            className="mb-3 text-white "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            We Provide Best Features
          </h2>
          <p
            className="text-white "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed
            odio massa{" "}
          </p>
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
                  <Link href="cloud-hosting">Linux Hosting</Link>
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
            data-aos-delay="600"
          >
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={three} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="share-hosting">VPS Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
                <Link href="vps-hosting" className="theme-btn mt-4">
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
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={five} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="cloud-hosting">Linux Hosting</Link>
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
                <Image src={six} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="cloud-hosting">Game Hosting</Link>
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
            data-aos-delay="600"
          >
            <div className="hosting-box-items">
              <div className="icon">
                <Image src={seven} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="wordpress-hosting">WordPress Hosting</Link>
                </h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
                <Link href="vps-hosting" className="theme-btn mt-4">
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
                <Image src={eight} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="reseller-hosting">Reseller Hosting</Link>
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
        <h5
          className="hosting-service-text "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          Looking for Hosting Services <Link href="service">Click Now</Link>
        </h5>
      </div>
    </section>
  );
};

export default HomeFourService;
