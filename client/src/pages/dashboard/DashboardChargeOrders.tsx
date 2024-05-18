import React, { useState } from "react";

interface ChargeOrder {
  id: string;
  customerName: string;
  value: number;
  sentValue: number;
  bank: string;
  status: string;
  options: JSX.Element;
  date: string;
}

const DashboardChargeOrders: React.FC = () => {
  const [chargeOrders, setChargeOrders] = useState<ChargeOrder[]>([
    {
      id: "1",
      customerName: "User 1",
      value: 500,
      sentValue: 1000,
      bank: "Bank A",
      status: "مدفوع",
      options: (
        <div>
          <button className="px-3 py-1 mx-1 rounded text-white bg-green-500">
            قبول
          </button>
          <button className="px-3 py-1 mx-1 rounded text-white bg-red-500">
            رفض
          </button>
        </div>
      ),
      date: "2024-05-01",
    },
    {
      id: "2",
      customerName: "User 2",
      value: 300,
      sentValue: 800,
      bank: "Bank B",
      status: "غير مدفوع",
      options: (
        <div>
          <button className="px-3 py-1 mx-1 rounded text-white bg-green-500">
            قبول
          </button>
          <button className="px-3 py-1 mx-1 rounded text-white bg-red-500">
            رفض
          </button>
        </div>
      ),
      date: "2024-05-02",
    },
  ]);

  return (
    <div className="w-full  mb-12 xl:mb-0 mx-auto" dir="rtl">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                طلبات الشحن
              </h3>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {chargeOrders.length === 0 ? (
            <div className="text-center py-4">لا يوجد عمليات</div>
          ) : (
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    id
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    اسم الزبون
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    القيمة
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    القيمة المرسلة
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    البنك
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    الحالة
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    خيارات
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    التاريخ
                  </th>
                </tr>
              </thead>
              <tbody>
                {chargeOrders.map((order, index) => (
                  <tr key={index}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      {order.id}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {order.customerName}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {order.value}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {order.sentValue}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {order.bank}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {order.status}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {order.options}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {order.date}
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

export default DashboardChargeOrders;
