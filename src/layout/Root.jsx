import {Outlet, useNavigation} from "react-router-dom";
import Nav from "../components/Nav";
import {RotatingLines} from "react-loader-spinner";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div className="h-[91px]">
        <Nav />
      </div>
      {navigation.state === "loading" ? (
        <p className="flex justify-center items-center mt-48">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </p>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Root;
