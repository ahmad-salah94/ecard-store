import React, { useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";

interface Currency {
  id: number;
  name: string;
  abbreviation: string;
  quantityPricing: number;
  cost: number;
  visible: boolean;
  available: boolean;
  priceAPI: number;
  price: number;
}

const DashboardAllProducts: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([
    {
      id: 1,
      name: "الدولار الأمريكي",
      abbreviation: "USD",
      quantityPricing: 10,
      cost: 98,
      visible: true,
      available: true,
      priceAPI: 100,
      price: 102,
    },
    {
      id: 2,
      name: "اليورو",
      abbreviation: "EUR",
      quantityPricing: 15,
      cost: 118,
      visible: false,
      available: true,
      priceAPI: 120,
      price: 122,
    },
  ]);

  const [isEditing, setIsEditing] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/your-endpoint/${id}`);
      setCurrencies(currencies.filter((currency) => currency.id !== id));
      console.log("تم حذف العملة بنجاح");
    } catch (error) {
      console.error("خطأ في حذف العملة:", error);
    }
  };

  const handleEdit = (id: number) => {
    setIsEditing(id);
  };

  const handleSave = async (id: number) => {
    setIsEditing(null);
    // Optionally send a request to update the currency data
  };

  return (
    <div className="w-full  mb-12 xl:mb-0 mx-auto" dir="rtl">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex justify-end">
            <h3 className="font-semibold text-base text-blueGray-700">
              جميع العملات
            </h3>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {currencies.length === 0 ? (
            <div className="text-center py-4">لا يوجد عملات</div>
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
                    العملة
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    تسعير الكمية
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    الكلفة
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    الظهور
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    متوفر
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    السعر API
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    السعر
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    خيارات
                  </th>
                </tr>
              </thead>
              <tbody>
                {currencies.map((currency) => (
                  <tr key={currency.id}>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-blueGray-700">
                      {currency.id}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {isEditing === currency.id ? (
                        <input
                          type="text"
                          value={currency.name}
                          className="border rounded px-2 py-1 w-24"
                          onChange={(e) =>
                            setCurrencies((prev) =>
                              prev.map((curr) =>
                                curr.id === currency.id
                                  ? { ...curr, name: e.target.value }
                                  : curr
                              )
                            )
                          }
                        />
                      ) : (
                        currency.name
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {isEditing === currency.id ? (
                        <input
                          type="text"
                          value={currency.abbreviation}
                          className="border rounded px-2 py-1 w-24"
                          onChange={(e) =>
                            setCurrencies((prev) =>
                              prev.map((curr) =>
                                curr.id === currency.id
                                  ? { ...curr, abbreviation: e.target.value }
                                  : curr
                              )
                            )
                          }
                        />
                      ) : (
                        currency.abbreviation
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {isEditing === currency.id ? (
                        <input
                          type="number"
                          value={currency.quantityPricing}
                          className="border rounded px-2 py-1 w-24"
                          onChange={(e) =>
                            setCurrencies((prev) =>
                              prev.map((curr) =>
                                curr.id === currency.id
                                  ? {
                                      ...curr,
                                      quantityPricing: Number(e.target.value),
                                    }
                                  : curr
                              )
                            )
                          }
                        />
                      ) : (
                        currency.quantityPricing
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {isEditing === currency.id ? (
                        <input
                          type="number"
                          value={currency.cost}
                          className="border rounded px-2 py-1 w-24"
                          onChange={(e) =>
                            setCurrencies((prev) =>
                              prev.map((curr) =>
                                curr.id === currency.id
                                  ? { ...curr, cost: Number(e.target.value) }
                                  : curr
                              )
                            )
                          }
                        />
                      ) : (
                        currency.cost
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {isEditing === currency.id ? (
                        <input
                          type="checkbox"
                          checked={currency.visible}
                          onChange={(e) =>
                            setCurrencies((prev) =>
                              prev.map((curr) =>
                                curr.id === currency.id
                                  ? { ...curr, visible: e.target.checked }
                                  : curr
                              )
                            )
                          }
                        />
                      ) : (
                        <input
                          type="checkbox"
                          checked={currency.visible}
                          disabled
                        />
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {isEditing === currency.id ? (
                        <input
                          type="checkbox"
                          checked={currency.available}
                          onChange={(e) =>
                            setCurrencies((prev) =>
                              prev.map((curr) =>
                                curr.id === currency.id
                                  ? { ...curr, available: e.target.checked }
                                  : curr
                              )
                            )
                          }
                        />
                      ) : (
                        <input
                          type="checkbox"
                          checked={currency.available}
                          disabled
                        />
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {isEditing === currency.id ? (
                        <input
                          type="number"
                          value={currency.priceAPI}
                          className="border rounded px-2 py-1 w-24"
                          onChange={(e) =>
                            setCurrencies((prev) =>
                              prev.map((curr) =>
                                curr.id === currency.id
                                  ? {
                                      ...curr,
                                      priceAPI: Number(e.target.value),
                                    }
                                  : curr
                              )
                            )
                          }
                        />
                      ) : (
                        currency.priceAPI
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {isEditing === currency.id ? (
                        <input
                          type="number"
                          value={currency.price}
                          className="border rounded px-2 py-1 w-24"
                          onChange={(e) =>
                            setCurrencies((prev) =>
                              prev.map((curr) =>
                                curr.id === currency.id
                                  ? { ...curr, price: Number(e.target.value) }
                                  : curr
                              )
                            )
                          }
                        />
                      ) : (
                        currency.price
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {isEditing === currency.id ? (
                        <button
                          onClick={() => handleSave(currency.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <FaSave />
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(currency.id)}
                            className="text-blue-600 hover:text-blue-900 mx-2"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(currency.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTrash />
                          </button>
                        </>
                      )}
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

export default DashboardAllProducts;
