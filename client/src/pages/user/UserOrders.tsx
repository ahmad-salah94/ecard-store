import { useTranslation } from "react-i18next";

const UserOrders = () => {
  const { t } = useTranslation();
  return (
    <section className=" bg-blueGray-50 w-full ">
      <div className="w-full `px-4 mx-auto text-lg ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-2xl rtl:text-right text-blueGray-700">
                  {t("user_orders.title")}
                </h3>
              </div>
            </div>
          </div>
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap ltr: items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  <select name="" id="">
                    <option value="">
                      {t("user_orders.filter_all_orders")}
                    </option>
                    <option value="">
                      {t("user_orders.filter_waiting_orders")}
                    </option>
                    <option value="">
                      {t("user_orders.filter_succeded_orders")}
                    </option>
                    <option value="">
                      {t("user_orders.filter_failed_orders")}
                    </option>
                  </select>
                </h3>
              </div>
              <div className="p-4">
                <label htmlFor="table-search" className="sr-only">
                  {t("user_orders.search")}
                </label>
                <div className="relative mt-1 ">
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={t("user_orders.search_placeholder")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg  border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_orders.order_number")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg  border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_orders.product")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg  border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_orders.player_subscriber")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg  border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_orders.price")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg  border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_orders.status")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg  border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_orders.buying_history")}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-lg whitespace-nowrap p-4  text-blueGray-700 ">
                    1234
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    شدات بابجي
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    رامي
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    100
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    ناجح
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    2024/12/5
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

export default UserOrders;
