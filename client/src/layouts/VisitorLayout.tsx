import VisitorNavbar from "../components/visitor/VisitorNavbar";
import { Navigate, Outlet } from "react-router-dom";
import VisitorFooter from "../components/visitor/VisitorFooter";

const VisitorLayout = () => {
  const authenticated = localStorage.getItem("token") ? true : false;
  return !authenticated ? (
    <div className="bg-primary-bg">
      <VisitorNavbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <VisitorFooter />
    </div>
  ) : (
    <Navigate to={"/"} />
  );
};

export default VisitorLayout;
