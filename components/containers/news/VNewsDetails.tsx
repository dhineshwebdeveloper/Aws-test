
"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/news/post-5.jpg";
import two from "@/public/img/news/post-6.jpg";
import three from "@/public/img/news/comment.png";
import four from "@/public/img/news/pp3.jpg";
import five from "@/public/img/news/pp4.jpg";
import six from "@/public/img/news/pp5.jpg";
import seven from "@/public/img/news/comment-2.png";
import postdetails from "@/components/containers/news/blog.json";

const NewsDetails = () => {
  const params = useParams();
  const slug = params.slug;
  const post = postdetails.find((item) => item.ID === Number(slug));
  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <p>We couldn't find the post you're looking for.</p>
      </div>
    );
  }


  return (
    <section className="news-details fix section-padding">
      <div className="container">
        <div className="news-details-area">
          <div className="row g-5">
            <div className="col-12 col-lg-8">
              <div className="blog-post-details">
                <div className="single-blog-post">
                  <div
                    className="post-featured-thumb bg-cover rounded"
                    style={{
                      backgroundImage: `url(${post.image})`,
                    }}
                  ></div>
                  <div className="post-content">
                    <ul className="post-list d-flex align-items-center">
                      <li>
                        <i className="fa-regular fa-user"></i>
                        {post.admin}
                      </li>
                      <li>
                        <i className="fa-solid fa-calendar-days"></i>
                        18 Dec, 2024
                      </li>
                      <li>
                        <i className="fa-solid fa-tag"></i>
                        Technology
                      </li>
                    </ul>
                    <h3>{post.detailheading}</h3>
                    <p className="mb-3">
                      {post.firstpara?.para1}
                    </p>
                    <p className="mb-3">
                      {post.firstpara?.para2}
                    </p>
                    <p>
                      {post.firstpara?.para3}
                    </p>

                    {/* <div className="hilight-text mt-4 mb-4">
                      <p>
                        Pellentesque sollicitudin congue dolor non aliquam.
                        Morbi volutpat, nisi vel ultricies <br />{" "}
                        urnacondimentum, sapien neque lobortis tortor, quis
                        efficitur mi ipsum eu metus. Praesent eleifend <br />{" "}
                        orci sit amet est vehicula.
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          d="M0 20.3691H7.71428L2.57139 30.5539H10.2857L15.4286 20.3691V5.0918H0V20.3691Z"
                          fill="#3C72FC"
                        />
                        <path
                          d="M20.5703 5.0918V20.3691H28.2846L23.1417 30.5539H30.856L35.9989 20.3691V5.0918H20.5703Z"
                          fill="#3C72FC"
                        />
                      </svg>
                    </div> */}


                    <div className="row g-4 mt-2">
                      <div className="col-lg-6">
                        <div className="details-image">
                          <Image src={post.image1} width={451} height={0} alt="img" style={{ height: "300px", width: "451px" }} priority />
                        </div>
                      </div>
                      <div className="col-lg-6 ps-3">
                        <h3>{post.para_head2}</h3>
                        <p className="mt-4 ">
                          {post.secondpara?.para1}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 mb-3">
                      {post.secondpara?.para2}
                    </p>

                    <div className="row g-4">
                      <div className="text-center"><h3>{post.para_head3}</h3></div>
                      <div className="col-lg-6">
                        <p className="text-justify mt-3" style={{ textAlign: "justify" }}>{post.thirdpara?.para1}</p>
                        <p className="text-justify mt-3" style={{ textAlign: "justify" }}>{post.thirdpara?.para2}</p>

                      </div>
                      <div className="col-lg-6">
                        <div className="details-image">
                          <Image src={post.image} width={451} height={0} alt="img" style={{ height: "300px", width: "451px" }} priority />
                        </div>
                      </div>
                    </div>



                    {/* <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="details-image">
                          <Image src={post.image} width={451} height={0} alt="img" style={{ height: "300px", width: "451px" }} priority />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="details-image">
                          <Image src={post.image1} width={451} height={0} alt="img" style={{ height: "300px", width: "451px" }} priority />
                        </div>
                      </div>
                    </div> */}

                    <div className="row">
                      <div className="">
                        <h3>{post.para_head4}</h3>
                      </div>
                    </div>

                    <p className="pt-2">
                      {post.fourthpara?.para1}
                    </p>
                    <p className="pt-2">
                      {post.fourthpara?.para2}
                    </p>
                  </div>
                </div>
                <div className="row tag-share-wrap mt-4 mb-5">
                  <div className="col-lg-8 col-12">
                    <div className="tagcloud">
                      <span>Tags:</span>
                      <Link href="news-details">Reseller</Link>
                      <Link href="news-details">Hosting</Link>
                      <Link href="news-details">WP Hosting</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                    <div className="social-share">
                      <span className="me-3">Share:</span>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="comments-area">
                  <div className="comments-heading">
                    <h3>02 Comments</h3>
                  </div>
                  <div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
                    <div className="image">
                      <Image src={three} alt="image" />
                    </div>
                    <div className="content">
                      <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                        <div className="con">
                          <h5>
                            <Link href="news-details">Albert Flores</Link>
                          </h5>
                          <span>March 20, 2024 at 2:37 pm</span>
                        </div>
                        <div className="star">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p className="mt-30 mb-4">
                        Neque porro est qui dolorem ipsum quia quaed inventor
                        veritatis et quasi architecto var sed efficitur turpis
                        gilla sed sit amet finibus eros. Lorem Ipsum is simply
                        dummy
                      </p>
                      <Link href="news-details" className="reply">
                        Reply
                      </Link>
                    </div>
                  </div>
                  <div className="blog-single-comment d-flex gap-4 pt-5 pb-5">
                    <div className="image">
                      <Image src={seven} alt="image" />
                    </div>
                    <div className="content">
                      <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                        <div className="con">
                          <h5>
                            <Link href="news-details">Alex Flores</Link>
                          </h5>
                          <span>March 20, 2024 at 2:37 pm</span>
                        </div>
                        <div className="star">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p className="mt-30 mb-4">
                        Neque porro est qui dolorem ipsum quia quaed inventor
                        veritatis et quasi architecto var sed efficitur turpis
                        gilla sed sit amet finibus eros. Lorem Ipsum is simply
                        dummy
                      </p>
                      <Link href="news-details" className="reply">
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="comment-form-wrap pt-5">
                  <h3>Leave a comments</h3>
                  <form action="#" id="contact-form" method="POST">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <span>Your Name*</span>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <span>Your Email*</span>
                          <input
                            type="text"
                            name="email"
                            id="email2"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <span>Message*</span>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Write Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn ">
                          post comment
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                      </div>
                    </div>
                  </form>
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

                      {Array.from(new Set(postdetails.map((postcat) => postcat.category))).map((uniqueCategory, index) => {

                        const categoryCount = postdetails.filter((postcat) => postcat.category === uniqueCategory).length;

                        return (
                          <li key={index}>
                            <Link href={`postCategories/${uniqueCategory}`}>{uniqueCategory}</Link>
                            <span>({categoryCount})</span>
                          </li>
                        );
                      })}



                    </ul>
                  </div>
                </div>

                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Recent Post</h3>
                  </div>
                  <div className="recent-post-area">
                    {postdetails.slice(0, 3).map((repost, index) => (
                      <div className="recent-items" key={index}>
                        <div className="recent-thumb">
                          <Image src={repost.image} width={100} height={200} alt="img" priority />
                        </div>
                        <div className="recent-content">
                          <ul>
                            <li>
                              <i className="fa-solid fa-calendar-days"></i>
                              {repost.date}
                            </li>
                          </ul>
                          <h6>
                            <Link href={`/${repost.ID}`} key={repost.ID}>
                              {repost.heading.length > 35
                                ? `${repost.heading.substring(0, 35)}...`
                                : repost.heading}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    ))}

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
      </div>
    </section>
  );
};

export default NewsDetails;
