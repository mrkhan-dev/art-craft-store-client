import {useEffect, useState} from "react";
import UseAuth from "../../Hooks/UseAuth";
import {FiEye} from "react-icons/fi";
import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftList = () => {
  const {user} = UseAuth() || {};
  const [craft, setCraft] = useState([]);
  const [remove, setRemove] = useState(false);
  console.log(craft);

  useEffect(() => {
    fetch(`http://localhost:5000/myCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCraft(data);
      });
  }, [user, remove]);

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
        fetch(`http://localhost:5000/deleteItem/${id}`, {
          method: "DELETE",
        })
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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-4">
        {craft.map((item) => (
          <div key={item.id}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="md:h-[239px] md:w-[185]"
                  src={item.image}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {item.name} </h2>
                <p> {item.category} </p>
                <p> {item.stockStatus} </p>
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
                      <button className="btn join-item">
                        <CiEdit className="h-8 w-8 text-[#3C393B]" />
                      </button>
                    </Link>
                    <Link to={`/craftDetails/${item._id}`}>
                      <button className="btn join-item">
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
    </div>
  );
};

export default MyCraftList;
