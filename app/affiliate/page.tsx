import Header from "@/components/layout/header/Header";
import AffiliateBanner from "@/components/layout/banner/AffiliateBanner";
import AffiliateFeature from "@/components/containers/affiliate/AffiliateFeature";
import HomeThreeHosting from "@/components/containers/home-three/HomeThreeHosting";
import HomeFourBrand from "@/components/containers/home-four/HomeFourBrand";
import HomeFourChoose from "@/components/containers/home-four/HomeFourChoose";
import AffiliateProgram from "@/components/containers/affiliate/AffiliateProgram";
import FaqSection from "@/components/containers/faq/FaqSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <AffiliateBanner />
      <AffiliateFeature />
      <HomeThreeHosting />
      <HomeFourBrand />
      <HomeFourChoose />
      <AffiliateProgram />
      <FaqSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
