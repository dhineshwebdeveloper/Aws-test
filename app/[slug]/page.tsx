import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/VpostBannerCommon";
import NewsGrid from "@/components/containers/news/VNewsDetails";
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
