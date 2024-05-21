import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaCoins,
  FaHome,
  FaList,
  FaMoneyBill,
  FaPlus,
  FaShoppingBag,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const DashboardSidebar: React.FC = () => {
  const { t } = useTranslation();
  const [collapsedLinks, setCollapsedLinks] = useState({
    home: true,
    orders: true,
    products: true,
    transactionLog: true,
    ourDistributors: true,
    support: true,
    settings: true,
  });

  const toggleCollapse = (link: string) => {
    const updatedCollapsedLinks = Object.keys(collapsedLinks).reduce(
      (acc: any, key: string) => {
        acc[key] = key === link ? !collapsedLinks[link] : true;
        return acc;
      },
      {}
    );

    setCollapsedLinks(updatedCollapsedLinks);
  };

  const isLinkActive = (link: string) => {
    return !collapsedLinks[link];
  };

  return (
    <nav className="w-[250px] hidden sm:flex bg-[#002379] text-white h-screen p-6 fixed top-0 right-0 flex-col justify-center text-md font-bold">
      <div className="flex flex-col justify-between h-[90%]">
        <ul className="flex flex-col w-full text-lg font-normal">
          <NavLink
            to="/"
            className="flex justify-end items-center w-full mb-4 p-1 pr-3"
          >
            <h3 className="mr-2">الرئيسية</h3>
            <FaHome />
          </NavLink>
          <li>
            <motion.button
              onClick={() => toggleCollapse("home")}
              className={`flex justify-end items-center w-full mb-4 p-1 pr-3 ${
                isLinkActive("home") ? "bg-white text-primary rounded-xl" : ""
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <h3 className="mr-2">العملاء</h3>
              <FaUser />
            </motion.button>
            {!collapsedLinks.home && (
              <ul className="pr-6">
                <li>
                  <NavLink
                    to="/add-user"
                    className="flex justify-end items-center w-full mb-4 p-1 pr-3"
                  >
                    <h3 className="mr-2 text-gray-400 text-sm">اضافة مستخدم</h3>
                    <FaPlus />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/charge-operations"
                    className="flex justify-end items-center w-full mb-4 p-1 pr-3"
                  >
                    <h3 className="mr-2 text-gray-400 text-sm">عمليات الشحن</h3>
                    <FaMoneyBill />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/groups"
                    className="flex justify-end items-center w-full mb-4 p-1 pr-3"
                  >
                    <h3 className="mr-2 text-gray-400 text-sm">المجموعات</h3>
                    <FaUsers />
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <motion.button
              onClick={() => toggleCollapse("orders")}
              className={`flex justify-end items-center w-full mb-4 p-1 pr-3 ${
                isLinkActive("orders") ? "bg-white text-primary rounded-xl" : ""
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <h3 className="mr-2">الاقسام</h3>
              <FaList />
            </motion.button>
            {!collapsedLinks.orders && (
              <ul className="px-6  ">
                <li>
                  <NavLink
                    to="/all-categories"
                    className="flex justify-end items-center w-full mb-4 p-1 pr-3"
                  >
                    <h3 className="mr-2 text-gray-400 text-sm">الكل</h3>
                    <FaList />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-category"
                    className="flex justify-end items-center w-full mb-4 p-1 pr-3"
                  >
                    <h3 className="mr-2 text-gray-400 text-sm">اضافة قسم</h3>
                    <FaPlus />
                  </NavLink>
                </li>
                {/* Add more sub-links here if needed */}
              </ul>
            )}
          </li>

          <li>
            <motion.button
              onClick={() => toggleCollapse("products")}
              className={`flex justify-end items-center w-full mb-4 p-1 pr-3 ${
                isLinkActive("products")
                  ? "bg-white text-primary rounded-xl"
                  : ""
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <h3 className="mr-2">المنتجات</h3>
              <FaShoppingBag />
            </motion.button>
            {!collapsedLinks.products && (
              <ul className="px-6  ">
                <li>
                  <NavLink
                    to="/products"
                    className="flex justify-end items-center w-full mb-4 p-1 pr-3"
                  >
                    <h3 className="mr-2 text-gray-400 text-sm">الكل</h3>
                    <FaList />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-product"
                    className="flex justify-end items-center w-full mb-4 p-1 pr-3"
                  >
                    <h3 className="mr-2 text-gray-400 text-sm">اضافة منتج</h3>
                    <FaPlus />
                  </NavLink>
                </li>
                {/* Add more sub-links here if needed */}
              </ul>
            )}
          </li>
          <motion.div
            className={`flex justify-end items-center w-full mb-4 p-1 pr-3 ${
              isLinkActive("settings") ? "bg-white text-primary rounded-xl" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink to="/charge-orders" className="flex items-center">
              <h3 className="mr-2 text-lg">طلبات الشحن</h3>
              <FaMoneyBill />
            </NavLink>
          </motion.div>

          <motion.div
            className={`flex justify-end items-center w-full mb-4 p-1 pr-3 ${
              isLinkActive("settings") ? "bg-white text-primary rounded-xl" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink to="/currencies" className="flex items-center">
              <h3 className="mr-2 text-lg">العملات</h3>
              <FaCoins />
            </NavLink>
          </motion.div>
          {/* Repeat the pattern for other links */}
        </ul>
      </div>
    </nav>
  );
};

export default DashboardSidebar;
