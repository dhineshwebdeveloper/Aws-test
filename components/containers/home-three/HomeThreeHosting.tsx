import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting-boy.png";

const HomeThreeHosting = () => {
  return (
    <section className="feature-hosting-section fix section-padding">
      <div className="container">
        <div className="feature-content-warpper margin-top-60">
          <div className="row g-4 justify-content-between align-items-center">
            <div
              className="col-lg-5 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="feature-hosting-image">
                <Image src={one} alt="img" priority />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-hosting-content">
                <div className="section-title">
                  <span data-aos="fade-up" data-aos-duration="800">
                    Best hosting
                  </span>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    Get the Good Level Hosting <br /> at Budget Price
                  </h2>
                </div>
                <p
                  className="mt-3 mt-md-0 "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  Pellentesque varius mauris sit amet nisi tincidunt finibus
                  Donec faucibus diam quis feugiat accumsan Integer molestie
                  sapien ut ipsum fermentum feugiat Curabitur.
                </p>
                <div className="list-items">
                  <ul
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <li>
                      <i className="far fa-check"></i>
                      30-day money back guarantee
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      Web site Marketing Solutions
                    </li>
                  </ul>
                  <ul
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                  >
                    <li>
                      <i className="far fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      24/7 system Monitoring
                    </li>
                  </ul>
                </div>
                <Link
                  href="pricing"
                  className="theme-btn "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  See Pricing <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThreeHosting;
