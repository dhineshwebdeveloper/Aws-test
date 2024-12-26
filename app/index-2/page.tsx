import HeaderTwo from "@/components/layout/header/HeaderTwo";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import DomainTwo from "@/components/containers/home-two/DomainTwo";
import HomeBrandTwo from "@/components/containers/home-two/HomeTwoBrand";
import HomeTwoHosting from "@/components/containers/home-two/HomeTwoHosting";
import HomeTwoPricing from "@/components/containers/home-two/HomeTwoPricing";
import HomeTwoService from "@/components/containers/home-two/HomeTwoService";
import HomeTwoLocation from "@/components/containers/home-two/HomeTwoLocation";
import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";
import HomeTwoChoose from "@/components/containers/home-two/HomeTwoChoose";
import HomeTwoFeature from "@/components/containers/home-two/HomeTwoFeature";
import Testimonial from "@/components/containers/support/Testimonial";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <HeaderTwo />
      <BannerTwo />
      <DomainTwo />
      <HomeBrandTwo />
      <HomeTwoHosting />
      <HomeTwoPricing />
      <HomeTwoService />
      <HomeTwoLocation />
      <HomeTwoCta />
      <HomeTwoChoose />
      <HomeTwoFeature />
      <Testimonial />
      <FooterTwo />
      <CustomCursor />
    </>
  );
};

export default page;
