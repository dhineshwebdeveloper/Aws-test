import Image from "next/image";
import one from "@/public/img/contact.png";

const SupportContact = () => {
  return (
    <section className="contact-section fix section-padding">
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="contact-left">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Request a <br /> Consultation
                </h2>
                <div
                  className="contact-image "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <Image src={one} alt="contact-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-right">
                <h3 data-aos="fade-up" data-aos-duration="800">
                  Get in Touch
                </h3>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-items"
                >
                  <div className="row g-4">
                    <div
                      className="col-lg-6 "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="300"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="500"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="500"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="500"
                    >
                      <div className="form-clt">
                        <div className="category-oneadjust">
                          <select name="cate" className="category">
                            <option value="1">Subject</option>
                            <option value="1">Domain</option>
                            <option value="1">Hosting</option>
                            <option value="1">VPS Hosting</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-12 "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="700"
                    >
                      <div className="form-clt">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Messages"
                        ></textarea>
                      </div>
                    </div>
                    <div
                      className="col-lg-12 "
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="900"
                    >
                      <div className="form-check d-flex gap-2 from-customradio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault12"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Collaboratively formulate principle capital.
                          Progressively evolve user
                        </label>
                      </div>
                      <button type="submit" className="theme-btn">
                        Submit Now{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportContact;
