import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import TeamOne from "@/components/containers/team/TeamOne";
import TeamSlider from "@/components/containers/team/TeamSlider";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Team Details" />
      <TeamOne />
      <TeamSlider />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
