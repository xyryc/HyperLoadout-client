import Products from "../components/Products";
import Slider from "../components/Slider";
import Sponsors from "../components/Sponsors";
import SportsCategories from "../components/SportsCategories";

const HomeLayout = () => {
  return (
    <div>
      <Slider />
      <Products />
      <Sponsors />
      <SportsCategories/>
    </div>
  );
};

export default HomeLayout;
