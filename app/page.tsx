import Header from "@/components/layout/header/Header";
import Banner from "@/components/layout/banner/Banner";
// import DomainSection from "@/components/containers/home/DomainSection";
 import VDomainSection from "@/components/containers/home/Vicky_DomainSection";
import HostingHome from "@/components/containers/home/HostingHome";
import PricingHome from "@/components/containers/home/PricingHome";
import HomeCta from "@/components/containers/home/HomeCta";
import HomeBrand from "@/components/containers/home/HomeBrand";
import HomeHostingTwo from "@/components/containers/home/HomeHostingTwo";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import FaqSection from "@/components/containers/faq/FaqSection";
import HomeNews from "@/components/containers/home/HomeNews";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <VDomainSection />
      <HostingHome />
      <PricingHome />
      <HomeCta />
      <HomeBrand />
      <HomeHostingTwo />
      <HomeTestimonial />
      <FaqSection />
      <HomeNews />
      <Brand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
