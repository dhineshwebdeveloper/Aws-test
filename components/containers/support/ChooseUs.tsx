import Image from "next/image";
import one from "@/public/img/support/support.png";
import two from "@/public/img/support/customization.png";
import three from "@/public/img/support/technical.png";
import four from "@/public/img/support/account.png";

const ChooseUs = () => {
  return (
    <section className="choose-us-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            our Support
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            our Premium Support
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed
            odio massa
          </p>
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
                <h3>24/7 Support</h3>
                <p>24/7 priority Live Chat and ticketing support.</p>
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
                <h3>Site Customization</h3>
                <p>
                  2Collaboratively formulate principle capital. Progressively
                  evolve
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
                <h3>Technical Support </h3>
                <p>24/7/365 priority Live Chat and ticketing support.</p>
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
                <h3>Account Manager</h3>
                <p>
                  2Collaboratively formulate principle capital. Progressively
                  evolve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
