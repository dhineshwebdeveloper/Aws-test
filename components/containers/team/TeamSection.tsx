import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/team/01.jpg";
import two from "@/public/img/team/02.jpg";
import three from "@/public/img/team/03.jpg";
import four from "@/public/img/team/04.jpg";
import five from "@/public/img/team/05.jpg";
import six from "@/public/img/team/06.jpg";
import seven from "@/public/img/team/07.jpg";
import eight from "@/public/img/team/08.jpg";

const TeamSection = () => {
  return (
    <section className="team-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="team-card-item mt-0">
              <div className="team-image">
                <Image src={one} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Darlene Robertson</Link>
                </h5>
                <p>Web Designer</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="team-card-item mt-0">
              <div className="team-image">
                <Image src={two} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Leslie Alexander</Link>
                </h5>
                <p>Nursing Assistant</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="team-card-item mt-0">
              <div className="team-image">
                <Image src={three} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Ralph Edwards</Link>
                </h5>
                <p>President of Sales</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="team-card-item mt-0">
              <div className="team-image">
                <Image src={four} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Kristin Watson</Link>
                </h5>
                <p>Software Tester</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="team-card-item mt-0">
              <div className="team-image">
                <Image src={five} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Esther Howard</Link>
                </h5>
                <p>Legal adviser</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="team-card-item mt-0">
              <div className="team-image">
                <Image src={six} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Wade Warren</Link>
                </h5>
                <p>Nursing Assistant</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="team-card-item mt-0">
              <div className="team-image">
                <Image src={seven} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Bessie Cooper</Link>
                </h5>
                <p>UI/UX Designer</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="team-card-item mt-0">
              <div className="team-image">
                <Image src={eight} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Kathryn Murphy</Link>
                </h5>
                <p>Physiotherapist</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
