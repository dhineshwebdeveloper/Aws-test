import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import HomeFourBrand from "@/components/containers/home-four/HomeFourBrand";
import HomeFourChoose from "@/components/containers/home-four/HomeFourChoose";
import ServiceHosting from "@/components/containers/service/ServiceHosting";
import FaqSection from "@/components/containers/faq/FaqSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Services" />
      <HomeFourBrand />
      <HomeFourChoose />
      <ServiceHosting />
      <FaqSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
