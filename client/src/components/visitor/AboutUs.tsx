import React from "react";

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
        <div className="w-full md:w-40%">
          <img src={image} alt="Image" className="w-full h-auto" />
        </div>
      )}
      <div className="flex flex-col items-center md:items-start md:text-left w-full md:w-60% mt-4 md:mt-0 justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center block w-full">
          {title}
        </h1>
        <p className="text-gray-700 mb-4 text-center w-full">{text}</p>
        <button
          className={`py-2 px-4 rounded w-[90%] mx-auto my-12 md:mb-0  ${
            buttonType === "fill"
              ? "bg-primary text-white hover:text-white hover:bg-black duration-150"
              : "border border-primary text-primary hover:bg-primary hover:text-white duration-150"
          }`}
        >
          {buttonText}
        </button>
      </div>
      {direction === "right" && (
        <div className="w-full md:w-40%">
          <img src={image} alt="Image" className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

const AboutUs = () => {
  return (
    <div id="about-us">
      <h1 className="text-5xl font-bold text-center my-12">اعرف المزيد عنا</h1>
      <AboutUsSection
        title="عنا رقم 1"
        text="عناشمنيبستمكشسيت بكمسيتنب مكسنشيتبعناشمنيبستمكشسيت بكمسيتنب مكسنشيتبعناشمنيبستمكشسيت بكمسيتنب مكسنشيتب "
        direction="right"
        buttonText="sign in"
        buttonType="fill"
        image="/public/aboutus-1.svg"
      />
      <AboutUsSection
        title="عنا رقم2"
        text="عناشمنيبستمكشسيت بكمسيتنب مكسنشيتب عناشمنيبستمكشسيت بكمسيتنب مكسنشيتبعناشمنيبستمكشسيت بكمسيتنب مكسنشيتب"
        direction="left"
        buttonText="sign in"
        buttonType="outline"
        image="/public/aboutus-2.svg"
      />
    </div>
  );
};

export default AboutUs;
