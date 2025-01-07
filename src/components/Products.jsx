import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("https://hyper-loadout-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      <Fade cascade damping={0.1}>
        <div className="text-center pb-10">
          <h1 className="font-bebas-neue text-6xl font-bold">BEST SELLERS</h1>
          <p>Join the hype train with the hottest products in our arsenal</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-4">
          <Fade cascade damping={0.1}>
            {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
            ))}
          </Fade>
        </div>

        <div className="flex justify-center mt-16">
          <Link to="/all-equipments" className="btn btn-outline rounded">
            Sell All
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Products;
