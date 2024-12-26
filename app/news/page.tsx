import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import NewsList from "@/components/containers/news/NewsList";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="News List" />
      <NewsList />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
