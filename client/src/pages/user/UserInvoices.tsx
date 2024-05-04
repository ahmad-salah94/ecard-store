import React from "react";

const UserInvoices = () => {
  return (
    <section className=" bg-blueGray-50 w-full ">
      <div className="w-full `px-4 mx-auto text-lg ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center flex-row-reverse  justify-between  ">
              <div className="relative  px-4 ">
                <h3 className="font-semibold  w-fit text-3xl rtl:text-right text-blueGray-700">
                  اضافة دفعات
                </h3>
              </div>
              <div className="flex text-lg">
                <button className="bg-primary cursor-pointer text-white py-2 px-4 rounded-xl mx-4">
                  شحن الرصيد
                </button>
                <button className="bg-white cursor-pointer  border-primary border text-priamry py-2 px-4 rounded-xl ">
                  الشحن بقسيمة
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap ltr: items-center">
              <div className="p-4">
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <td className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    اثبات الدفع
                  </td>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    رقم العملية
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    وسيلة الدفع
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    المبلغ
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    الحالة
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    تاريخ
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-lg whitespace-nowrap p-4  text-blueGray-700 ">
                    باي بال
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    01234
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    باي بال
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    100
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    نجاح
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    2024/4/5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInvoices;
