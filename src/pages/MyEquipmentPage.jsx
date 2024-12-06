import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";

const MyEquipmentPage = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch(`https://hyper-loadout-server.vercel.app/my-equipment/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        
        setEquipments(data)
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

                <div className="p-4 bg-base-200 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-sm font-light">
                      Stock: {equipment.stock}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{equipment.name}</h3>
                    <p className="mb-10 text-sm font-light">
                      {equipment.description}
                    </p>
                  </div>

                  <span className="text-green-600">
                    ₽ <span className="font-extrabold">{equipment.price}</span>
                  </span>

                  <div className="flex items-center space-x-4">
                    <Link
                      to={`/update-equipment/${equipment._id}`}
                      className="btn btn-info btn-outline"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(equipment._id)}
                      className="btn btn-error btn-outline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>

        // <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center gap-6">
        //   {equipments.map((equipment) => (
        //     <div
        //       key={equipment._id}
        //       className="max-w-sm mx-auto p-4 border shadow-md rounded-lg bg-white"
        //     >
        //       <img
        //         src={equipment.photo}
        //         alt={equipment.name}
        //         className="w-full h-48 object-scale-down rounded-md mb-4"
        //       />
        //       <h2 className="text-lg font-semibold mb-1">{equipment.name}</h2>
        //       <p className="text-sm text-gray-600 mb-1">
        //         <strong>Category:</strong> {equipment.category}
        //       </p>
        //       <p className="text-sm text-gray-600 mb-1">
        //         <strong>Price:</strong> ${equipment.price}
        //       </p>
        //       <p className="text-sm text-gray-600 mb-1">
        //         <strong>Stock:</strong> {equipment.stock} units
        //       </p>
        //       <p className="text-sm text-gray-600 mb-1">
        //         <strong>Rating:</strong> {equipment.rating} ⭐
        //       </p>
        //       <p className="text-sm text-gray-600 mb-1">
        //         <strong>Processing Time:</strong> {equipment.processing_time}{" "}
        //         days
        //       </p>
        //       <p className="text-sm text-gray-600 mb-1">
        //         <strong>Customization:</strong> {equipment.customization}
        //       </p>
        //       <p className="text-sm text-gray-600 mb-1">
        //         <strong>Added by:</strong> {equipment.username} (
        //         {equipment.email})
        //       </p>
        //       <div className="flex justify-between mt-4">
        //         <Link
        //           to={`/update-equipment/${equipment._id}`}
        //           className="btn btn-info btn-outline"
        //         >
        //           Update
        //         </Link>
        //         <button
        //           onClick={() => handleDelete(equipment._id)}
        //           className="btn btn-error btn-outline"
        //         >
        //           Delete
        //         </button>
        //       </div>
        //     </div>
        //   ))}
        // </div>
      )}
    </>
  );
};

export default MyEquipmentPage;
