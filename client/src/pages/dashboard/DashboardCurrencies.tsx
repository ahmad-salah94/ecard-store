import React, { useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";

interface Currency {
  id: number;
  name: string;
  abbreviation: string;
  symbol: string;
  price: number;
  purchasePrice: number;
}

const DashboardCurrencies: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([
    {
      id: 1,
      name: "الدولار الأمريكي",
      abbreviation: "USD",
      symbol: "$",
      price: 100,
      purchasePrice: 98,
    },
    {
      id: 2,
      name: "اليورو",
      abbreviation: "EUR",
      symbol: "€",
      price: 120,
      purchasePrice: 118,
    },
  ]);

  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [newCurrency, setNewCurrency] = useState<Currency | null>(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleNewCurrency = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setNewCurrency(null);
  };

  const handleModalSave = async () => {
    if (newCurrency) {
      // Optionally send a request to save the new currency data
      setCurrencies([...currencies, { ...newCurrency, id: Date.now() }]);
      handleModalClose();
    }
  };

  return (
    <div className="w-full  mb-12 xl:mb-0 mx-auto" dir="rtl">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex justify-end">
            <button
              className="bg-primary text-white px-3 py-1 rounded"
              onClick={handleNewCurrency}
            >
              عملة جديدة
            </button>
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
                    الاسم
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    الاختصار
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    الرمز
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    السعر
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-center border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                    سعر الشراء
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
                          type="text"
                          value={currency.symbol}
                          className="border rounded px-2 py-1 w-24"
                          onChange={(e) =>
                            setCurrencies((prev) =>
                              prev.map((curr) =>
                                curr.id === currency.id
                                  ? { ...curr, symbol: e.target.value }
                                  : curr
                              )
                            )
                          }
                        />
                      ) : (
                        currency.symbol
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
                        <input
                          type="number"
                          value={currency.purchasePrice}
                          className="border rounded px-2 py-1 w-24"
                          onChange={(e) =>
                            setCurrencies((prev) =>
                              prev.map((curr) =>
                                curr.id === currency.id
                                  ? {
                                      ...curr,
                                      purchasePrice: Number(e.target.value),
                                    }
                                  : curr
                              )
                            )
                          }
                        />
                      ) : (
                        currency.purchasePrice
                      )}
                    </td>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {isEditing === currency.id ? (
                        <button
                          onClick={() => handleSave(currency.id)}
                          className="text-primary hover:text-green-900"
                        >
                          <FaSave />
                        </button>
                      ) : (
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => handleEdit(currency.id)}
                            className="text-primary hover:text-blue-900 mx-2"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(currency.id)}
                            className="text-primary hover:text-red-900"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">عملة جديدة</h2>
              <button onClick={handleModalClose} className="text-red-600">
                <FaTimes />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="الاسم"
                className="w-full border rounded px-3 py-2"
                value={newCurrency?.name || ""}
                onChange={(e) =>
                  setNewCurrency({ ...newCurrency, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="الاختصار"
                className="w-full border rounded px-3 py-2"
                value={newCurrency?.abbreviation || ""}
                onChange={(e) =>
                  setNewCurrency({
                    ...newCurrency,
                    abbreviation: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="الرمز"
                className="w-full border rounded px-3 py-2"
                value={newCurrency?.symbol || ""}
                onChange={(e) =>
                  setNewCurrency({ ...newCurrency, symbol: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="السعر"
                className="w-full border rounded px-3 py-2"
                value={newCurrency?.price || ""}
                onChange={(e) =>
                  setNewCurrency({
                    ...newCurrency,
                    price: Number(e.target.value),
                  })
                }
              />
              <input
                type="number"
                placeholder="سعر الشراء"
                className="w-full border rounded px-3 py-2"
                value={newCurrency?.purchasePrice || ""}
                onChange={(e) =>
                  setNewCurrency({
                    ...newCurrency,
                    purchasePrice: Number(e.target.value),
                  })
                }
              />
              <button
                onClick={handleModalSave}
                className="bg-primary text-white px-3 py-1 rounded w-full"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardCurrencies;
