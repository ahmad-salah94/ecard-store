import React, { useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

interface Category {
  id: number;
  name: string;
  parent: string;
}

const DashboardAllCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "القسم 1", parent: "الأب 1" },
    { id: 2, name: "القسم 2", parent: "الأب 2" },
  ]);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/your-endpoint/${id}`);
      setCategories(categories.filter((category) => category.id !== id));
      console.log("تم حذف القسم بنجاح");
    } catch (error) {
      console.error("خطأ في حذف القسم:", error);
    }
  };

  return (
    <div className="w-full  mb-12 xl:mb-0 mx-auto" dir="rtl">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                جميع الأقسام
              </h3>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {categories.length === 0 ? (
            <div className="text-center py-4">لا يوجد أقسام</div>
          ) : (
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    ID
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    الاسم
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    الاب
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    حذف
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={index}>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700">
                      {category.id}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {category.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {category.parent}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardAllCategories;
