import Header from "@/components/layout/header/Header";
import BannerThree from "@/components/layout/banner/BannerThree";
import HomeThreeFeature from "@/components/containers/home-three/HomeThreeFeature";
import HomeThreeAbout from "@/components/containers/home-three/HomeThreeAbout";
import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";
import HomeThreeService from "@/components/containers/home-three/HomeThreeService";
import Offer from "@/components/containers/home-three/Offer";
import HomeThreeHosting from "@/components/containers/home-three/HomeThreeHosting";
import HomeThreeCta from "@/components/containers/home-three/HomeThreeCta";
import HomeThreeTestimonial from "@/components/containers/home-three/HomeThreeTestimonial";
import FaqSection from "@/components/containers/faq/FaqSection";
import HomeThreeNews from "@/components/containers/home-three/HomeThreeNews";
import FooterThree from "@/components/layout/footer/FooterThree";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerThree />
      <HomeThreeFeature />
      <HomeThreeAbout />
      <HomeThreePricing />
      <HomeThreeService />
      <Offer />
      <HomeThreeHosting />
      <HomeThreeCta />
      <HomeThreeTestimonial />
      <FaqSection />
      <HomeThreeNews />
      <FooterThree />
      <CustomCursor />
    </>
  );
};

export default page;
