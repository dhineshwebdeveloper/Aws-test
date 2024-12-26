import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import NewsGrid from "@/components/containers/news/NewsGrid";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="News Grid" />
      <NewsGrid />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
