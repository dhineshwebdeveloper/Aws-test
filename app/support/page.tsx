import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import ChooseUs from "@/components/containers/support/ChooseUs";
import FaqSupport from "@/components/containers/support/FaqSupport";
import SupportContact from "@/components/containers/support/SupportContact";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Support" />
      <ChooseUs />
      <FaqSupport />
      <SupportContact />
      <Testimonial />
      <Brand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
