import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/news/post-1.jpg";
import two from "@/public/img/news/post-2.jpg";
import three from "@/public/img/news/post-3.jpg";
import four from "@/public/img/news/pp3.jpg";
import five from "@/public/img/news/pp4.jpg";
import six from "@/public/img/news/pp5.jpg";

const NewsList = () => {
  return (
    <section className="news-standard fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="news-standard-wrapper">
              <div className="news-standard-items">
                <div className="news-thumb">
                  <Image src={one} alt="img" priority />
                </div>
                <div className="news-content">
                  <ul className="date-list">
                    <li>
                      <b>Written by:</b> Marry biden
                    </li>
                    <li className="color-2">14/03/2024</li>
                  </ul>
                  <h3>
                    <Link href="news-details">
                      Attentive was bern in 2015 hel p sales teams
                    </Link>
                  </h3>
                  <p>
                    Consectetur adipisicing elit, sed do eiusmod tempor is
                    incididunt ut labore et dolore of magna aliqua. Ut enim ad
                    minim veniam, made of owl the quis nostrud exercitation
                    ullamco laboris nisi.
                  </p>
                  <div className="news-button">
                    <Link href="news-details" className="link-btn mt-4">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
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
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        Share <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news-standard-items">
                <div className="news-thumb">
                  <Image src={two} alt="img" priority />
                </div>
                <div className="news-content">
                  <ul className="date-list">
                    <li>
                      <b>Written by:</b> Marry biden
                    </li>
                    <li className="color-2">14/03/2024</li>
                  </ul>
                  <h3>
                    <Link href="news-details">
                      Best and fastest date server ever
                    </Link>
                  </h3>
                  <p>
                    Consectetur adipisicing elit, sed do eiusmod tempor is
                    incididunt ut labore et dolore of magna aliqua. Ut enim ad
                    minim veniam, made of owl the quis nostrud exercitation
                    ullamco laboris nisi.
                  </p>
                  <div className="news-button">
                    <Link href="news-details" className="link-btn mt-4">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
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
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        Share <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news-standard-items">
                <div className="news-thumb">
                  <Image src={three} alt="img" priority />
                </div>
                <div className="news-content">
                  <ul className="date-list">
                    <li>
                      <b>Written by:</b> Marry biden
                    </li>
                    <li className="color-2">14/03/2024</li>
                  </ul>
                  <h3>
                    <Link href="news-details">
                      Attentive was bern in 2015 hel p sales teams
                    </Link>
                  </h3>
                  <p>
                    Consectetur adipisicing elit, sed do eiusmod tempor is
                    incididunt ut labore et dolore of magna aliqua. Ut enim ad
                    minim veniam, made of owl the quis nostrud exercitation
                    ullamco laboris nisi.
                  </p>
                  <div className="news-button">
                    <Link href="news-details" className="link-btn mt-4">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
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
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="plus-btn">
                        Share <i className="fa-light fa-share-nodes"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="page-nav-wrap pt-5 text-center "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <ul>
                  <li>
                    <Link className="page-numbers icon" href="/">
                      <i className="fa-solid fa-arrow-left-long"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="/">
                      01
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="/">
                      02
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="/">
                      03
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers icon" href="/">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="main-sidebar">
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Search</h3>
                </div>
                <div className="search-widget">
                  <form action="#">
                    <input type="text" placeholder="Search here" />
                    <button type="submit">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Categories</h3>
                </div>
                <div className="news-widget-categories">
                  <ul>
                    <li>
                      <Link href="news-details">Cloud Hosting </Link>{" "}
                      <span>(08)</span>
                    </li>
                    <li>
                      <Link href="news-details">Dedicated Hosting</Link>{" "}
                      <span>(11)</span>
                    </li>
                    <li className="active">
                      <Link href="news-details">Reseller Hosting</Link>
                      <span>(18)</span>
                    </li>
                    <li>
                      <Link href="news-details">VPS Hosting</Link>{" "}
                      <span>(11)</span>
                    </li>
                    <li>
                      <Link href="news-details">WordPress Hosting </Link>{" "}
                      <span>(07)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Recent Post</h3>
                </div>
                <div className="recent-post-area">
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <Image src={four} alt="img" priority />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          10/01/2024
                        </li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Life won&apos;s one Beast air Over <br /> above all
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <Image src={five} alt="img" priority />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          14/03/2024
                        </li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Best and fastest date server <br /> ever
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <Image src={six} alt="img" priority />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          22/03/2024
                        </li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Attentive was bern in 2015 <br /> help sales teams
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Tags</h3>
                </div>
                <div className="news-widget-categories">
                  <div className="tagcloud">
                    <Link href="news">business</Link>
                    <Link href="news-details">Service</Link>
                    <Link href="news-details">Hosting</Link>
                    <Link href="news-details">Reseller</Link>
                    <Link href="news-details">Vps</Link>
                    <Link href="news-details">Domain</Link>
                    <Link href="news-details">WP Hosting</Link>
                    <Link href="news-details">Cloud</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
