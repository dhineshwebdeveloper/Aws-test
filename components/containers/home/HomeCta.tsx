import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/cta-man.png";

const HomeCta = () => {
  return (
    <section
      className="cta-contct-section section-padding bg-cover fix"
      style={{
        backgroundImage: "url(/img/cta/cta-conact-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-xl-8 col-lg-7">
            <div className="cta-contact-left">
              <div className="section-title">
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
                  24/7 Customer Support Here to Assist <br /> You Every Step of
                  the Way
                </h2>
              </div>
              <Link
                href="contact"
                className="theme-btn bg-color-2 mt-4 mt-md-0 "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                WhatsApp Now{" "}
                <i
                  className="fas 
                        fa-long-arrow-alt-right"
                ></i>
              </Link>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-5 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="cta-contact-image">
              <Image src={one} alt="img" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
