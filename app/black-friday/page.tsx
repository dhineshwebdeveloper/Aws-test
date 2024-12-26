import Header from "@/components/layout/header/Header";
import BannerBlack from "@/components/layout/banner/BannerBlack";
import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";
import HomeFourHosting from "@/components/containers/home-four/HomeFourHosting";
import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";
import FaqSection from "@/components/containers/faq/FaqSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerBlack />
      <HomeThreePricing />
      <HomeFourHosting />
      <HomeTwoCta />
      <FaqSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
