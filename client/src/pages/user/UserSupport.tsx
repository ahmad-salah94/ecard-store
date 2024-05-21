import { useTranslation } from "react-i18next";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const UserSupport = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-end flex-col">
      <h1 className="text-3xl font-bold text-right">{t("support.title")}</h1>
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center">
          <img src="/public/customerService.svg" className="w-[60%]" alt="" />
          <p className="text-lg my-4 text-center">{t("support.text")}</p>
          <div className="flex">
            <button className="bg-green-500 px-4 py-2 mx-4 rounded-lg text-white flex items-center">
              <FaWhatsapp className="text-3xl" />
              <p className="mx-2 text-lg">{t("support.whatsapp")}</p>
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-lg text-white flex items-center">
              <FaTelegram className="text-3xl" />
              <p className="mx-2 text-lg">{t("support.telegram")}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSupport;
