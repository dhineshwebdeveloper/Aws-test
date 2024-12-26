import Image from "next/image";
import one from "@/public/img/data-center-bg.png";

const HomeTwoLocation = () => {
  return (
    <section className="data-center-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-bg "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Our Location
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Our Data Center Location
          </h2>
        </div>
        <div className="data-center-wrapper">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="data-center-image">
                <Image src={one} alt="img" priority />
                <span className="text-box box-1">Canada</span>
                <span className="text-box box-2">United States</span>
                <span className="text-box box-3">Brazil</span>
                <span className="text-box box-4">Finland</span>
                <span className="text-box box-5">Ukraine</span>
                <span className="text-box box-6">Nigeria</span>
                <span className="text-box box-7">South Africa</span>
                <span className="text-box box-8">India</span>
                <span className="text-box box-9">China</span>
                <span className="text-box box-10">Australia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoLocation;
