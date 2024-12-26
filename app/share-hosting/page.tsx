import Header from "@/components/layout/header/Header";
import BannerShared from "@/components/layout/banner/BannerShared";
import PricingChoose from "@/components/containers/pricing/PricingChoose";
// import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";
 import DHomeThreePricing from "@/components/containers/home-three/v_homethree";
import HomeFourHosting from "@/components/containers/home-four/HomeFourHosting";
import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";
import FaqSection from "@/components/containers/faq/FaqSection";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerShared />
      <PricingChoose />
      <DHomeThreePricing />
      <HomeFourHosting />
      <HomeTwoCta />
      <FaqSection />
      <Testimonial />
      <Brand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
