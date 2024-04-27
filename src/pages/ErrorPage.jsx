import {Link} from "react-router-dom";
import errorImage from "../assets/4O4Page.png";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-28">
        <img className="h-96" src={errorImage} alt="" />
      </div>
      <h1 className="text-center text-6xl text-red-500 font-bold">
        Page Not Found
      </h1>
      <div className="flex justify-center mt-4">
        <Link to="/">
          <button className="btn">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
