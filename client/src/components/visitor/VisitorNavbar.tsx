import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import i18n from "../../i18n/index.ts"; // Import your i18n instance

import { useTranslation } from "react-i18next";

const VisitorNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"ar" | "en">(
    localStorage.getItem("preferredLanguage") || "en"
  );
  // Initial language set to Arabic

  useEffect(() => {
    // Use the currentLanguage instead of selectedLanguage
    i18n.changeLanguage(localStorage.getItem("preferredLanguage"));
    document.body.dir = i18n.dir();
  }, [selectedLanguage]); // Include

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLang = event.target.value as "ar" | "en";
    localStorage.setItem("preferredLanguage", selectedLang);
    setSelectedLanguage(selectedLang); // Update the currentLanguage state
    i18n.changeLanguage(selectedLang);
    document.body.dir = i18n.dir();
  };
  const { t } = useTranslation();

  return (
    <nav className=" px-5 py-2 flex justify-between items-center container mx-auto flex-row h-[70px] fixed top-0 bg-white shadow-lg z-50">
      <div className="text-xl font-bold text-primary">LOGO</div>

      {/* Desktop Navigation */}

      <div className="hidden md:flex   gap-4 relative">
        <div className="relative group ">
          <Link
            to={"/categories"}
            className="px-2 py-1 text-md lg:text-lg relative text-black hover:text-primary "
            onClick={() => setIsOpen(false)}
          >
            {t("our_products_link_name")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:h-0.5 transition-all ease-out duration-300"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:h-0.5 transition-all ease-out duration-300"></span>
          </Link>
        </div>

        {["#contact-us", "#about-us", "#our-services", "#home"].map(
          (path, index) => (
            <div key={index} className="relative group ">
              <a
                href={`/${path}`}
                className={`px-2 py-1 text-md lg:text-lg relative text-black hover:text-primary `}
                onClick={() => setIsOpen(false)}
              >
                {
                  [
                    t("contact_us_link_name"),
                    t("about_us_link_name"),
                    t("our_services_link_name"),
                    t("home_link_name"),
                  ][index]
                }
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:h-0.5 transition-all ease-out duration-300"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:h-0.5 transition-all ease-out duration-300"></span>
              </a>
            </div>
          )
        )}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-[0px] md:w-[400px] pt-[100px] w-[340px] md:hidden ${
          isOpen
            ? "translate-x-[0px]"
            : "md:translate-x-[400px] translate-x-[340px] "
        }  transition-all duration-300 right-0 h-screen  bg-white p-4 flex flex-col items-center space-y-4 z-50`}
      >
        {["#contact-us", "#about-us", "#our-services", "#home"].map(
          (path, index) => (
            <div className="relative group " key={index}>
              <a
                key={index}
                href={`/${path}`}
                className={`px-2 py-1 relative ${"text-primary"}`}
                onClick={() => setIsOpen(false)}
              >
                {
                  [
                    t("contact_us_link_name"),
                    t("about_us_link_name"),
                    t("our_services_link_name"),
                    t("home_link_name"),
                  ][index]
                }
                <span className="absolute bottom-0 h-[1px] right-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-1/2"></span>
                <span className="absolute bottom-0 h-[1px] left-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-1/2"></span>
              </a>
            </div>
          )
        )}

        <div className="relative group ">
          <Link
            to={"/categories"}
            className="px-2 py-1 text-md lg:text-lg relative text-black hover:text-primary "
            onClick={() => setIsOpen(false)}
          >
            {t("our_products_link_name")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:h-0.5 transition-all ease-out duration-300"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:h-0.5 transition-all ease-out duration-300"></span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 translate-y-10">
          <Link to={"/login"}>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
              {t("sign_in_button")}
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors ">
              {t("sign_up_button")}
            </button>
          </Link>
        </div>
        <div className=" block translate-y-12">
          <select
            id="language"
            className="block w-full p-2 border-primary rounded-md focus:outline-none bg-primary text-white focus:border-primary  "
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      <div className="hidden sm:flex gap-4">
        <Link to={"/login"}>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors hidden md:block">
            {t("sign_in_button")}
          </button>
        </Link>
        <Link to={"/signup"}>
          <button className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors hidden lg:block">
            {t("sign_up_button")}
          </button>
        </Link>
        <div className="hidden md:block">
          <select
            id="language"
            className="block w-full p-2 border-primary rounded-md focus:outline-none bg-primary text-white focus:border-primary  "
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* Burger Icon */}
      <button
        className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`hamburger-top absolute bg-gray-900 block h-0.5 w-full transition-transform duration-300 ease-in-out ${
            isOpen ? "transform -rotate-45 translate-y-[-50%]" : "top-1"
          }`}
        ></span>
        <span
          className={`hamburger-middle absolute bg-gray-900 block h-0.5 w-full transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "top-1/2 translate-y-[-50%]"
          }`}
        ></span>
        <span
          className={`hamburger-bottom absolute bg-gray-900 block h-0.5 w-full transition-transform duration-300 ease-in-out ${
            isOpen ? "transform rotate-45 translate-y-[-50%]" : "bottom-1"
          }`}
        ></span>
      </button>
    </nav>
  );
};

export default VisitorNavbar;
