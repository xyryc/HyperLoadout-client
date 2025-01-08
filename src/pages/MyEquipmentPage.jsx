import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";
import Title from "../components/Title";
import { LuChartNoAxesCombined, LuCircuitBoard, LuTruck } from "react-icons/lu";
import { FaStar, FaUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const MyEquipmentPage = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);
  console.log(equipments);

  useEffect(() => {
    fetch(`https://hyper-loadout-server.vercel.app/my-equipment/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hyper-loadout-server.vercel.app/my-equipment/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Item has been deleted.",
                icon: "success",
              });

              const remaining = equipments.filter(
                (equipment) => equipment._id !== id
              );
              setEquipments(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Title
        heading={"My Equipment"}
        subHeading={"Manage Your Collection of Gaming Gear with Ease"}
      />

      {equipments.length === 0 ? (
        <div className="container mx-auto px-4 flex flex-col justify-center items-center h-[60vh] space-y-4">
          <img
            src="https://i.ibb.co.com/8gGCfMy/empty.png"
            alt="empty"
            className="w-32"
          />
          <p className="text-center text-2xl font-bold">
            You do not have added any equipments.
          </p>
          <Link to="/add-equipment" className="btn btn-outline">
            Go to Add Equipment
          </Link>
        </div>
      ) : (
        <div>
          <div className="container mx-auto px-4 grid gap-10 my-4">
            <Fade cascade damping={0.1}>
              {equipments.map((equipment) => (
                <div
                  key={equipment._id}
                  className="w-full bg-base-100 border grid grid-rows-none sm:grid-cols-2"
                >
                  <img
                    data-tooltip-id="equipment"
                    data-tooltip-content={equipment.name}
                    className="w-[298px] h-[298px] object-scale-down m-auto p-4"
                    src={equipment.photo}
                    alt={equipment.name}
                  />
                  <Tooltip id="equipment" />

                  <div className="p-4 bg-base-200">
                    <div>
                      <div className="text-sm font-light flex items-center gap-2">
                        <LuChartNoAxesCombined /> Stock: {equipment.stock}
                      </div>
                      <h3 className="text-2xl font-bold text-pretty">
                        {equipment.name}
                      </h3>
                      <p className="text-sm font-light text-pretty">
                        {equipment.description}
                      </p>

                      <div className="divider"></div>

                      <div className="font-light text-sm">
                        <p className="flex items-center gap-2">
                          <LuCircuitBoard /> Customization:{" "}
                          {equipment.customization}
                        </p>
                        <p className="flex items-center gap-2">
                          <BiCategory /> Category: {equipment.category}
                        </p>
                        <p className="flex items-center gap-2">
                          <FaStar /> Rating: {equipment.rating}/5
                        </p>
                        <p className="flex items-center gap-2">
                          <LuTruck />
                          Delivery: within {equipment.processing_time} days
                        </p>
                        <p className="flex items-center gap-2">
                          <FaUser />
                          Added by: {equipment.username} ({equipment.email})
                        </p>
                      </div>
                    </div>

                    <div className="divider"></div>

                    <div className="flex items-center justify-between">
                      <p className="text-green-600 font-bold text-lg">
                        ${equipment.price}
                      </p>

                      <div className="flex items-center space-x-4">
                        <Link
                          to={`/update-equipment/${equipment._id}`}
                          className="btn btn-xs btn-outline"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(equipment._id)}
                          className="btn btn-xs btn-outline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEquipmentPage;
