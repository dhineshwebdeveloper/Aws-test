"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo/amohaa_go_png.png";

const OffCanvas = ({ toggleOffCanvas, handleToggleOffCanvas }: any) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " sub-menu-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " drop-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " drop-active" : " ";
  };

  return (
    <>
      <div className="fix-area">
        <div
          className={
            (toggleOffCanvas ? " info-open" : " ") + " offcanvas__info"
          }
        >
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image width="200" src={logo} alt="logo-img" priority />
                  </Link>
                </div>
                <div
                  className="offcanvas__close"
                  onClick={() => handleToggleOffCanvas(false)}
                >
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
              &quot;Empowering Digital Future,&quot; Our mission statement, captures our enthusiasm for creating a better future through creative solutions that drive growth and success for your business..
              </p>
              <div className="mobile-menu fix mb-3">
                <nav className="mean-nav d-block d-xl-none">
                  <ul>
                    
                    <li>
                      <a
                        className={`drop ${isSubMenuButton("hosting")}`}
                        onClick={() => handleSubmenu("hosting")}
                      >
                        Hosting
                      </a>
                      <ul className={`submenu ${isSubMenuOpen("hosting")}`}>
                        <li>
                          <Link href="share-hosting">Share Hosting</Link>
                        </li>
                        <li>
                          <Link href="reseller-hosting">Reseller Hosting</Link>
                        </li>
                        <li>
                          <Link href="dedicated-hosting">
                            Dedicated Hosting
                          </Link>
                        </li>
                        <li>
                          <Link href="vps-hosting">VPS Hosting</Link>
                        </li>
                        <li>
                          <Link href="wordpress-hosting">
                            Wordpress Hosting
                          </Link>
                        </li>
                        <li>
                          <Link href="cloud-hosting">Cloud Hosting</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="domain">Domain</Link>
                    </li>
                    <li>
                      <a
                        className={`drop ${isSubMenuButton("home")}`}
                        onClick={() => handleSubmenu("home")}
                      >
                        Home
                      </a>
                      <ul className={`submenu ${isSubMenuOpen("home")}`}>
                        <li>
                          <Link href="/">Web Hosting</Link>
                        </li>
                        <li>
                          <Link href="index-2">Hosting Services</Link>
                        </li>
                        <li>
                          <Link href="index-3">Hosting Solutions</Link>
                        </li>
                        <li>
                          <Link href="index-4">Hosting Agency</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="has-dropdown">
                      <a
                        className={`drop ${isSubMenuButton("pages")}`}
                        onClick={() => handleSubmenu("pages")}
                      >
                        Pages
                      </a>
                      <ul className={`submenu ${isSubMenuOpen("pages")}`}>
                        <li>
                          <Link href="about">About Us</Link>
                        </li>
                        <li>
                          <Link href="black-friday">Black Friday</Link>
                        </li>
                        <li>
                          <Link href="affiliate">Affiliate</Link>
                        </li>
                        <li>
                          <Link href="pricing">Pricing</Link>
                        </li>
                        <li>
                          <Link href="pricing-2">Pricing Package</Link>
                        </li>
                        <li>
                          <Link href="data-center">Data Center</Link>
                        </li>
                        <li>
                          <Link href="service">Services</Link>
                        </li>
                        <li>
                          <Link href="team">Team</Link>
                        </li>
                        <li>
                          <Link href="team-details">Team Details</Link>
                        </li>
                        <li>
                          <Link href="error">Error Page</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className={`drop ${isSubMenuButton("blog")}`}
                        onClick={() => handleSubmenu("blog")}
                      >
                        News
                      </a>
                      <ul className={`submenu ${isSubMenuOpen("blog")}`}>
                        <li>
                          <Link href="news-grid">News Grid</Link>
                        </li>
                        <li>
                          <Link href="news">News List</Link>
                        </li>
                        <li>
                          <Link href="news-details">News Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className={`drop ${isSubMenuButton("help")}`}
                        onClick={() => handleSubmenu("help")}
                      >
                        Help Center
                      </a>
                      <ul className={`submenu ${isSubMenuOpen("help")}`}>
                        <li>
                          <Link href="faq">FAQ</Link>
                        </li>
                        <li>
                          <Link href="error">Error 404</Link>
                        </li>
                        <li>
                          <Link href="support">Support</Link>
                        </li>
                        <li>
                          <Link href="contact">Contact Us</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="/">
                        Bengalore, Karnataka, India
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="mailto:info@amohaa.com">
                        <span className="mailto:info@amohaa.com">
                          info@amohaa.com
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="/">
                        Mod-friday, 09am -06pm
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="tel:8001210120">800-1210120</Link>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="contact" className="theme-btn text-center">
                    Get A Quote <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleToggleOffCanvas(false)}
        className={
          (toggleOffCanvas ? " overlay-open" : " ") + " offcanvas__overlay"
        }
      ></div>
    </>
  );
};

export default OffCanvas;
