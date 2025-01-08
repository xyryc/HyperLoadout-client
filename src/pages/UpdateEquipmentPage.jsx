import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Title from "../components/Title";

const UpdateEquipmentPage = () => {
  const loadedData = useLoaderData();
  const navigate = useNavigate();

  const {
    name,
    category,
    photo,
    email,
    username,
    customization,
    description,
    price,
    processing_time,
    rating,
    stock,
    _id,
  } = loadedData;

  const handleUpdateEquipment = (event) => {
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

    const updatedEquipment = {
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

    fetch(`https://hyper-loadout-server.vercel.app/update-equipment/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Item updated successfully",
            icon: "success",
          });

          navigate("/my-equipment");
        }
      });
  };

  return (
    <div className="container mx-auto px-6 lg:px-20">
      <Title
        heading={"Update Equipment"}
        subHeading={"Revise and Keep Your Gear Information Up to Date"}
      />

      <form
        onSubmit={handleUpdateEquipment}
        className="bg-base-200 shadow-md rounded-lg p-8  grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Input Fields */}
        <div>
          <label className="block text-sm font-medium mb-2 ">
            Product Name
          </label>
          <input
            defaultValue={name}
            type="text"
            name="name"
            placeholder="Enter product name"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">Category</label>
          <input
            defaultValue={category}
            type="text"
            name="category"
            placeholder="Enter category"
            className="input input-bordered w-full"
          />
        </div>

        <div className="lg:col-span-2">
          <label className="block text-sm font-medium mb-2 ">Description</label>
          <textarea
            defaultValue={description}
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
            defaultValue={processing_time}
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
            defaultValue={customization}
            type="text"
            name="customization"
            placeholder="Customization details"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">Rating</label>
          <input
            defaultValue={rating}
            type="number"
            name="rating"
            placeholder="Enter rating"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">Price</label>
          <input
            defaultValue={price}
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
            defaultValue={stock}
            type="number"
            name="stock"
            placeholder="Stock quantity"
            className="input input-bordered w-full"
          />
        </div>

        <div className="lg:col-span-2">
          <label className="block text-sm font-medium mb-2 ">Photo URL</label>
          <input
            defaultValue={photo}
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
            value={username}
            className="input input-bordered w-full bg-base-300 cursor-not-allowed"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">User Email</label>
          <input
            type="email"
            name="email"
            value={email}
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
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEquipmentPage;
