import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/equipment/${product._id}`}
      key={product._id}
      className="w-full bg-base-100 flex flex-col border rounded"
    >
      <img
        className="w-[298px] h-[298px] object-scale-down mx-auto p-4"
        src={product.photo}
        alt={product.name}
      />

      <div className="p-4 bg-base-200 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-sm font-light opacity-60 text-pretty">
            {product.description.length > 70
              ? `${product.description.substring(0, 70)}...`
              : product.description}
          </p>
        </div>

        <div className="flex items-center gap-5 mt-3">
          <span className="font-extrabold text-2xl">${product.price}</span>

          <p className="border text-green-600 text-[0.8rem] border-green-400 px-2 py-1 rounded-md">
            {Math.floor(Math.random() * (35 - 5 + 1)) + 5}% Off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
