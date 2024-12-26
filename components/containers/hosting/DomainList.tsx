import Image from "next/image";
import one from "@/public/img/domain/online.png";
import two from "@/public/img/domain/org.png";
import three from "@/public/img/domain/com.png";
import four from "@/public/img/domain/shop.png";
import five from "@/public/img/domain/net.png";
import six from "@/public/img/domain/pro.png";
import seven from "@/public/img/domain/xyz.png";
import eight from "@/public/img/domain/top.png";

const DomainList = () => {
  return (
    <section className="domain-list-section fix section-padding pt-0">
      <div className="container">
        <div className="section-title text-center pb-md-3">
          <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Domains list
          </span>
          <h2
            className="mb-3 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Top Domains Price List
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed
            odio massa
          </p>
        </div>
        <div className="row g-0">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="domain-list-items">
              <h6 className="top-text">Name</h6>
              <ul>
                <li className="border-none">
                  <span></span>
                </li>
                <li>
                  <Image src={one} alt="img" priority />
                </li>
                <li>
                  <Image src={two} alt="img" priority />
                </li>
                <li>
                  <Image src={three} alt="img" priority />
                </li>
                <li>
                  <Image src={four} alt="img" priority />
                </li>
                <li>
                  <Image src={five} alt="img" priority />
                </li>
                <li>
                  <Image src={six} alt="img" priority />
                </li>
                <li>
                  <Image src={seven} alt="img" priority />
                </li>
                <li>
                  <Image src={eight} alt="img" priority />
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="domain-list-items">
              <h6 className="top-text">Register</h6>
              <ul>
                <li className="border-none">
                  <span></span>
                </li>
                <li className="text-center style-2">
                  $19.95 <del>$23.90</del>
                </li>
                <li className="text-center style-2">
                  $10.95 <del>$18.90</del>
                </li>
                <li className="text-center style-2">
                  $15.95 <del>$23.90</del>
                </li>
                <li className="text-center style-2">$19.95</li>
                <li className="text-center style-2">
                  $18.95 <del>$23.90</del>
                </li>
                <li className="text-center style-2">$19.95</li>
                <li className="text-center style-2">
                  $12.95 <del>$23.90</del>
                </li>
                <li className="text-center style-2">$9.95</li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="domain-list-items">
              <h6 className="top-text">Transfer</h6>
              <ul>
                <li className="border-none">
                  <span></span>
                </li>
                <li className="text-center style-2">$18.99</li>
                <li className="text-center style-2">$18.99</li>
                <li className="text-center style-2">$18.99</li>
                <li className="text-center style-2">$18.99</li>
                <li className="text-center style-2">$18.99</li>
                <li className="text-center style-2">$18.99</li>
                <li className="text-center style-2">$18.99</li>
                <li className="text-center style-2">$18.99</li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="domain-list-items">
              <h6 className="top-text">Renew</h6>
              <ul>
                <li className="border-none">
                  <span></span>
                </li>
                <li className="text-center style-2">$29.95</li>
                <li className="text-center style-2">$29.95</li>
                <li className="text-center style-2">$29.95</li>
                <li className="text-center style-2">$29.95</li>
                <li className="text-center style-2">$29.95</li>
                <li className="text-center style-2">$29.95</li>
                <li className="text-center style-2">$29.95</li>
                <li className="text-center style-2">$29.95</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainList;
