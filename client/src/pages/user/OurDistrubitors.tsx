import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

const OurDistrubitors = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-end flex-col">
      <h1 className="text-3xl font-bold text-right">
        {t("user_our_distriputer.our_agents")}{" "}
      </h1>
      <div className="w-full flex justify-center">
        <div className="px-12 py-8 w-[278px] h-[275px] bg-white flex flex-col items-center rounded-lg">
          <img
            src="/public/supportImage.jpg"
            className="w-[100px] h-[100px] rounded-full  "
            alt=""
          />
          <h3 className="text-xl my-4">
            {t("user_our_distriputer.general_management")}
          </h3>
          <button className="bg-green-500 px-4 py-2 rounded-lg text-white flex items-center">
            <FaWhatsapp className="text-3xl" />
            <p className="mx-2 text-lg">
              {t("user_our_distriputer.chat_with_him")}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurDistrubitors;
