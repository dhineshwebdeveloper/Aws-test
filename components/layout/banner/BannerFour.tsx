"use client"
import Image from "next/image";
import one from "@/public/img/hero/hero-support.png";
import two from "@/public/img/hero/hero-hosting-2.png";
import { useState } from "react";

const BannerFour = () => {

  const [searchtext, setsearchtext] = useState("");

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const url = `https://www.secureserver.net/products/domain-registration/find?plid=596796&domainToCheck=${searchtext}`;
    window.location.href = url; 
  };

  return (
    <section
      className="hero-section hero-4 fix"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-4.jpg)",
      }}
    >
      <div className="hero-suppor-image">
        <Image src={one} alt="img" priority />
      </div>
      <div className="hero-hosing-image">
        <Image src={two} alt="img" priority />
      </div>
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-12">
            <div className="hero-domain-wrapper">
              <h1
                className="text-white "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Get Fastest Domain Up to 60% Discount
              </h1>
              <h6
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                Unlimited storage, unmetered bandwidth, unbeatable hosting. This
                gator&apos;s got ya covered.
              </h6>
              <form
                action="#"
                className="domain-input-form "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="700"
                onSubmit={search}
              >
                <div className="domain-input">
                <input
                value={searchtext}
                onChange={(e) => setsearchtext(e.target.value)} 
                type="text"
                placeholder="domain.com"
              />
                  <button className="theme-btn bg-color-2" type="submit">
                    Search Now
                  </button>
                  <div className="select-area">
                    {/* <select name="cate" className="category">
                      <option value="1">.com</option>
                      <option value="1">.net</option>
                      <option value="1">.info</option>
                      <option value="1">.store</option>
                    </select> */}
                  </div>
                </div>
              </form>
              <ul className="domain-list">
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <span>.com</span>
                  $9.95
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <span>.Info</span>
                  $11.99
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                >
                  <span>.Net</span>
                  $8.95
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  <span>.Store</span>
                  $10.50
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="900"
                >
                  <span>.ORG</span>
                  $11.95
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFour;
