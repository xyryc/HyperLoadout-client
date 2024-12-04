import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyEquipmentPage = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-equipment/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, [user?.email]);

  return (
    <>
      {equipments.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[49vh] space-y-4">
          <p className="text-center text-3xl font-bold">
            You do not have added any equipments.
          </p>
          <Link to="/add-equipment" className="btn btn-outline">
            Go to Add Equipment Page
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center gap-6">
          {equipments.map((equipment) => (
            <div
              key={equipment._id}
              className="max-w-sm mx-auto p-4 border shadow-md rounded-lg bg-white"
            >
              <img
                src={equipment.photo}
                alt={equipment.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-1">{equipment.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Category:</strong> {equipment.category}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Price:</strong> ${equipment.price}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Stock:</strong> {equipment.stock} units
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Rating:</strong> {equipment.rating} ⭐
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Processing Time:</strong> {equipment.processing_time}{" "}
                days
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Customization:</strong> {equipment.customization}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Added by:</strong> {equipment.username} (
                {equipment.email})
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => onUpdate(equipment._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => onDelete(equipment._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyEquipmentPage;
