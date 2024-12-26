"use client"

import { useState } from "react";
import Link from "next/link";
import blogdetails from "./blog.json";


const NewsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogdetails.slice(indexOfFirstPost, indexOfLastPost);


  const totalPages = Math.ceil(blogdetails.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          {currentPosts.map((post) => (
            <div
              key={post.ID}
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="news-card-items mt-0 box-shadow">
                <div className="news-image">
                  <img
                    src={post.image} // Default image if no image is provided
                    alt="news-img"
                    width={400}
                    height={300}
                    style={{ width: "450px", height: "294px" }} // Corrected style syntax
                  />

                </div>
                <div className="news-content">
                  <div className="post-list">
                    <span>{post.category}</span>
                    <p>{post.date}</p>
                  </div>
                  <h3>
                    <Link href={`/${post.ID}`}  key={post.ID}>
                      {post.heading.length > 35
                        ? `${post.heading.substring(0, 35)}...`
                        : post.heading}
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
                        <h6>{post.admin}</h6>
                        <p>Co, Founder</p>
                      </div>
                    </div>
                    <Link href={`/${post.ID}`}  key={post.ID} className="link-btn">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div
          className="page-nav-wrap pt-5 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <ul className="pagination">
            <li>
              <button
                className="page-numbers icon"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <i className="fa-solid fa-arrow-left-long"></i>
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i + 1}>
                <button
                  className={`page-numbers ${currentPage === i + 1 ? "active" : ""
                    }`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                className="page-numbers icon"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
