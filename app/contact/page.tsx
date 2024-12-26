import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import ChooseUs from "@/components/containers/support/ChooseUs";
import MainContact from "@/components/containers/support/MainContact";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Contact Us" />
      <ChooseUs />
      <MainContact />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
