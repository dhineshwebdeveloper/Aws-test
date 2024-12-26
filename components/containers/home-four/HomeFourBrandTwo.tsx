import Image from "next/image";
import one from "@/public/img/brand/treehouse.png";
import two from "@/public/img/brand/evernote.png";
import three from "@/public/img/brand/attentive.png";
import four from "@/public/img/brand/booking.png";
import five from "@/public/img/brand/airtable.png";
import six from "@/public/img/brand/hellosign.png";
import seven from "@/public/img/brand/airtable.png";

const HomeFourBrandTwo = () => {
  return (
    <section className="brand-section fix section-padding pt-0">
      <div className="container">
        <h3
          className="brand-head-title-2 "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          More than <span>2,00,000</span> Customers around the World.
        </h3>
        <div className="row justify-content-center">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="brand-logo-2">
              <Image src={one} alt="img" priority />
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="brand-logo-2">
              <Image src={two} alt="img" priority />
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="brand-logo-2">
              <Image src={three} alt="img" priority />
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="brand-logo-2">
              <Image src={four} alt="img" priority />
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="brand-logo-2">
              <Image src={five} alt="img" priority />
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="brand-logo-2">
              <Image src={six} alt="img" priority />
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="brand-logo-2">
              <Image src={seven} alt="img" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourBrandTwo;
