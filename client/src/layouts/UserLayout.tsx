// src/components/UserLayout.tsx

import { Navigate, Outlet } from "react-router-dom";
import UserNavbar from "@/components/user/UserNavbar";
import UserSidebar from "@/components/user/UserSidebar";

const UserLayout = (): JSX.Element => {
  const authenticated = localStorage.getItem("token");

  return authenticated ? (
    <div className="bg-primary-bg">
      <UserNavbar />
      <main className="min-h-screen w-full relative mt-[125px] container mx-auto">
        <UserSidebar />

        <div className="w-[calc(100%-250px)]">
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  ) : (
    <Navigate to={"/login"} replace />
  );
};

export default UserLayout;
