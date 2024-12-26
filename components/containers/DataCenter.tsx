import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/flag&map/brazil.png";
import two from "@/public/img/flag&map/map-1.png";
import three from "@/public/img/flag&map/map-2.png";
import four from "@/public/img/flag&map/india.png";
import five from "@/public/img/flag&map/map-3.png";
import six from "@/public/img/flag&map/map-4.png";
import seven from "@/public/img/flag&map/australia.png";
import eight from "@/public/img/flag&map/united.png";

const DataCenter = () => {
  return (
    <section className="data-center-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Data Center
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Modern & Fast Data Center <br /> Worldwide
          </h2>
        </div>
        <div className="data-center-wrapper-2">
          <div className="row g-4 justify-content-between align-items-center">
            <div
              className="col-lg-4 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="data-center-box-items">
                <h3>
                  <Image src={one} alt="img" priority />
                  Brazil
                </h3>
                <p>
                  Aliquam viverra accumsan lectus in dignissim ante interdum eu
                  Sed odio massa rhoncus ac nulla vel iaculis egestas mauris
                </p>
                <ul>
                  <li>
                    <span>Opened:</span> February 2017
                  </li>
                  <li>
                    <span>IP address:</span> 46.55.72.342
                  </li>
                </ul>
                <Link href="data-center" className="theme-btn w-100">
                  Download test <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-7 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="map-image">
                <Image src={two} alt="img" priority className="w-100" />
              </div>
            </div>
            <div
              className="col-lg-7 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="map-image">
                <Image src={three} alt="img" priority className="w-100" />
              </div>
            </div>
            <div
              className="col-lg-4 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="data-center-box-items">
                <h3>
                  <Image src={eight} alt="img" priority />
                  United States
                </h3>
                <p>
                  Aliquam viverra accumsan lectus in dignissim ante interdum eu
                  Sed odio massa rhoncus ac nulla vel iaculis egestas mauris
                </p>
                <ul>
                  <li>
                    <span>Opened:</span> February 2017
                  </li>
                  <li>
                    <span>IP address:</span> 46.55.72.342
                  </li>
                </ul>
                <Link href="data-center" className="theme-btn w-100">
                  Download test <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="data-center-box-items">
                <h3>
                  <Image src={four} alt="img" priority />
                  India
                </h3>
                <p>
                  Aliquam viverra accumsan lectus in dignissim ante interdum eu
                  Sed odio massa rhoncus ac nulla vel iaculis egestas mauris
                </p>
                <ul>
                  <li>
                    <span>Opened:</span> February 2017
                  </li>
                  <li>
                    <span>IP address:</span> 46.55.72.342
                  </li>
                </ul>
                <Link href="data-center" className="theme-btn w-100">
                  Download test <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-7 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="map-image">
                <Image src={five} alt="img" priority className="w-100" />
              </div>
            </div>
            <div
              className="col-lg-7 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="map-image">
                <Image src={six} alt="img" priority className="w-100" />
              </div>
            </div>
            <div
              className="col-lg-4 "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="data-center-box-items">
                <h3>
                  <Image src={seven} alt="img" priority />
                  Australia
                </h3>
                <p>
                  Aliquam viverra accumsan lectus in dignissim ante interdum eu
                  Sed odio massa rhoncus ac nulla vel iaculis egestas mauris
                </p>
                <ul>
                  <li>
                    <span>Opened:</span> February 2017
                  </li>
                  <li>
                    <span>IP address:</span> 46.55.72.342
                  </li>
                </ul>
                <Link href="data-center" className="theme-btn w-100">
                  Download test <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCenter;
