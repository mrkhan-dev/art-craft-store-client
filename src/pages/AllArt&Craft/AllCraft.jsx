import {useLoaderData} from "react-router-dom";

const AllCraft = () => {
  const addData = useLoaderData();

  return (
    <div>
      <h1 className="text-center">All Art & Craft {addData.length} </h1>
    </div>
  );
};

export default AllCraft;
