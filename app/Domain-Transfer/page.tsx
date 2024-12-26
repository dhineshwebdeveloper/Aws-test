import Header from "@/components/layout/header/Header";
import DomainTBannerFour from "@/components/layout/banner/transferdomainbanner";
import DomainSectionTwo from "@/components/containers/hosting/DomainSectionTwo";
import DomainList from "@/components/containers/hosting/DomainList";
import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";
import PricingChoose from "@/components/containers/pricing/PricingChoose";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import FaqSection from "@/components/containers/faq/FaqSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <DomainTBannerFour />

      <DomainSectionTwo />

      <DomainList />
      <HomeTwoCta />
      <PricingChoose />
      <Testimonial />
      <Brand />
      <FaqSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
