import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/news/01.jpg";
import two from "@/public/img/news/02.jpg";
import three from "@/public/img/news/03.jpg";

const HomeNews = () => {
  return (
    <section className="news-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span data-aos="fade-up" data-aos-duration="800">
              Our News
            </span>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              Explore Latest News
            </h2>
          </div>
          <Link
            href="news"
            className="theme-btn "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            See All More <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="news-card-items">
              <div className="news-image">
                <Image src={one} alt="news-img" priority />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>Shared Hosting</span>
                  <p>MARCH 24, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">
                    Attentive was born in 2015 help sales teams
                  </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-1.png)",
                      }}
                    ></div>
                    <div className="content">
                      <h6>Admin</h6>
                      <p>Co, Founder</p>
                    </div>
                  </div>
                  <Link href="news-details" className="link-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div className="news-card-items">
              <div className="news-image">
                <Image src={two} alt="news-img" priority />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>Uncategorized</span>
                  <p>MARCH 22, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">
                    Best and fastest data server ever
                  </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-2.png)",
                      }}
                    ></div>
                    <div className="content">
                      <h6>Admin</h6>
                      <p>Co, Founder</p>
                    </div>
                  </div>
                  <Link href="news-details" className="link-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <div className="news-card-items">
              <div className="news-image">
                <Image src={three} alt="news-img" priority />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>Reseller Hosting</span>
                  <p>MARCH 14, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">
                    Life won&apos;t one beast air over above all
                  </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-3.png)",
                      }}
                    ></div>
                    <div className="content">
                      <h6>Admin</h6>
                      <p>Co, Founder</p>
                    </div>
                  </div>
                  <Link href="news-details" className="link-btn">
                    <i className="fa-solid fa-arrow-right"></i>
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

export default HomeNews;
