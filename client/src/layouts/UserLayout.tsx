// src/components/UserLayout.tsx
import "i18next";
import { Navigate, Outlet } from "react-router-dom";
import UserNavbar from "@/components/user/UserNavbar";
import UserSidebar from "@/components/user/UserSidebar";
import UserMobileBottomBar from "@/components/user/UserMobileBottomBar";
import { useTranslation } from "react-i18next";

const UserLayout = (): JSX.Element => {
  const authenticated = localStorage.getItem("token");
  const { t } = useTranslation();
  return authenticated ? (
    <div className="bg-primary-bg " dir={t("dir")}>
      <UserNavbar />
      <UserMobileBottomBar />
      <main className="min-h-screen w-full relative mt-[125px] container mx-auto">
        <UserSidebar />

        <div className="sm:w-[calc(100%-250px)] w-full  pb-[100px]">
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
