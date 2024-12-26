import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import PricingChoose from "@/components/containers/pricing/PricingChoose";
import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";
import FaqSection from "@/components/containers/faq/FaqSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Pricing" />
      <PricingChoose />
      <HomeThreePricing />
      <FaqSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
