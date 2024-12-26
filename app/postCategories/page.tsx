import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import CatNewsGrid from "@/components/containers/news/categorygrid";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="News Grid" />
      <CatNewsGrid />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
