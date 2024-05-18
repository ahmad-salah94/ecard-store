import { useTranslation } from "react-i18next";

const TransactionLog = () => {
  const { t } = useTranslation();

  return (
    <section className=" bg-blueGray-50 w-full ">
      <div className="w-full `px-4 mx-auto text-lg ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center flex-row-reverse  justify-between  ">
              <div className="relative  px-4 ">
                <h3 className="font-semibold  w-fit text-3xl rtl:text-right text-blueGray-700">
                  {t("transaction_log.title")}
                </h3>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg  border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("transaction_log.transaction_number")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg  border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("transaction_log.value")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg  border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("transaction_log.type")}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-lg whitespace-nowrap p-4  text-blueGray-700 ">
                    01234
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    100
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    1000 شدات بابجي
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

export default TransactionLog;
