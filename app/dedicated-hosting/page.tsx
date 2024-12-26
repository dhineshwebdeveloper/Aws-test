import Header from "@/components/layout/header/Header";
import DedicatedBanner from "@/components/layout/banner/DedicatedBanner";
import AffiliateProgram from "@/components/containers/affiliate/AffiliateProgram";
import HostingChoose from "@/components/containers/hosting/HostingChoose";
import HostingFeature from "@/components/containers/hosting/HostingFeature";
import FaqSection from "@/components/containers/faq/FaqSection";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <DedicatedBanner />
      <AffiliateProgram />
      <HostingChoose />
      <HostingFeature />
      <FaqSection />
      <Testimonial />
      <Brand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
