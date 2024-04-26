import {useContext} from "react";
import {AuthContext} from "../FirebaseProvider/AuthProvider";

const UseAuth = () => {
  const getHooks = useContext(AuthContext);
  return getHooks;
};
export default UseAuth;
