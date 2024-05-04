import { FaHome, FaUser } from "react-icons/fa"; // Example icons from React Icons
import { IoIosSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
// user sidebar
const UserSidebar = () => {
  return (
    <nav className="w-[210px] bg-primary text-white min-h-[750px] p-6 rounded-lg fixed top-[125px] right-[5vh] flex flex-col justify-center text-md font-bold ">
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
              <h3 className="mr-2">الرئيسية</h3>
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
              <h3 className="mr-2">الطلبات</h3>
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
              <h3 className="mr-2">الفواتير</h3>
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
              <h3 className="mr-2">سجل العمليات</h3>
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
              <h3 className="mr-2">وكلاؤنا</h3>
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
              <h3 className="mr-2">الدعم الفني</h3>
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
          <h3 className="mr-2 text-lg">الاعدادات</h3>
          <IoIosSettings />
        </NavLink>
      </div>
    </nav>
  );
};

export default UserSidebar;
