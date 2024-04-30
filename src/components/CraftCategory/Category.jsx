import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-psi-lovat.vercel.app/allCategory")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);
  return (
    <div className=" lg:max-w-[1440px] mx-auto grid lg:grid-cols-3">
      {category.slice(0, 6).map((item) => (
        <div key={item._id}>
          <Link to={`/showCategories/${item.category}`}>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
