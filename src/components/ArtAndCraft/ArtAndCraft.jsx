import {useEffect, useState} from "react";
import {CiDollar} from "react-icons/ci";
import {FcRating} from "react-icons/fc";
import {Link} from "react-router-dom";

const ArtAndCraft = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-psi-lovat.vercel.app/allData")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div className="lg:max-w-[1440px] mx-auto">
      <p className="text-center text-4xl font-bold mt-12">Atr & Craft</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-12 gap-24">
        {items.slice(0, 6).map((item) => (
          <div key={item._id}>
            <div className="card card-compact w-96 shadow-xl border">
              <img
                className="rounded-xl md:h-[240px] bg-cover"
                src={
                  item?.image ||
                  "https://i.ibb.co/4FL03MS/illustration-cute-camera-character-being-confused-161751-1699.jpg"
                }
                alt=""
              />
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <div className="flex text-2xl">
                  <p className="flex gap-2 items-center">
                    <CiDollar /> {item.price}
                  </p>
                  <p className="flex gap-2 items-center">
                    <FcRating /> {item.rating}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/craftDetails/${item._id}`}>
                    <button className="btn bg-[#E47E98]">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtAndCraft;
