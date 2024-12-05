import { BiCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

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
      <div className="breadcrumbs text-sm pt-2 pb-6">
        <ul>
          <li>
            <Link to="/">Home</Link>
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
            <h1 className="text-5xl font-bold font-bebas-neue my-2">{name}</h1>
            <p className="text-3xl">
              ₽ <span className="font-black">{price}</span>
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    size={20}
                    color={index < rating ? "#2171ad" : "#E5E7EB"}
                  />
                ))}
              </div>
              <p>{rating}</p>
            </div>

            <div className="divider"></div>
          </div>

          <ul className="flex-grow space-y-2 list-disc list-inside text-balance font-light">
            <li>Description: {description}</li>
            <li>Stock: {stock}</li>
            <li>Customization: {customization}</li>
            <li>Delivery Time: within {processing_time} days</li>
            <li>Product Id: {_id}</li>
            <li>
              Added by: {username} ({email})
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;
