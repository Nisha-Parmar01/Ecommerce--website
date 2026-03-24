import Banner from "../../components/Banner/Banner";
import ShopCategory from "../../components/Shop/ShopCategory";
import Features from "../../components/Features/Feature";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  return (
    <>
      <Banner />
      <ShopCategory />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;