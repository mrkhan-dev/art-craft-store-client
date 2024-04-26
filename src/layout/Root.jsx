import {Outlet} from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
  return (
    <div>
      <div className="h-24">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
