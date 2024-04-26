import PropTypes from "prop-types";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {createContext} from "react";
import auth from "../FirebaseConfig/Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const values = {
    createUser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
