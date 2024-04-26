import { useState } from "react";
import { Link } from "react-router-dom";

const VisitorNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" px-5 py-2 flex justify-between items-center container mx-auto flex-row-reverse h-[70px]">
      <div className="text-xl font-bold text-primary">LOGO</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex  gap-4 relative">
        {["contact-us", "about-us", "our-services", "home"].map(
          (path, index) => (
            <div key={index} className="relative group ">
              <a
                href={`/#${path}`}
                className={`px-2 py-1 relative ${"text-primary"}`}
              >
                {["تواصل معنا", "عنا", "خدماتنا", "الرئيسية"][index]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:h-0.5 transition-all ease-out duration-300"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:h-0.5 transition-all ease-out duration-300"></span>
              </a>
            </div>
          )
        )}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-[0px] md:w-[400px] pt-[100px] w-[340px] ${
          isOpen
            ? "translate-x-[0px]"
            : "md:translate-x-[400px] translate-x-[340px] "
        }  transition-all duration-300 right-0 h-screen  bg-white p-4 flex flex-col items-center space-y-4 z-50`}
      >
        {["home", "our-services ", "about-us", "contact-us"].map(
          (path, index) => (
            <a
              key={index}
              href={`/#${path}`}
              className={`px-2 py-1 relative ${"text-primary"}`}
            >
              {["الرئيسية", "خدماتنا ", "عنا", "تواصل معنا"][index]}
              <span className="absolute bottom-0 h-[1px] right-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-1/2"></span>
              <span className="absolute bottom-0 h-[1px] left-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-1/2"></span>
            </a>
          )
        )}
        <div className="flex flex-col gap-4 translate-y-10">
          <Link to={"/login"}>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
              تسجيل الدخول
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors ">
              انشاء الحساب
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden sm:flex gap-4">
        <Link to={"/login"}>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors hidden md:block">
            تسجيل الدخول
          </button>
        </Link>
        <Link to={"/signup"}>
          <button className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors hidden lg:block">
            انشاء الحساب
          </button>
        </Link>
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
