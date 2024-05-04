import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const OurDistrubitors = () => {
  return (
    <div className="w-full flex justify-end flex-col">
      <h1 className="text-3xl font-bold text-right">وكلاؤنا</h1>
      <div className="w-full flex justify-center">
        <div className="px-12 py-8 w-[278px] h-[275px] bg-white flex flex-col items-center rounded-lg">
          <img
            src="/public/supportImage.jpg"
            className="w-[100px] h-[100px] rounded-full  "
            alt=""
          />
          <h3 className="text-xl my-4">الادارة العامة</h3>
          <button className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center">
            <FaWhatsapp className="text-3xl" />
            <p className="mx-2 text-lg">تواصل معه</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurDistrubitors;
