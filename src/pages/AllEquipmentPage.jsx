import { useState } from "react";
import { FaSortNumericDownAlt, FaSortNumericUpAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipmentPage = () => {
  const loadedData = useLoaderData();
  const [equipments, setEquipments] = useState(loadedData);

  const handleSortDescending = () => {
    fetch("http://localhost:5000/equipments/sort/descending")
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  };

  const handleSortAscending = () => {
    fetch("http://localhost:5000/equipments/sort/ascending")
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  };

  return (
    <div>
      <p className="text-right container mx-auto space-x-2">
        <button
          onClick={handleSortDescending}
          className="btn btn-sm btn-outline mb-4"
        >
          Descending <FaSortNumericDownAlt />
        </button>
        <button
          onClick={handleSortAscending}
          className="btn btn-sm btn-outline mb-4"
        >
          Ascending <FaSortNumericUpAlt />
        </button>
      </p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th></th>
              <th>Index</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Added by</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {equipments.map((item, index) => (
              <tr key={item._id}>
                <th></th>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>{item.username}</td>
                <td>
                  <Link to={`/equipment/${item._id}`} className="underline">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipmentPage;
