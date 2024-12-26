import Link from "next/link";
import Image from "next/image";
import bread from "@/public/img/breadcrumb.png";

const BannerCommon = ({ title }: any) => {
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{
        backgroundImage: "url(/img/breadcrumb-1.jpg)",
      }}
    >
      <div className="container">
        <div className="page-heading">
          <div className="page-header-left">
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              {title}
            </h1>
            <ul
              className="breadcrumb-items "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <i className="fa-regular fa-chevrons-right"></i>
              </li>
              <li>{title}</li>
            </ul>
          </div>
          <div
            className="breadcrumb-image "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <Image src={bread} alt="img" priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCommon;
