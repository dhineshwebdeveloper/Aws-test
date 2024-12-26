import Image from "next/image";
import one from "@/public/img/choose/safe-icon.png";
import two from "@/public/img/choose/bank-icon.png";
import three from "@/public/img/choose/secured-icon.png";
import four from "@/public/img/choose/support-icon.png";

const DataChoose = () => {
  return (
    <section className="choose-us-section fix section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-bg "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Why Choose Us
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Why Choose Hostech
          </h2>
        </div>
        <div className="choose-us-top-inner">
          <ul>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Step One
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              Step Two
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              Step Three
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
              Step Four
            </li>
          </ul>
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
                <Image src={two} alt="img" priority />
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
                <Image src={three} alt="img" priority />
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
                <Image src={four} alt="img" priority />
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

export default DataChoose;
