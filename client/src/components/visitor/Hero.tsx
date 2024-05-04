import { motion } from "framer-motion";
import "./styles/hero.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div
      className="container mx-auto flex flex-wrap items-center justify-between p-10 min-h-[70vh]  flex-col   md:flex-row mt-[50px] "
      id="home"
    >
      <div className="w-full flex flex-col gap-4 text-right md:w-1/2 rtl:text-right ltr:text-left">
        <motion.h1
          className="md:text-3xl lg:text-4xl text-xl  xl:text-5xl font-bold mb-6 "
          initial={{ opacity: 0, y: 70 }} // Initial opacity and translation
          whileInView={{ opacity: 1, y: 0 }} // Animation based on inView
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("hero_title")}
          <span className="text-primary">{t("hero_title_span")}</span>
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg mb-8"
          initial={{ opacity: 0, y: 70 }} // Initial opacity and translation
          whileInView={{ opacity: 1, y: 0 }} // Animation based on inView
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          {t("hero_text")}
        </motion.p>
        <Link to={"/login"}>
          <motion.button
            className="heroButton text-center w-full"
            initial={{ opacity: 0, y: 70 }} // Initial opacity and translation
            whileInView={{ opacity: 1, y: 0 }} // Animation based on inView
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <span>{t("hero_signIn")}</span>
          </motion.button>
        </Link>
      </div>
      <motion.div
        className="w-full md:w-[45%] lg:w-[40%] mt-20 md:mt-0"
        initial={{ opacity: 0, x: -220 }} // Initial opacity and translation
        whileInView={{ opacity: 1, x: 0 }} // Animation based on inView
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <img
          src="/public/hero.svg"
          alt="hero image"
          className={`w-80% whileInView-up-down`}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
