import UserStatusBar from "@/components/user/UserStatusBar";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ProductDetails from "@/components/common/ProductDetails";

interface CategoryProps {
  image: string;
  title: string;
}
const Category: React.FC<CategoryProps> = ({ image, title }) => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const bottomSheetRef = useRef<HTMLDivElement>(null);

  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  };

  useEffect(() => {
    // Event listener for clicks outside the motion div
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bottomSheetRef.current &&
        !bottomSheetRef.current.contains(event.target as Node)
      ) {
        setIsBottomSheetVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-white p-2 rounded-xl relative">
      <div onClick={toggleBottomSheet}>
        <img
          src={image}
          alt={title}
          className="w-full  object-cover rounded-xl"
        />
        <h3 className="mt-2 text-center">{title}</h3>
      </div>

      <AnimatePresence>
        {isBottomSheetVisible && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-50"
              onClick={() => setIsBottomSheetVisible(false)} // Close bottom sheet when overlay is clicked
            ></div>
            <motion.div
              className="bg-foreground h-[100vh] fixed bottom-0 left-0 right-0 p-4 w-full z-50"
              initial={{ y: 800 }}
              animate={{ y: 100 }}
              exit={{ y: 700, transition: { ease: "linear", duration: 0.3 } }}
            >
              <ProductDetails />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const UserMain = () => {
  return (
    <div className="mt-[25px] bg-secondary rounded-xl pb-[100px] relative">
      <UserStatusBar />
      <img src="/public/user-banner.png" alt="" className="rounded-xl" />
      <div className=" left-0 w-full py-2">
        <input
          type="text"
          className="mt-2 p-2 w-[50%]  focus:outline-0 border-primary border bg-white rounded-md"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-wrap w-full mx-auto mt-[25px] relative">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="p-2 flex-auto bg-foreg max-w-full h-auto w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/7"
          >
            <Category
              image={`/public/categoryImage.png`}
              title={`Card ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMain;
