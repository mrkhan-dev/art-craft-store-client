import {Outlet} from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
  return (
    <div>
      <div className="h-[91px]">
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
