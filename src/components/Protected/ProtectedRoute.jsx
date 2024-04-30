import PropTypes from "prop-types";
import UseAuth from "../../Hooks/UseAuth";
import {Navigate, useLocation} from "react-router-dom";
import {RotatingLines} from "react-loader-spinner";
const ProtectedRoute = ({children}) => {
  const {user, loading} = UseAuth();
  const path = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-48">
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
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/sign_in" state={path?.pathname || "/"} />;
  }

  return <div>{children}</div>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
