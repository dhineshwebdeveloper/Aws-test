import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import FaqSection from "@/components/containers/faq/FaqSection";
import ContactSection from "@/components/containers/faq/ContactSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="FAQ's" />
      <FaqSection />
      <ContactSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
