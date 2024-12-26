"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import google from "@/public/img/sign/google.png";
import facebook from "@/public/img/sign/fb.png";
import one from "@/public/img/sign/login.png";
import two from "@/public/img/sign/create.png";

const Topbar = () => {
  const [modal, setModal] = useState(0);

  const handleClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="far fa-envelope"></i>
                <Link href="mailto:info@amohaa.com">info@amohaa.com</Link>
              </li>
              <li>
                <i className="fa-regular fa-phone"></i>
                <Link href="tel:8001210120">800-1210120</Link>
              </li>
            </ul>
            <p>
              Amohaa Flash Discount: Free <b>Hosting & Domain<sup>*</sup></b> for a Limited
              time
            </p>
            <ul className="list">
              <li>
                <i className="fa-light fa-comments"></i>
                <Link href="contact">Live Chat</Link>
              </li>
              <li>
                <i className="fa-light fa-user"></i>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                  onClick={() => setModal(1)}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal One */}
      <div
        className={`modal modal-common-wrap fade${
          modal === 1 ? " show " : " "
        }`}
        onClick={() => setModal(0)}
        id="exampleModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModal(0)}
              ></button>
            </div>
            <div
              className="modal-body d-md-flex d-grid gap-md-0 gap-5 align-items-center"
              onClick={handleClick}
            >
              <div className="modal-common-content">
                <div className="box">
                  <h2>welcome back!</h2>
                  <form action="#" className="login-from">
                    <div className="form-grp cmn-mb">
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="form-grp">
                      <input type="text" placeholder="Enter Password" />
                    </div>
                    <div className="d-flex forgot-inner-area cmn-mb justify-content-between gap-2 flex-wrap align-items-center">
                      <div className="form-check checkmark-inner">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          Remember me
                        </label>
                      </div>
                      <Link href="/" className="forgot">
                        Forgot Your password?
                      </Link>
                    </div>
                    <button type="button" className="theme-btn w-100">
                      <span>Log in</span>
                    </button>
                  </form>
                  <span className="orting-badge">Or</span>
                  <div className="d-grid gap-3">
                    <Link href="/" className="cmn-social">
                      <Image src={google} alt="img" priority />
                      Continue With Google
                    </Link>
                    <Link href="/" className="cmn-social">
                      <Image src={facebook} alt="img" priority />
                      continue with facebook
                    </Link>
                  </div>
                  <div className="form-check d-flex align-items-center gap-2 from-customradio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      i accept your terms & conditions
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-right-thumb position-relative">
                <Image src={one} alt="img" priority />
                <div className="signlogin-btnwrap">
                  <button
                    className="theme-create style-border"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setModal(2)}
                  >
                    create account
                  </button>
                  <button
                    className="theme-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    onClick={() => setModal(1)}
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Two */}
      <div
        className={`modal modal-common-wrap fade${modal === 2 ? " show " : ""}`}
        onClick={() => setModal(0)}
        id="exampleModal2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModal(0)}
              ></button>
            </div>
            <div
              className="modal-body d-md-flex d-grid gap-md-0 gap-5 align-items-center"
              onClick={handleClick}
            >
              <div className="modal-common-content">
                <div className="box">
                  <h2>Create account</h2>
                  <form action="#" className="login-from">
                    <div className="form-grp cmn-mb">
                      <input type="text" placeholder="User name" />
                    </div>
                    <div className="form-grp cmn-mb">
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="form-grp cmn-mb">
                      <input type="text" placeholder="Enter Password" />
                    </div>
                    <div className="form-grp">
                      <input type="text" placeholder="Enter Confirm password" />
                    </div>
                  </form>
                  <span className="orting-badge">Or</span>
                  <div className="d-grid gap-3">
                    <Link href="/" className="cmn-social">
                      <Image src={google} alt="img" priority />
                      Continue With Google
                    </Link>
                    <Link href="/" className="cmn-social">
                      <Image src={facebook} alt="img" priority />
                      continue with facebook
                    </Link>
                  </div>
                  <div className="pb-xxl-3">
                    <div className="form-check d-flex align-items-center gap-2 from-customradio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault11"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault11"
                      >
                        i accept your terms & conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button type="button" className="theme-btn w-100">
                      <span>Sign Up</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="modal-right-thumb position-relative">
                <Image src={two} alt="img" priority />
                <div className="signlogin-btnwrap">
                  <button
                    className="theme-create  style-border theme-active"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setModal(2)}
                  >
                    create account
                  </button>
                  <button
                    className="theme-btn theme-inactive"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    onClick={() => setModal(1)}
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        onClick={() => setModal(-1)}

        className={
          (modal ? " overlay-open" : " ") + " offcanvas__overlay"
        }
      ></div> */}
    </>
  );
};

export default Topbar;
