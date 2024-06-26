import React from "react";
import { PhoneIcon, InboxIcon, MapIcon } from "@heroicons/react/solid";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// First sub-component for buttons

interface ButtonWithTextProps {
  icon: IconType; // Assuming IconType is imported from 'react-icons'
  title: string;
  text: string;
}

const ButtonWithText: React.FC<ButtonWithTextProps> = ({
  icon: Icon,
  title,
  text,
}) => (
  <div className="mb-4 flex items-center">
    <div className="mr-4 text-primary">
      <Icon className="h-12 w-12 text-primary" />
    </div>
    <div>
      <h4 className="text-black">{title}</h4>
      <p className="text-gray-500">{text}</p>
    </div>
  </div>
);

// Main component
const ContactUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="container mx-auto  lg:w-[80vw]  lg:-translate-y-[50px] md:w-[90%] md:-translate-y-[50px] "
      id="contact-us"
    >
      <motion.div
        className="flex flex-col md:flex-row justify-between w-full  "
        initial={{ opacity: 0, y: 70 }} // Initial opacity and translation
        whileInView={{ opacity: 1, y: 0 }} // Animation based on inView
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        {/* First div with buttons */}
        <div className="md:w-1/2  mb-8 md:mb-0 bg-gray-200 p-8 flex flex-col justify-center gap-8 ">
          <ButtonWithText
            icon={PhoneIcon}
            title={`${t("contact_us_phone_text")}`}
            text="0101484871"
          />
          <ButtonWithText
            icon={MapIcon}
            title={`${t("contact_us_location_text")}`}
            text="Your Location"
          />
          <ButtonWithText
            icon={InboxIcon}
            title={`${t("contact_us_email_text")}`}
            text="example@example.com"
          />
        </div>
        {/* Second div with contact form */}
        <div className="md:w-1/2  bg-red-400 p-8">
          <h1 className="text-2xl font-bold mb-4 text-white text-center">
            Contact Us
          </h1>
          <input
            type="email"
            className="block w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none text-right "
            placeholder="الايمل"
          />
          <input
            type="text"
            className="block w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none text-right "
            placeholder="الموضوع"
          />
          <textarea
            className="block w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none text-right"
            rows={5}
            placeholder="الرسالة"
          ></textarea>
          <button className="bg-primary w-full text-white px-4 py-2 rounded hover:bg-white hover:text-primary duration-200">
            ارسال الرسالة
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
