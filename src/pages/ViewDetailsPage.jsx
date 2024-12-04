import { useLoaderData } from "react-router-dom";

const ViewDetailsPage = () => {
  const loadedData = useLoaderData();
  // console.log(loadedData);

  return (
    <div className="max-w-md mx-auto p-6 border shadow-lg rounded-lg bg-white">
      <img
        src={loadedData.photo}
        alt={loadedData.name}
        className="w-full h-64 object-scale-down rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{loadedData.name}</h2>
      <p className="text-sm text-gray-500 mb-2">
        Category: <span className="font-medium">{loadedData.category}</span>
      </p>
      <p className="mb-2 text-gray-600">{loadedData.description}</p>
      <p className="text-gray-800 font-medium mb-2">Price: ${loadedData.price}</p>
      <p className="text-gray-800 mb-2">
        Stock Available: <span className="font-medium">{loadedData.stock}</span>
      </p>
      <p className="text-gray-800 mb-2">
        Customization:{" "}
        <span className="font-medium">{loadedData.customization}</span>
      </p>
      <p className="text-gray-800 mb-2">
        Processing Time:{" "}
        <span className="font-medium">{loadedData.processing_time} days</span>
      </p>
      <p className="text-gray-800">
        Rating: <span className="font-medium">{loadedData.rating} ⭐</span>
      </p>
    </div>
  );
};

export default ViewDetailsPage;
