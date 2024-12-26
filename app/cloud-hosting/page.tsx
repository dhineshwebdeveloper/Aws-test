import Header from "@/components/layout/header/Header";
import CloudBanner from "@/components/layout/banner/CloudBanner";
import HostingFeatureThree from "@/components/containers/hosting/HostingFeatureThree";
// import HostingPricing from "@/components/containers/hosting/HostingPricing";
import VHostingPricing from "@/components/containers/hosting/v_webhostingplus";
import HomeFourFeature from "@/components/containers/home-four/HomeFourFeature";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import FaqSection from "@/components/containers/faq/FaqSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <CloudBanner />
      <HostingFeatureThree />
      <VHostingPricing />
      <HomeFourFeature />
      <Testimonial />
      <Brand />
      <FaqSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
