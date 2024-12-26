import Image from "next/image";
import one from "@/public/img/feature-icon/icon-5.png";
import two from "@/public/img/feature-icon/icon-6.png";
import three from "@/public/img/feature-icon/icon-7.png";
import four from "@/public/img/feature-icon/icon-8.png";

const HomeFourChooseTwo = () => {
  return (
    <section
      className="choose-us-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url(/img/feature-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border-white text-white "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Why choose uS
          </span>
          <h2
            className="mb-3 text-white "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Why Choose Hostech
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
        <div className="choose-us-top-inner style-2">
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
            <div className="choose-us-card-items style-2">
              <div className="icon">
                <Image src={one} alt="img" priority />
              </div>
              <div className="content">
                <h3>Bay a Domain</h3>
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
            <div className="choose-us-card-items style-2">
              <div className="icon">
                <Image src={two} alt="img" priority />
              </div>
              <div className="content">
                <h3>Find the Right Hosting</h3>
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
            <div className="choose-us-card-items style-2">
              <div className="icon">
                <Image src={three} alt="img" priority />
              </div>
              <div className="content">
                <h3>Add Professional Email</h3>
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
            <div className="choose-us-card-items style-2">
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>Boost Performance</h3>
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

export default HomeFourChooseTwo;
