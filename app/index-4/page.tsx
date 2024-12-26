import Header from "@/components/layout/header/Header";
import BannerFour from "@/components/layout/banner/BannerFour";
import HomeFourBrand from "@/components/containers/home-four/HomeFourBrand";
import HomeFourChoose from "@/components/containers/home-four/HomeFourChoose";
import HomeFourPricing from "@/components/containers/home-four/HomeFourPricing";
import HomeFourService from "@/components/containers/home-four/HomeFourService";
import HomeFourFeature from "@/components/containers/home-four/HomeFourFeature";
import HomeFourCta from "@/components/containers/home-four/HomeFourCta";
import HomeFourHosting from "@/components/containers/home-four/HomeFourHosting";
import HomeFourChooseTwo from "@/components/containers/home-four/HomeFourChooseTwo";
import HomeFourTestimonial from "@/components/containers/home-four/HomeFourTestimonial";
import HomeFourBrandTwo from "@/components/containers/home-four/HomeFourBrandTwo";
import FooterThree from "@/components/layout/footer/FooterThree";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerFour />
      <HomeFourBrand />
      <HomeFourChoose />
      <HomeFourPricing />
      <HomeFourService />
      <HomeFourFeature />
      <HomeFourCta />
      <HomeFourHosting />
      <HomeFourChooseTwo />
      <HomeFourTestimonial />
      <HomeFourBrandTwo />
      <FooterThree />
      <CustomCursor />
    </>
  );
};

export default page;
