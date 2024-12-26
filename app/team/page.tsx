import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import TeamSection from "@/components/containers/team/TeamSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Team" />
      <TeamSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
