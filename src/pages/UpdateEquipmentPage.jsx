import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

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

    fetch(`http://localhost:5000/update-equipment/${_id}`, {
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
    <div className="text-center container mx-auto px-4">
      <h1 className=" text-3xl font-bold font-bebas-neue">Update Equipment</h1>

      <form
        onSubmit={handleUpdateEquipment}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <input
          defaultValue={name}
          type="text"
          name="name"
          placeholder="Product Name"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={category}
          type="text"
          name="category"
          placeholder="Category"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={description}
          type="text"
          name="description"
          placeholder="Description"
          className=" border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={processing_time}
          type="number"
          name="processing_time"
          placeholder="Processing Time (in days)"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={customization}
          type="text"
          name="customization"
          placeholder="Customization"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={rating}
          type="number"
          name="rating"
          placeholder="Rating"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={price}
          type="number"
          name="price"
          placeholder="Price"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={stock}
          type="number"
          name="stock"
          placeholder="Stock Status (Available Quantity)"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          defaultValue={photo}
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="sm:col-span-2 border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="username"
          placeholder="User Name"
          defaultValue={username}
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
          readOnly
        />

        <input
          type="email"
          name="email"
          placeholder="User Email"
          defaultValue={email}
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
          readOnly
        />

        <input
          className="rounded-md bg-blue-100 sm:col-span-2 border-b-gray-200 border py-2 hover:border-blue-500 duration-200 font-medium hover:bg-blue-100"
          type="submit"
          value="Update Item"
        />
      </form>
    </div>
  );
};

export default UpdateEquipmentPage;
