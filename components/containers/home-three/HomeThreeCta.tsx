import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/cta-contact.png";

const HomeThreeCta = () => {
  return (
    <section className="cta-contact-section">
      <div className="container">
        <div className="cta-contact-wrapper">
          <div
            className="cta-contact-image "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Image src={one} alt="img" priority />
          </div>
          <div className="section-title mb-0">
            <span
              className="white-text "
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Contact Us
            </span>
            <h2
              className="text-white "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              24/7 Expert Hosting Support <br /> Our Customers Love
            </h2>
          </div>
          <Link
            href="contact"
            className="theme-btn bg-color-2 mt-5 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            Talk to a Specialist{" "}
            <i
              className="fas 
                fa-long-arrow-alt-right"
            ></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeThreeCta;
