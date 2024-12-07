import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";

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
    <>
      {equipments.length === 0 ? (
        <div className="container mx-auto px-4 flex flex-col justify-center items-center h-[49vh] space-y-4">
          <p className="text-center text-3xl font-bold">
            You do not have added any equipments.
          </p>
          <Link to="/add-equipment" className="btn btn-outline">
            Go to Add Equipment Page
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-4xl font-bebas-neue text-center mb-6">
              My Equipments
            </h1>
          </div>

          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-4">
            <Fade cascade damping={0.1}>
              {equipments.map((equipment) => (
                <div
                  key={equipment._id}
                  className="w-full bg-base-100 flex flex-col border"
                >
                  <img
                    data-tooltip-id="equipment"
                    data-tooltip-content={equipment.name}
                    className="w-[298px] h-[298px] object-scale-down mx-auto"
                    src={equipment.photo}
                    alt={equipment.name}
                  />
                  <Tooltip id="equipment" />

                  <div className="p-4 bg-base-200">
                    <div>
                      <div className="text-sm font-light">
                        Stock: {equipment.stock}
                      </div>
                      <h3 className="text-lg font-bold text-pretty">
                        {equipment.name}
                      </h3>
                      <p className="text-sm font-light text-pretty h-10">
                        {equipment.description}
                      </p>
                      <div className="divider"></div>
                      <div className="font-light text-sm">
                        <p>Customization: {equipment.customization}</p>
                        <p>Category: {equipment.category}</p>
                        <p>Rating: {equipment.rating}/5</p>
                        <p>Delivery: within {equipment.processing_time} days</p>
                        <p>
                          Added by: {equipment.username} ({equipment.email})
                        </p>
                      </div>
                    </div>

                    <div className="divider"></div>

                    <div className="flex items-center justify-between">
                      <p className="text-green-600">
                        ₽ <span className="font-bold">{equipment.price}</span>
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
    </>
  );
};

export default MyEquipmentPage;
