import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import DataCenter from "@/components/containers/DataCenter";
import DataChoose from "@/components/containers/pricing/DataChoose";
import DataBrand from "@/components/containers/DataBrand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Data Center" />
      <DataCenter />
      <DataChoose />
      <DataBrand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
