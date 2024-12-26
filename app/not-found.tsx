import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import ErrorSection from "@/components/containers/ErrorSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Page Not Found" />
      <ErrorSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
