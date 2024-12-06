import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddEquipmentPage = () => {
  const { user } = useContext(AuthContext);

  //   const navigate = useNavigate();

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
    // console.log(newEquipment);

    // send data to server
    fetch("https://hyper-loadout-server.vercel.app/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item added successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });

          //   navigate("/");
        }
      });
  };

  return (
    <div className="text-center container mx-auto px-4">
      <h1 className=" text-3xl font-bold font-bebas-neue">Add Equipment</h1>

      <form
        onSubmit={handleAddEquipment}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          className=" border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="number"
          name="processing_time"
          placeholder="Processing Time (in days)"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="customization"
          placeholder="Customization"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock Status (Available Quantity)"
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          className="sm:col-span-2 border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        <input
          type="text"
          name="username"
          placeholder="User Name"
          defaultValue={user.displayName}
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
          readOnly
        />

        <input
          type="email"
          name="email"
          placeholder="User Email"
          defaultValue={user.email}
          className="border-[#e5eaf2] border-b outline-none px-4 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
          readOnly
        />

        <input
          className="rounded-md bg-blue-100 sm:col-span-2 border-b-gray-200 border py-2 hover:border-blue-500 duration-200 font-medium hover:bg-blue-100"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddEquipmentPage;
