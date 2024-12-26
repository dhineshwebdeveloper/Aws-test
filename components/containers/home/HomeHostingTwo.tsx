import Image from "next/image";
import one from "@/public/img/hosting/icon-9.png";
import two from "@/public/img/hosting/icon-10.png";
import three from "@/public/img/hosting/hosting.png";

const HomeHostingTwo = () => {
  return (
    <section className="hosting section-padding fix">
      <div className="container">
        <div className="hosting-wrapper">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="hosting-content">
                <div className="section-title">
                  <span data-aos="fade-up" data-aos-duration="800">
                    Best hosting
                  </span>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    Get Started Fast & Easily with Best Hosting
                  </h2>
                </div>
                <div
                  className="hosting-items mt-4 mt-md-0"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <div className="icon">
                    <Image src={one} alt="img" priority />
                  </div>
                  <div className="content">
                    <h4>Better Security and faster Server</h4>
                    <p>
                      Cursus libero sit amet ultrices. Nullam sit amet ornare
                      neque duis vitae congue ante, nec tempus quam. Donec non.
                    </p>
                  </div>
                </div>
                <div
                  className="hosting-items "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                >
                  <div className="icon">
                    <Image src={two} alt="img" priority />
                  </div>
                  <div className="content">
                    <h4>Better Security and faster Server</h4>
                    <p>
                      Cursus libero sit amet ultrices. Nullam sit amet ornare
                      neque duis vitae congue ante, nec tempus quam. Donec non.
                    </p>
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
              <div className="hosting-image">
                <Image src={three} alt="img" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHostingTwo;
