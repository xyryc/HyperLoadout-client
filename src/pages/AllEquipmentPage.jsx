import { Link, useLoaderData } from "react-router-dom";

const AllEquipmentPage = () => {
  const loadedData = useLoaderData();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th></th>
              <th>Index</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loadedData.map((item, index) => (
              <tr key={item._id}>
                <th></th>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>
                  <Link to={`/equipment/${item._id}`} className="underline">
                    Details
                  </Link>
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
