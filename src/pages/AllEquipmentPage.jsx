import { useState } from "react";
import Reveal from "react-awesome-reveal";
import { FaSortNumericDownAlt, FaSortNumericUpAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { keyframes } from "@emotion/react";
import ProductCard from "../components/ProductCard";

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
    <div className="container mx-auto px-4 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-10">
        {/* breadcrumbs */}
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>

        {/* dropdown */}
        <div className="dropdown dropdown-hover dropdown-end mb-4 lg:pr-10">
          <div tabIndex={0} role="button" className="btn btn-sm btn-outline">
            Sort Options
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <button
                onClick={handleSortDescending}
                className="btn btn-sm btn-ghost w-full text-left"
              >
                Descending{" "}
                <FaSortNumericDownAlt className="inline-block ml-2" />
              </button>
            </li>
            <li>
              <button
                onClick={handleSortAscending}
                className="btn btn-sm btn-ghost w-full text-left"
              >
                Ascending <FaSortNumericUpAlt className="inline-block ml-2" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-4">
        {/* Table rows with reveal */}
        {equipments.map((item, index) => (
          <ProductCard key={index} product={item} />
          //  table
          //  <tr key={item._id}>
          //     <td></td>
          //     <td>
          //       <Reveal
          //         keyframes={fadeInUp}
          //         delay={index * 100}
          //         duration={500}
          //       >
          //         {index + 1}
          //       </Reveal>
          //     </td>
          //     <td>
          //       <Reveal
          //         keyframes={fadeInUp}
          //         delay={index * 100}
          //         duration={500}
          //       >
          //         {item.name}
          //       </Reveal>
          //     </td>
          //     <td>
          //       <Reveal
          //         keyframes={fadeInUp}
          //         delay={index * 100}
          //         duration={500}
          //       >
          //         {item.category}
          //       </Reveal>
          //     </td>
          //     <td>
          //       <Reveal
          //         keyframes={fadeInUp}
          //         delay={index * 100}
          //         duration={500}
          //       >
          //         {item.price}
          //       </Reveal>
          //     </td>
          //     <td>
          //       <Reveal
          //         keyframes={fadeInUp}
          //         delay={index * 100}
          //         duration={500}
          //       >
          //         {item.stock}
          //       </Reveal>
          //     </td>
          //     <td>
          //       <Reveal
          //         keyframes={fadeInUp}
          //         delay={index * 100}
          //         duration={500}
          //       >
          //         {item.username || "-"}
          //       </Reveal>
          //     </td>
          //     <td>
          //       <Reveal
          //         keyframes={fadeInUp}
          //         delay={index * 60}
          //         duration={500}
          //       >
          //         <Link to={`/equipment/${item._id}`} className="underline">
          //           Details
          //         </Link>
          //       </Reveal>
          //     </td>
          //   </tr>
        ))}
      </div>
    </div>
  );
};

export default AllEquipmentPage;
