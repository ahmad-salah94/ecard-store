import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutUsSection: React.FC<{
  image: string;
  direction: "left" | "right";
  title: string;
  text: string;
  buttonText: string;
  buttonType: "outline" | "fill";
}> = ({ image, direction, title, text, buttonText, buttonType }) => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-8 mb-16 md:mb-0 ">
      {direction === "left" && (
        <motion.div className="w-full md:w-40%">
          <img src={image} alt="Image" className="w-full h-auto" />
        </motion.div>
      )}
      <div className="flex flex-col items-center md:items-start md:text-left w-full md:w-60% mt-4 md:mt-0 justify-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 text-center block w-full"
          initial={{ opacity: 0, y: 70 }} // Initial opacity and translation
          whileInView={{ opacity: 1, y: 0 }} // Animation based on inView
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-gray-700 mb-4 text-center w-full"
          initial={{ opacity: 0, y: 70 }} // Initial opacity and translation
          whileInView={{ opacity: 1, y: 0 }} // Animation based on inView
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {text}
        </motion.p>
        <motion.button
          className={`py-2 px-4 rounded w-[90%] mx-auto my-12 md:mb-0  ${
            buttonType === "fill"
              ? "bg-primary text-white hover:text-white hover:bg-black duration-150"
              : "border border-primary text-primary hover:bg-primary hover:text-white duration-150"
          }`}
          initial={{ opacity: 0 }} // Initial opacity and translation
          whileInView={{ opacity: 1 }} // Animation based on inView
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          {buttonText}
        </motion.button>
      </div>
      {direction === "right" && (
        <div className="w-full md:w-40%">
          <img src={image} alt="Image" className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

// this have all the sections
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div id="about-us">
      <motion.h1
        className="text-5xl font-bold text-center my-12"
        initial={{ opacity: 0, y: 70 }} // Initial opacity and translation
        whileInView={{ opacity: 1, y: 0 }} // Animation based on inView
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        {t("about_us")}
      </motion.h1>
      <AboutUsSection
        title={`${t("about_us_title_one")}`}
        text={`${t("about_us_title_one")}`}
        direction="right"
        buttonText="sign in"
        buttonType="fill"
        image="/public/aboutus-1.svg"
      />
      <AboutUsSection
        title={`${t("about_us_title_two")}`}
        text={`${t("about_us_title_two")}`}
        direction="left"
        buttonText="sign in"
        buttonType="outline"
        image="/public/aboutus-2.svg"
      />
    </div>
  );
};

export default AboutUs;
