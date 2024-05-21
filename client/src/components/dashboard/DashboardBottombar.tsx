import { useState } from "react";
import { FaBars, FaClipboardList, FaCog, FaFileInvoice } from "react-icons/fa";
import { FaHome, FaUser } from "react-icons/fa"; // Example icons from React Icons
import { IoIosSettings } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
const DashboardBottombar = () => {
  const [isSideBarOpened, setIsSideBarOpened] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`fixed top-0 ${
          isSideBarOpened ? "block" : "hidden"
        } duration-500 left-0 w-[100vw] h-[100vh] z-[9990]  bg-black opacity-70`}
        onClick={() => setIsSideBarOpened(false)}
      ></div>
      <nav
        className={`w-[70vw] ${
          isSideBarOpened ? "translate-x-[0]" : "translate-x-[100vw]"
        } duration-200  z-[10000] sm:flex bg-primary text-white min-h-[750px] p-6  fixed  right-0 h-[100vh] top-0  flex-col justify-center text-md font-bold `}
      >
        <div className="flex flex-col justify-between h-[650px]  ">
          <ul className="flex flex-col  w-full text-lg font-normal   ">
            <li>
              <NavLink
                onClick={() => setIsSideBarOpened(false)}
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
                onClick={() => setIsSideBarOpened(false)}
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
                onClick={() => setIsSideBarOpened(false)}
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
                onClick={() => setIsSideBarOpened(false)}
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
                onClick={() => setIsSideBarOpened(false)}
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
                onClick={() => setIsSideBarOpened(false)}
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
            onClick={() => setIsSideBarOpened(false)}
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
      <div className="fixed sm:hidden bottom-0 w-full text-xl h-[70px]  bg-white border-t border-gray-200 px-12 flex justify-around p-3 z-[1000]">
        <div className="flex justify-between flex-1 items-center h-full">
          <Link to={"settings"}>
            <FaCog className="text-primary" />
          </Link>
          <Link to={"invoices"}>
            <FaFileInvoice className="text-primary  " />
          </Link>
        </div>

        <div className="flex-1 relative">
          <Link to={"/"}>
            <FaHome className="  text-white bg-primary absolute -top-[35px] left-1/4 xs:left-1/3 text-6xl rounded-full p-4 shadow-lg " />
          </Link>
        </div>

        <div className="flex flex-1 justify-between items-center h-full">
          <Link to={"/orders"}>
            <FaClipboardList className="text-primary" />
          </Link>
          <FaBars
            className="text-primary   cursor-pointer"
            onClick={() => setIsSideBarOpened((prevValue) => !prevValue)}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardBottombar;
