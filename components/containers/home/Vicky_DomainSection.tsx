"use client";
import { useState } from "react";

const DomainSection = () => {
  const [searchtext, setsearchtext] = useState("");

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const url = `https://www.secureserver.net/products/domain-registration/find?plid=596796&domainToCheck=${searchtext}`;
    window.location.href = url; 
  };

  return (
    <section className="domain-name-area section-padding pt-0">
      <div className="container">
        <div className="domain-name-wrapper">
          <h3
            className="text-white"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Find Your Perfect Domain Name
          </h3>
          <form
            action="#"
            className="domain-input-form"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
            onSubmit={search} 
          >
            <div className="domain-input">
              <input
                value={searchtext}
                onChange={(e) => setsearchtext(e.target.value)} 
                type="text"
                placeholder="domain.com"
              />
              <button
                className="theme-btn bg-color-2"
                type="submit" 
              >
                Search Now
              </button>
            </div>
          </form>
          <ul className="domain-list">
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <span>.com</span>
              $9.95
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <span>.Info</span>
              $11.99
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              <span>.Net</span>
              $8.95
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
              <span>.Store</span>
              $10.50
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="900">
              <span>.ORG</span>
              $11.95
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DomainSection;
