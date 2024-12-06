import { useState } from "react";
import Reveal from "react-awesome-reveal";
import { FaSortNumericDownAlt, FaSortNumericUpAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { keyframes } from "@emotion/react";

const AllEquipmentPage = () => {
  const loadedData = useLoaderData();
  const [equipments, setEquipments] = useState(loadedData);

  const handleSortDescending = () => {
    fetch("https://hyper-loadout-server.vercel.app/equipments/sort/descending")
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  };

  const handleSortAscending = () => {
    fetch("https://hyper-loadout-server.vercel.app/equipments/sort/ascending")
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  };

  // Define a custom animation (optional)
  const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

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

      <div className="overflow-x-auto lg:overflow-hidden">
        <table className="table">
          {/* Table head */}
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
            {/* Table rows with reveal */}
            {equipments.map((item, index) => (
              <tr key={item._id}>
                <td></td>
                <td>
                  <Reveal
                    keyframes={fadeInUp}
                    delay={index * 100}
                    duration={500}
                  >
                    {index + 1}
                  </Reveal>
                </td>
                <td>
                  <Reveal
                    keyframes={fadeInUp}
                    delay={index * 100}
                    duration={500}
                  >
                    {item.name}
                  </Reveal>
                </td>
                <td>
                  <Reveal
                    keyframes={fadeInUp}
                    delay={index * 100}
                    duration={500}
                  >
                    {item.category}
                  </Reveal>
                </td>
                <td>
                  <Reveal
                    keyframes={fadeInUp}
                    delay={index * 100}
                    duration={500}
                  >
                    {item.price}
                  </Reveal>
                </td>
                <td>
                  <Reveal
                    keyframes={fadeInUp}
                    delay={index * 100}
                    duration={500}
                  >
                    {item.stock}
                  </Reveal>
                </td>
                <td>
                  <Reveal
                    keyframes={fadeInUp}
                    delay={index * 100}
                    duration={500}
                  >
                    {item.username || "-"}
                  </Reveal>
                </td>
                <td>
                  <Reveal
                    keyframes={fadeInUp}
                    delay={index * 60}
                    duration={500}
                  >
                    <Link to={`/equipment/${item._id}`} className="underline">
                      Details
                    </Link>
                  </Reveal>
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
