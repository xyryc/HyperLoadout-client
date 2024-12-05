import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Products = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center pb-10">
        <h1 className="font-bebas-neue text-6xl font-bold">BEST SELLERS</h1>
        <p>Join the hype train with the hottest products in our arsenal</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-4">
        {products.map((product) => (
          <div key={product._id} className="w-full bg-base-100 flex flex-col">
            <img
              data-tooltip-id="product"
              data-tooltip-content={product.name}
              className="w-[298px] h-[298px] object-scale-down mx-auto"
              src={product.photo}
              alt={product.name}
            />
            <Tooltip id="product" />

            <div className="p-4 bg-base-200 flex flex-col justify-between flex-grow">
              <div>
                <div className="text-sm font-light">Stock: {product.stock}</div>
                <h3 className="text-lg font-bold mb-3">{product.name}</h3>
                <p className="mb-10 text-sm font-light">
                  {product.description}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-green-600">
                  ₽ <span className="font-extrabold">{product.price}</span>
                </span>
                <Link
                  to={`/equipment/${product._id}`}
                  className="btn btn-link text-red-600"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
