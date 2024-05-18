import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

interface CategoryProps {
  image: string;
  title: string;
}

const Category: React.FC<CategoryProps> = ({ image, title }) => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isAnySheetVisible, setIsAnySheetVisible] = useState(false); // State to track if any sheet is visible
  const controls = useAnimation();
  const bottomSheetRef = useRef<HTMLDivElement>(null);

  const toggleBottomSheet = () => {
    if (!isAnySheetVisible) {
      setIsBottomSheetVisible(!isBottomSheetVisible);
      controls.start({ y: isBottomSheetVisible ? 0 : 100 });
      setIsAnySheetVisible(!isAnySheetVisible);
    }
  };

  useEffect(() => {
    console.log(isBottomSheetVisible);

    // Event listener for clicks outside the motion div
    const handleClickOutside = (event: MouseEvent) => {
      console.log("Clicked outside");
      console.log(event.target);
      if (
        bottomSheetRef.current &&
        !bottomSheetRef.current.contains(event.target as Node)
      ) {
        setIsBottomSheetVisible(false);
        controls.start({ y: 100 });
        setIsAnySheetVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBottomSheetVisible, controls]);

  return (
    <>
      <div className="bg-white p-2 rounded-xl" onClick={toggleBottomSheet}>
        <img
          src={image}
          alt={title}
          className="w-full object-cover rounded-xl"
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
              className="bg-red-200 h-[90vh] fixed bottom-0 left-0 right-0 p-4 w-full z-50"
              initial={{ y: 700 }}
              animate={{ y: 100 }}
              exit={{ y: 700, transition: { ease: "linear", duration: 0.3 } }}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const VisitorCategories: React.FC = () => {
  const cards = Array.from({ length: 24 }, (_, index) => ({
    image: `/public/categoryImage.png`,
    title: `Card ${index + 1}`,
  }));
  const { t } = useTranslation();

  return (
    <div>
      <motion.h1
        className="text-5xl mb-12 font-bold text-center text-primary"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        {t("our_services_title")}
      </motion.h1>
      <div className="flex flex-wrap -m-2 container mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-2 flex-auto max-w-full w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 2xl:w-1/8"
          >
            <Category image={card.image} title={card.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorCategories;
