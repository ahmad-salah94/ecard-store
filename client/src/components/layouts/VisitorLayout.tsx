import Navbar from "../common/Navbar";
import { Outlet } from "react-router-dom";
import VisitorFooter from "../visitor/VisitorFooter";

const VisitorLayout = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Outlet />
      <VisitorFooter />
    </div>
  );
};

export default VisitorLayout;
