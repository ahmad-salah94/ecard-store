import VisitorNavbar from "../visitor/VisitorNavbar";
import { Outlet } from "react-router-dom";
import VisitorFooter from "../visitor/VisitorFooter";

const VisitorLayout = () => {
  return (
    <div className="bg-primary-bg">
      <VisitorNavbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <VisitorFooter />
    </div>
  );
};

export default VisitorLayout;
