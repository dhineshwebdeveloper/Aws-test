import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/icon-1.png";
import two from "@/public/img/hosting/icon-3.png";
import three from "@/public/img/gym-man.png";

const HomeFourFeature = () => {
  return (
    <section className="feature-hosting-section fix section-padding">
      <div className="container">
        <div className="feature-content-warpper style-2">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
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
                    Advance features for the <br /> advanced user
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
                      Branding and design Identity
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
                  href="about"
                  className="theme-btn "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  Explore More <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="feature-hosting-image-2">
                <div className="icon-box-1">
                  <Image src={one} alt="img" priority />
                </div>
                <div className="icon-box-2">
                  <Image src={two} alt="img" priority />
                </div>
                <div className="thumb">
                  <Image src={three} alt="img" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourFeature;
