// src/components/UserLayout.tsx
import "i18next";
import { Navigate, Outlet } from "react-router-dom";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardBottombar from "@/components/dashboard/DashboardBottombar";

const AdminLayout = (): JSX.Element => {
  const authenticated = localStorage.getItem("token");
  return authenticated ? (
    <div className="bg-[#2C4E80]">
      <DashboardBottombar />
      <main className="min-h-screen w-full relative pt-[50px] bg-secondary container mx-auto">
        <DashboardSidebar />
        <div className="sm:w-[calc(100%-250px)] w-full  pb-[100px]">
          <Outlet />
        </div>
      </main>
    </div>
  ) : (
    <Navigate to={"/login"} replace />
  );
};

export default AdminLayout;
