import Image from "next/image";
import one from "@/public/img/feature-icon/icon-1.png";
import two from "@/public/img/feature-icon/icon-2.png";
import three from "@/public/img/feature-icon/icon-3.png";
import four from "@/public/img/feature-icon/icon-4.png";

const HomeThreeFeature = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature-wrapper-2">
          <div className="row g-4">
            <div
              className="col-xl-3 col-lg-6 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="feature-card-items">
                <div className="icon">
                  <Image src={one} alt="img" priority />
                </div>
                <div className="content">
                  <h3>Maximum Performance</h3>
                  <p>
                    Collaboratively formulate principle capital progressively
                    evolve
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="feature-card-items">
                <div className="icon">
                  <Image src={two} alt="img" priority />
                </div>
                <div className="content">
                  <h3>Maximum Data Transfer</h3>
                  <p>
                    Collaboratively formulate principle capital progressively
                    evolve
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <div className="feature-card-items">
                <div className="icon">
                  <Image src={three} alt="img" priority />
                </div>
                <div className="content">
                  <h3>Super Easy To Use</h3>
                  <p>
                    Collaboratively formulate principle capital progressively
                    evolve
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              <div className="feature-card-items">
                <div className="icon">
                  <Image src={four} alt="img" priority />
                </div>
                <div className="content">
                  <h3>Maximum Security</h3>
                  <p>
                    Collaboratively formulate principle capital progressively
                    evolve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThreeFeature;
