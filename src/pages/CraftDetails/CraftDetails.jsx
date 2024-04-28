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
    <div>
      <h1>{item.name}</h1>
    </div>
  );
};

export default CraftDetails;
