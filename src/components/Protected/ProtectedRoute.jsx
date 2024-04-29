import PropTypes from "prop-types";
import UseAuth from "../../Hooks/UseAuth";
import {Navigate, useLocation} from "react-router-dom";
const ProtectedRoute = ({children}) => {
  const {user} = UseAuth();
  const path = useLocation();

  if (!user) {
    return <Navigate to="/sign_in" state={path?.pathname || "/"} />;
  }

  return <div>{children}</div>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
