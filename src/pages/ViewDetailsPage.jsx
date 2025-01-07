import { BiCategory } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import {
  LuChartNoAxesCombined,
  LuCircleUserRound,
  LuCircuitBoard,
  LuDollarSign,
  LuStar,
  LuTruck,
} from "react-icons/lu";

const ViewDetailsPage = () => {
  const loadedData = useLoaderData();
  const {
    _id,
    category,
    customization,
    description,
    email,
    name,
    photo,
    price,
    processing_time,
    rating,
    stock,
    username,
  } = loadedData;

  return (
    <div className="container mx-auto px-4 mb-20">
      <div className="breadcrumbs text-sm py-6">
        <ul>
          <li>
            <Link to="/" className="flex items-center gap-2">
              <FaHome /> Home
            </Link>
          </li>

          <li>
            <Link to="/all-equipments" className="flex items-center gap-2">
              <IoGameController />
              Equipments
            </Link>
          </li>

          <li>
            <a>{category}</a>
          </li>
          <li>
            <a>{name}</a>
          </li>
        </ul>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center place-items-center gap-10">
        <div className="w-full border h-96 flex justify-center items-center overflow-hidden bg-base-200">
          <img className="object-scale-down h-full" src={photo} alt="" />
        </div>

        <div className="w-full flex flex-col h-full">
          <div>
            <p className="flex items-center gap-2">
              <BiCategory /> {category}
            </p>
            <h1 className="text-5xl font-bold font-bebas-neue my-2 tracking-wider">
              {name}
            </h1>
            <p className="text-3xl font-black flex items-center">${price}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <LuStar
                    key={index}
                    size={20}
                    color={index < rating ? "#16a34a" : "#E5E7EB"}
                  />
                ))}
              </div>
            </div>

            <div className="divider"></div>
          </div>

          <p className="mb-2 text-pretty">{description}</p>
          <ul className="flex-grow space-y-2 list-disc list-inside text-balance font-light">
            <li className="flex items-center gap-2">
              <LuChartNoAxesCombined /> Stock: {stock}
            </li>
            <li className="flex items-center gap-2">
              <LuCircuitBoard /> Customization: {customization}
            </li>
            <li className="flex items-center gap-2">
              <LuTruck /> Deliver within {processing_time} days
            </li>
            <li className="flex items-center gap-2">
              <LuCircleUserRound /> Seller: {username} ({email})
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;
