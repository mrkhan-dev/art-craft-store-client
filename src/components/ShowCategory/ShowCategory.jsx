import {useParams} from "react-router-dom";

const ShowCategory = () => {
  const {category} = useParams();
  console.log(category);

  // useEffect(() => {
  //   fetch(`https://assignment-10-server-psi-lovat.vercel.app/category/${category?.category}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [category]);

  return (
    <div>
      <p>category</p>
    </div>
  );
};

export default ShowCategory;
