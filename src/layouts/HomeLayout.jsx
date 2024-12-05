import Products from "../components/Products";
import Slider from "../components/Slider";
import Sponsors from "../components/Sponsors";

const HomeLayout = () => {
  return (
    <div>
      <Slider />
      <Products />
      <Sponsors />
      
    </div>
  );
};

export default HomeLayout;
