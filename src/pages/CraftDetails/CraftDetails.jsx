import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const CraftDetails = () => {
  const {id} = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleItem/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, [id]);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-7xl mx-auto lg:mt-6 gap-36">
      <figure>
        <img className="md:h-96" src={item.image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>Category : {item.category}</p>
        <p>Price : {item.price}</p>
        <p>Stock Status {item.stockStatus}</p>
        <p>Rating : {item.rating}</p>
        <p>Processing Time: {item.processingTime}</p>
        <p> Descriptions : {item.description}</p>
      </div>
    </div>
  );
};

export default CraftDetails;
