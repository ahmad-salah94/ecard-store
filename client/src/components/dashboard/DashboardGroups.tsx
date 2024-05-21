import React, { useState } from "react";
import { FaTimes, FaTrash } from "react-icons/fa";

interface Group {
  name: string;
  pricingType: "percent" | "price";
  value: number;
}

const DashboardGroups: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([
    { name: "Group 1", pricingType: "percent", value: 10 },
    { name: "Group 2", pricingType: "price", value: 100 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGroup, setNewGroup] = useState<Group>({
    name: "",
    pricingType: "percent",
    value: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  const addGroup = () => {
    setGroups([...groups, newGroup]);
    setNewGroup({ name: "", pricingType: "percent", value: 0 });
    setIsModalOpen(false);
  };

  const deleteGroup = (index: number) => {
    setGroups(groups.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full  mb-12 xl:mb-0 px-4 mx-auto ">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                المجموعات
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsModalOpen(true)}
              >
                إضافة مجموعة
              </button>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {groups.length === 0 ? (
            <div className="text-center py-4">لا يوجد مجموعات</div>
          ) : (
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    الاسم
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    نوع التسعير
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    القيمة
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    حذف
                  </th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group, index) => (
                  <tr key={index}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      <input
                        type="text"
                        name="name"
                        value={group.name}
                        onChange={(e) => {
                          const updatedGroups = [...groups];
                          updatedGroups[index].name = e.target.value;
                          setGroups(updatedGroups);
                        }}
                        className="border p-1"
                      />
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <select
                        name="pricingType"
                        value={group.pricingType}
                        onChange={(e) => {
                          const updatedGroups = [...groups];
                          updatedGroups[index].pricingType = e.target.value as
                            | "percent"
                            | "price";
                          setGroups(updatedGroups);
                        }}
                        className="border p-1"
                      >
                        <option value="percent">نسبة مئوية</option>
                        <option value="price">سعر</option>
                      </select>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <input
                        type="number"
                        name="value"
                        value={group.value}
                        onChange={(e) => {
                          const updatedGroups = [...groups];
                          updatedGroups[index].value = parseInt(e.target.value);
                          setGroups(updatedGroups);
                        }}
                        className="border p-1"
                      />
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button
                        onClick={() => deleteGroup(index)}
                        className="text-red-500"
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
        <div className="flex justify-end p-4">
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => console.log("Saved")}
          >
            حفظ
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-1/3">
            <button
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>
            <h3 className="text-lg font-semibold mb-4">إضافة مجموعة جديدة</h3>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">الاسم</label>
              <input
                type="text"
                name="name"
                value={newGroup.name}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">نوع التسعير</label>
              <select
                name="pricingType"
                value={newGroup.pricingType}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              >
                <option value="percent">نسبة مئوية</option>
                <option value="price">سعر</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">القيمة</label>
              <input
                type="number"
                name="value"
                value={newGroup.value}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <button
              className="bg-indigo-500 text-white px-3 py-2 rounded"
              onClick={addGroup}
            >
              إضافة
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardGroups;
