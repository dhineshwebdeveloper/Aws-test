import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/email-1.png";

const Offer = () => {
  return (
    <section
      className="offer-hosting-section section-padding fix bg-cover"
      style={{
        backgroundImage: "url(/img/hosting/hosting.jpg)",
      }}
    >
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="section-title">
              <span
                className="white-text "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Limit time Offer
              </span>
              <h2
                className="text-white "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Hosting Flash Sale
              </h2>
            </div>
            <p
              className="text-white mt-3 mt-md-0 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed
              odio massa rhoncus ac nulla.
            </p>
            <Link
              href="contact"
              className="theme-btn bg-color-2 mt-5 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              Get Started{" "}
              <i
                className="fas 
                    fa-long-arrow-alt-right"
              ></i>
            </Link>
          </div>
          <div className="col-lg-8">
            <div className="offer-hosting-wrapper">
              <div
                className="offter-hosting-items responsive-style "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                style={{
                  backgroundImage: "url(/img/offer-card-bg.png)",
                }}
              >
                <div className="icon">
                  <Image src={one} alt="img" priority />
                </div>
                <div className="content">
                  <div className="offer-text">
                    <span>Limit Time offer</span>
                    <h3>76% Off</h3>
                  </div>
                  <h4>
                    Web Hosting Involves Renting <br /> Server From A Hosting
                    Provider.
                  </h4>
                  <Link href="service" className="theme-btn">
                    read more <i className="fa-regular fa-chevrons-right"></i>
                  </Link>
                </div>
              </div>
              <div
                className="offter-hosting-items responsive-style "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
                style={{
                  backgroundImage: "url(/img/offer-card-bg.png)",
                }}
              >
                <div className="icon">
                  <Image src={one} alt="img" priority />
                </div>
                <div className="content">
                  <div className="offer-text">
                    <span>Limit Time offer</span>
                    <h3>76% Off</h3>
                  </div>
                  <h4>
                    Web Hosting Involves Renting <br /> Server From A Hosting
                    Provider.
                  </h4>
                  <Link href="service" className="theme-btn">
                    read more <i className="fa-regular fa-chevrons-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
