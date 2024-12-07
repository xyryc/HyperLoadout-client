import Products from "../components/Products";
import Reviews from "../components/Reviews";
import Slider from "../components/Slider";
import Sponsors from "../components/Sponsors";
import SportsCategories from "../components/SportsCategories";

const HomeLayout = () => {
  return (
    <div>
      <Slider />
      <Sponsors />
      <Products />
      <SportsCategories/>
      <Reviews/>
    </div>
  );
};

export default HomeLayout;
