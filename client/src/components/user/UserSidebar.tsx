import { useTranslation } from "react-i18next";
import { FaHome, FaUser } from "react-icons/fa"; // Example icons from React Icons
import { IoIosSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
// user sidebar
const UserSidebar = () => {
  const { t } = useTranslation();
  return (
    <nav className="w-[210px] hidden sm:flex bg-primary text-white  rtl:left-[5vw]  min-h-[750px] p-6 rounded-lg fixed top-[125px] ltr:right-[5vw]  flex-col justify-center text-md font-bold ">
      <div className="flex flex-col justify-between h-[650px]  ">
        <ul className="flex flex-col  w-full text-lg font-normal   ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-end items-center w-full mb-4 bg-white  text-primary rounded-xl p-1 pr-3"
                  : "flex justify-end items-center w-full mb-4 p-1 pr-3"
              }
            >
              <h3 className="mr-2"> {t("user_sidebar.main")} </h3>
              <FaHome />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-end items-center w-full mb-4 bg-white  text-primary rounded-xl p-1 pr-3"
                  : "flex justify-end items-center w-full mb-4 p-1 pr-3"
              }
            >
              <h3 className="mr-2"> {t("user_sidebar.orders")} </h3>
              <FaUser />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invoices"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-end items-center w-full mb-4 bg-white  text-primary rounded-xl p-1 pr-3"
                  : "flex justify-end items-center w-full mb-4 p-1 pr-3"
              }
            >
              <h3 className="mr-2">{t("user_sidebar.invoices")}</h3>
              <IoIosSettings />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transaction-log"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-end items-center w-full mb-4 bg-white  text-primary rounded-xl p-1 pr-3"
                  : "flex justify-end items-center w-full mb-4 p-1 pr-3"
              }
            >
              <h3 className="mr-2">{t("user_sidebar.transaction_log")}</h3>
              <IoIosSettings />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-distrubitors"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-end items-center w-full mb-4 bg-white  text-primary rounded-xl p-1 pr-3"
                  : "flex justify-end items-center w-full mb-4 p-1 pr-3"
              }
            >
              <h3 className="mr-2">{t("user_sidebar.our_agents")}</h3>
              <IoIosSettings />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-end items-center w-full mb-4 bg-white  text-primary rounded-xl p-1 pr-3"
                  : "flex justify-end items-center w-full mb-4 p-1 pr-3"
              }
            >
              <h3 className="mr-2">{t("user_sidebar.support")}</h3>
              <IoIosSettings />
            </NavLink>
          </li>
        </ul>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "flex justify-end items-center w-full mb-4 bg-white  text-primary rounded-xl p-1 pr-3"
              : "flex justify-end items-center w-full mb-4 p-1 pr-3"
          }
        >
          <h3 className="mr-2 text-lg">{t("user_sidebar.settings")}</h3>
          <IoIosSettings />
        </NavLink>
      </div>
    </nav>
  );
};

export default UserSidebar;
