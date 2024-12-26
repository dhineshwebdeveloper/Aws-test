import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/icon-3.png";
import two from "@/public/img/hosting/icon-13.png";
import three from "@/public/img/hosting/icon-14.png";
import four from "@/public/img/hosting/icon-15.png";

const HomeThreeService = () => {
  return (
    <section className="hosting-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Our Services
          </span>
          <h2
            className="mb-3 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            We Provide Best Features
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed
            odio <br /> massa rhoncus ac nulla vel iaculis egestas mauris
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
        </div>
      </div>
    </section>
  );
};

export default HomeThreeService;
