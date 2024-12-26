import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import PricingChoose from "@/components/containers/pricing/PricingChoose";
import PricingHome from "@/components/containers/home/PricingHome";
import FaqSection from "@/components/containers/faq/FaqSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Pricing Package" />
      <PricingChoose />
      <PricingHome />
      <FaqSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
