import React from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const UserSupport = () => {
  return (
    <div className="w-full flex justify-end flex-col">
      <h1 className="text-3xl font-bold text-right">الدعم الفني</h1>
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center">
          <img src="/public/customerService.svg" className="w-[60%]" alt="" />
          <p className="text-lg my-4">
            إدا كان لديك أي تساؤلات او إستفسارات او تريد تقديم إقتراحات للموقع
            يمكنك مراسلة فريق الدعم
          </p>
          <div className="flex">
            <button className="bg-green-500 px-4 py-2 mx-4 rounded-lg text-white flex items-center">
              <FaWhatsapp className="text-3xl" />
              <p className="mx-2 text-lg">عن طريق الواتساب</p>
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-lg text-white flex items-center">
              <FaTelegram className="text-3xl" />
              <p className="mx-2 text-lg">عن طريق التليجرام</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSupport;
