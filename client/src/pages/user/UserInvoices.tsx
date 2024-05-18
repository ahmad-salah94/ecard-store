import React, { useState } from "react";
import UserPayment from "../../components/user/UserPayment";
import { useTranslation } from "react-i18next";

const UserInvoices = () => {
  const [isCouponCardOpened, setIsCouponCardOpened] = useState<boolean>(false);
  const [isChargeOpened, setIsChargeOpened] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("bank");

  const { t } = useTranslation("");

  // Function to handle changes in the selected option
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <section className=" bg-blueGray-50 w-full ">
      <div className="w-full `px-4 mx-auto text-lg ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center flex-row-reverse  justify-between  ">
              <div className="relative  px-4 ">
                <h3 className="font-semibold  w-fit text-3xl rtl:text-right text-blueGray-700">
                  {t("user_invoices.title")}
                </h3>
              </div>
              <div className="flex text-lg">
                <button
                  className="bg-primary cursor-pointer text-white py-2 px-4 rounded-xl mx-4"
                  onClick={() => setIsChargeOpened(true)}
                >
                  {t("user_invoices.charge_money")}
                </button>
                <button
                  className="bg-white cursor-pointer  border-primary border text-priamry py-2 px-4 rounded-xl "
                  onClick={() =>
                    setIsCouponCardOpened((prevValue) => !prevValue)
                  }
                >
                  {t("user_invoices.charge_with_coupon")}
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap ltr: items-center">
              <div className="p-4">
                <label htmlFor="table-search" className="sr-only">
                  {t("user_invoices.search")}
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
                    placeholder={t("user_invoices.search_placeholder")}
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
                    {t("user_invoices.payment_ensure")}
                  </td>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_invoices.invoice_number")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_invoices.payment_method")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_invoices.ammount")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_invoices.status")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 text-center align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                    {t("user_invoices.history")}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-lg whitespace-nowrap p-4  text-blueGray-700 ">
                    {t("user_invoices.paypal")}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    01234
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    {t("user_invoices.paypal")}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    100
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap text-center p-4 ">
                    {t("user_invoices.success")}
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
      {isCouponCardOpened && (
        <div
          className="min-w-screen h-screen animated fadeIn faster  fixed  opacity-[1000] left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
          id="modal-id"
        >
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <div className="">
              <div className="text-center p-5 flex-auto justify-center">
                <h2 className="text-xl font-bold py-4 ">{t("coupon_title")}</h2>
                <hr />
                <input
                  type="text"
                  id="coupon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="xxxx.xxxxx.xxxxx.xxxxx"
                />
              </div>
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                <button
                  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                  onClick={() => setIsCouponCardOpened(false)}
                >
                  {t("user_invoices.coupon_cancel")}
                </button>
                <button className="mb-2 md:mb-0 bg-primary border border-primary px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-indigo-700 duration-200">
                  {t("user_invoices.coupon_check")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isChargeOpened && (
        <div
          className="fixed inset-0 w-[100vw] z-[500] bg-black opacity-50"
          onClick={() => setIsChargeOpened(false)}
        ></div>
      )}
      <div
        className={`fixed top-[0px] md:w-[400px] w-[300px] z-[501]  p-8 ${
          isChargeOpened
            ? "-translate-x-[0px] opacity-100"
            : " opacity-0 rtl:-translate-x-[300px]  md:translate-x-[400px] translate-x-[300px] "
        }  transition-all duration-300 left-0 h-screen  bg-white p-4 flex flex-col items-center space-y-4 z-50`}
      >
        {/* Select dropdown for different options */}
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="bank">{t("user_invoices.bank")}</option>
          <option value="lord-box">{t("user_invoices.lord_box")}</option>
          <option value="syria-phone">{t("user_invoices.syria_phone")}</option>
          <option value="straight-send">
            {t("user_invoices.straight_send")}
          </option>
          <option value="seretel-MTN">
            {t("user_invoices.seretel_MTN_cash")}
          </option>
          <option value="pay-pal">{t("user_invoices.paypal")}</option>
          <option value="USDT">{t("user_invoices.USDT")}</option>
          <option value="payeer">{t("user_invoices.payeer")}</option>
        </select>

        <div
          className={`${
            isChargeOpened ? "block z-[100000]" : "hidden -z-[1000]"
          }`}
        >
          {selectedOption === "bank" && (
            <UserPayment requirementText={"text"} paymentText="cavani" />
          )}
          {selectedOption === "lord-box" && (
            <UserPayment requirementText={"sayed"} paymentText="khaled" />
          )}
          {selectedOption === "syria-phone" && (
            <UserPayment requirementText={"text"} paymentText="cavani" />
          )}
          {selectedOption === "straight-send" && (
            <UserPayment requirementText={"text"} paymentText="cavani" />
          )}
          {selectedOption === "seretel-MTN" && (
            <UserPayment requirementText={"text"} paymentText="cavani" />
          )}
          {selectedOption === "PayPal" && (
            <UserPayment requirementText={"text"} paymentText="cavani" />
          )}
          {selectedOption === "USDT" && (
            <UserPayment requirementText={"text"} paymentText="cavani" />
          )}
          {selectedOption === "payeer" && (
            <UserPayment requirementText={"text"} paymentText="cavani" />
          )}
        </div>
      </div>
    </section>
  );
};

export default UserInvoices;
