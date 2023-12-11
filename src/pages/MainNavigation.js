import { Outlet } from "react-router-dom";
import MainNavBar from "../Components/Navigation/MainNavBar";

const MainNavigation = () => {
  return (
    <div>
      <MainNavBar />
      <Outlet />
    </div>
  );
};

export default MainNavigation;
