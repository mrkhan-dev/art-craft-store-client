import {useEffect, useState} from "react";
import UseAuth from "../../Hooks/UseAuth";
import {FiEye} from "react-icons/fi";
import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import "react-tooltip/dist/react-tooltip.css";
import {Tooltip} from "react-tooltip";

const MyCraftList = () => {
  const {user} = UseAuth() || {};
  const [craft, setCraft] = useState([]);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    fetch(
      `https://assignment-10-server-psi-lovat.vercel.app/myCraft/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCraft(data);
      });
  }, [user, remove]);

  const handleFilter = (filter) => {
    if (filter === "customYes") {
      const filterYeas = craft.filter(
        (filtering) => filtering.customization === "Yes"
      );
      console.log(filterYeas);
      setCraft(filterYeas);
    } else if (filter === "customNo") {
      const noFilter = craft.filter(
        (filtering) => filtering.customization === "No"
      );
      setCraft(noFilter);
      console.log(noFilter);
    }
  };

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
        fetch(
          `https://assignment-10-server-psi-lovat.vercel.app/deleteItem/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setRemove(!remove);
            }
          });
      }
    });
  };

  return (
    <div className="lg:max-w-7xl mx-auto">
      <h1 className="text-center mt-8 text-4xl font-bold">My Art & Craft</h1>
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilter("customYes")}>
              <span>Yes</span>
            </li>
            <li onClick={() => handleFilter("customNo")}>
              <span>No</span>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-4">
        {craft.map((item) => (
          <div key={item.id}>
            <div className="card bg-base-100 shadow-md">
              <figure>
                <img
                  className="md:h-[239px] md:w-[248px] lg:w-full px-12 rounded-md"
                  src={item.image}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {item.name} </h2>
                <p> Sub Category {item.category} </p>
                <p> {item.stockStatus} </p>
                <p>Customization : {item.customization}</p>
                <p>{item.price}</p>
                <p>{item.rating}</p>
                <div className="card-actions justify-end">
                  <div className="join gap-2 text-2xl">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn join-item "
                    >
                      <MdDelete className="h-6 w-6 text-[#EA4744]" />
                    </button>
                    <Link to={`/UpdateCraft/${item._id}`}>
                      <button
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Update"
                        className="btn join-item"
                      >
                        <CiEdit className="h-8 w-8 text-[#3C393B]" />
                      </button>
                    </Link>
                    <Link to={`/craftDetails/${item._id}`}>
                      <button
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="view"
                        className="btn join-item"
                      >
                        <FiEye className="h-8 w-8 text-[#E47E98]" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default MyCraftList;
