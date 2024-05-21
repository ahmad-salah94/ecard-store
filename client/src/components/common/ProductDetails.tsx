import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCartPlus } from "react-icons/fa";

const ProductDetails = () => {
  const [value, setValue] = useState<number>(0);

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure value is parsed as a number
    setValue(parseInt(e.target.value, 10));
  };
  return (
    <div className="flex  justify-center items-center flex-col h-[80%]">
      <div className="w-full flex justify-center flex-wrap md:gap-4 gap-2">
        <motion.div
          className="bg-white relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]  rounded-lg"
          whileHover={{ scale: 1.1 }} // Scale up the card when hovering
        >
          <p className="absolute top-0 left-0 w-full text-center bg-primary text-white">
            دفع نظافة تجاري
          </p>
          <div className="bg-black text-white w-full text-center opacity-50 absolute bottom-0 left-0">
            <p>2.08$</p>
            <p>69.26&</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]  rounded-lg"
          whileHover={{ scale: 1.1 }} // Scale up the card when hovering
        >
          <p className="absolute top-0 left-0 w-full text-center bg-primary text-white">
            دفع نظافة تجاري
          </p>
          <div className="bg-black text-white w-full text-center opacity-50 absolute bottom-0 left-0">
            <p>2.08$</p>
            <p>69.26&</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]  rounded-lg"
          whileHover={{ scale: 1.1 }} // Scale up the card when hovering
        >
          <p className="absolute top-0 left-0 w-full text-center bg-primary text-white">
            دفع نظافة تجاري
          </p>
          <div className="bg-black text-white w-full text-center opacity-50 absolute bottom-0 left-0">
            <p>2.08$</p>
            <p>69.26&</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]  rounded-lg"
          whileHover={{ scale: 1.1 }} // Scale up the card when hovering
        >
          <p className="absolute top-0 left-0 w-full text-center bg-primary text-white">
            دفع نظافة تجاري
          </p>
          <div className="bg-black text-white w-full text-center opacity-50 absolute bottom-0 left-0">
            <p>2.08$</p>
            <p>69.26&</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]  rounded-lg"
          whileHover={{ scale: 1.1 }} // Scale up the card when hovering
        >
          <p className="absolute top-0 left-0 w-full text-center bg-primary text-white">
            دفع نظافة تجاري
          </p>
          <div className="bg-black text-white w-full text-center opacity-50 absolute bottom-0 left-0">
            <p>2.08$</p>
            <p>69.26&</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white relative md:w-[150px] md:h-[150px] w-[120px] h-[120px]  rounded-lg"
          whileHover={{ scale: 1.1 }} // Scale up the card when hovering
        >
          <p className="absolute top-0 left-0 w-full text-center bg-primary text-white">
            دفع نظافة تجاري
          </p>
          <div className="bg-black text-white w-full text-center opacity-50 absolute bottom-0 left-0">
            <p>2.08$</p>
            <p>69.26&</p>
          </div>
        </motion.div>
      </div>
      <div
        className="bg-red-100 border-t border-b border-red-500 text-red-700  py-3 w-fit  px-6 rounded-lg mx-auto my-8"
        role="alert"
      >
        <p className="font-bold ">
          في حال العداد عليه دفع نظافة سيتم رفض الطلب والانتقال لدفع النظافة ثم
          شحن العداد
        </p>
      </div>

      <div className="flex w-full justify-center gap-4">
        <div className="custom-number-input h-10 w-40">
          <p className="w-full text-red-400 text-sm font-semibold text-center">
            المجموع
          </p>
          <p className="w-full text-center bg-primary text-white py-2   rounded-lg font-semibold text-md md:text-base cursor-default  items-center flex justify-center">
            {value * 2}
          </p>
        </div>

        <div className="custom-number-input h-10 w-40">
          {" "}
          {/* Adjusted width to w-40 */}
          <label
            htmlFor="custom-input-number"
            className="w-full text-red-400 text-sm font-semibold"
          >
            أقل كمية 1 - أقصى كمية 100
          </label>
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button
              onClick={decrement}
              className="bg-primary text-white  h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="outline-none focus:outline-none text-center w-full bg-primary text-white font-semibold text-md md:text-base cursor-default flex items-center "
              name="custom-input-number"
              value={value}
              onChange={handleChange}
            />
            <button
              onClick={increment}
              className="bg-primary text-white    h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>

      <button className="bg-primary text-white text-center rounded-lg flex items-center justify-center px-4 py-2 mx-auto mt-[60px]  md:mt-[100px] w-[50%] hover:bg-white border border-primary hover:text-primary duration-200">
        <span className="mr-2">انشاء طلب</span>
        <FaCartPlus />
      </button>
    </div>
  );
};

export default ProductDetails;
