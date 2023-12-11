import AccessoryHotSale from "../Components/Layout/AccesoryHotSale";
import Adsense from "../Components/Layout/Adsense";
import Banner from "../Components/Layout/Banner";
import Category from "../Components/Layout/Category";
import Customer from "../Components/Layout/Customer";
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";
import HotSale from "../Components/Layout/HotSale";
import InforTech from "../Components/Layout/InforTech";
import IpadHotSale from "../Components/Layout/IpadHotSale";
import IphoneHotSale from "../Components/Layout/IphoneHotSale";
import MacbookHotSale from "../Components/Layout/MacbookHotSale";
import Vocher from "../Components/Layout/Vocher";
import WatchHotSale from "../Components/Layout/WatchHotSale";

const HomePage = () => {
  return (
    <div className=" min-[1280px]:pt-44 min-[768px]:pt-52 max-md:pt-80">
      <Header />
      <Banner />
      <HotSale />
      <Category />
      <IphoneHotSale />
      <MacbookHotSale />
      <Adsense />
      <IpadHotSale />
      <WatchHotSale />
      <AccessoryHotSale />
      <Vocher />
      <InforTech />
      <Customer />
      <Footer />
    </div>
  );
};

export default HomePage;
