import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import Title from "../components/Title";

const AddEquipmentPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddEquipment = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const processing_time = form.processing_time.value;
    const customization = form.customization.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const stock = form.stock.value;
    const photo = form.photo.value;
    const username = form.username.value;
    const email = form.email.value;

    const newEquipment = {
      name,
      category,
      description,
      processing_time,
      customization,
      rating,
      price,
      stock,
      photo,
      username,
      email,
    };

    fetch("https://hyper-loadout-server.vercel.app/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Equipment added successfully.",
            icon: "success",
            confirmButtonText: "Okay",
          });

          navigate("/my-equipment");
        }
      });
  };

  return (
    <div className="container mx-auto px-6 lg:px-20">
      <Title
        heading={"Add New Equipment"}
        subHeading={"Expand Your Inventory with Cutting-Edge Gaming Gear"}
      />

      <form
        onSubmit={handleAddEquipment}
        className="bg-base-200 shadow-md rounded-lg p-8  grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Input Fields */}
        <div>
          <label className="block text-sm font-medium mb-2 ">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            className="input input-bordered w-full"
          />
        </div>

        <div className="lg:col-span-2">
          <label className="block text-sm font-medium mb-2 ">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">
            Processing Time (in days)
          </label>
          <input
            type="number"
            name="processing_time"
            placeholder="Processing time"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">
            Customization
          </label>
          <input
            type="text"
            name="customization"
            placeholder="Customization details"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">Rating</label>
          <input
            type="number"
            name="rating"
            placeholder="Enter rating"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">
            Stock Status
          </label>
          <input
            type="number"
            name="stock"
            placeholder="Stock quantity"
            className="input input-bordered w-full"
          />
        </div>

        <div className="lg:col-span-2">
          <label className="block text-sm font-medium mb-2 ">Photo URL</label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Read-Only User Info */}
        <div>
          <label className="block text-sm font-medium mb-2 ">User Name</label>
          <input
            type="text"
            name="username"
            value={user.displayName}
            className="input input-bordered w-full bg-base-300 cursor-not-allowed"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">User Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="input input-bordered w-full bg-base-300 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-2 text-center">
          <button
            type="submit"
            className="btn btn-neutral w-full lg:w-1/2 font-medium"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEquipmentPage;
