import {Link, useLoaderData} from "react-router-dom";

const AllCraft = () => {
  const allData = useLoaderData();

  return (
    <div className="overflow-x-auto lg:max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-bold mt-4">All Art & Craft</h1>
      <table className="table table-zebra mt-6 border">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((data) => (
            <tr key={data._id}>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.rating}</td>
              <td>
                <Link to={`/craftDetails/${data._id}`}>
                  <button className="btn bg-[#E47E98] text-white">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCraft;
