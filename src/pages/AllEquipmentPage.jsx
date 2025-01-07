import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { FaHome } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

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

  return (
    <div className="container mx-auto px-4 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-6">
        {/* breadcrumbs */}
        <div className="breadcrumbs text-sm">
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
          </ul>
        </div>

        {/* dropdown */}
        <div className="dropdown dropdown-hover dropdown-end mb-4">
          <div tabIndex={0} role="button" className="btn btn-sm btn-outline">
            <FiFilter /> Sort Options
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow"
          >
            <li>
              <button
                onClick={handleSortAscending}
                className="btn btn-sm btn-ghost w-full text-left"
              >
                Ascending <FaSortAmountUp className="inline-block ml-2" />
              </button>
            </li>

            <li>
              <button
                onClick={handleSortDescending}
                className="btn btn-sm btn-ghost w-full text-left"
              >
                Descending <FaSortAmountDown className="inline-block ml-2" />
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
