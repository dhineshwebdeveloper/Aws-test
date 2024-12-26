import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/news/04.jpg";
import two from "@/public/img/news/05.jpg";
import three from "@/public/img/news/06.jpg";

const HomeThreeNews = () => {
  return (
    <section className="news-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Our news
          </span>
          <h2
            className="mb-3 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Our Latest News
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed
            odio <br /> massa rhoncus ac nulla vel iaculis egestas mauris
          </p>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="news-card-items style-2">
              <div className="news-image">
                <Image src={one} alt="news-img" priority />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>creative</span>
                  <p>MARCH 24, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">Transforming Challenges into </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-4.png)",
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
            <div className="news-card-items style-2">
              <div className="news-image">
                <Image src={two} alt="news-img" priority />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>creative</span>
                  <p>MARCH 24, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">Transforming Challenges into </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-5.png)",
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
            <div className="news-card-items style-2">
              <div className="news-image">
                <Image src={three} alt="news-img" priority />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>creative</span>
                  <p>MARCH 24, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">Transforming Challenges into </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-6.png)",
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

export default HomeThreeNews;
