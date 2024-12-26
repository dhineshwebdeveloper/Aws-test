import Image from "next/image";
import one from "@/public/img/choose/ram.png";
import two from "@/public/img/choose/ssd.png";
import three from "@/public/img/choose/backups.png";
import four from "@/public/img/choose/security.png";
import five from "@/public/img/choose/safe-icon.png";
import six from "@/public/img/choose/bank-icon.png";
import seven from "@/public/img/choose/secured-icon.png";
import eight from "@/public/img/choose/support-icon.png";

const HostingFeatureThree = () => {
  return (
    <section className="choose-us-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Features
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Host on The Cloud to <br /> Keep Growing
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={one} alt="img" priority />
              </div>
              <div className="content">
                <h3>RAM & Storage</h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={two} alt="img" priority />
              </div>
              <div className="content">
                <h3>SSDs, Email & SSL</h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={three} alt="img" priority />
              </div>
              <div className="content">
                <h3>Daily Backups</h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>Maximum Security</h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={five} alt="img" priority />
              </div>
              <div className="content">
                <h3>Safe and Secured</h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={six} alt="img" priority />
              </div>
              <div className="content">
                <h3>Money-Back Guarantee</h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={seven} alt="img" priority />
              </div>
              <div className="content">
                <h3>Safe and Secured</h3>
                <p>
                  Collaboratively formulate principle capital. Progressively
                  evolve user revolutionary hosting services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={eight} alt="img" priority />
              </div>
              <div className="content">
                <h3>Dedicated Support</h3>
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

export default HostingFeatureThree;
