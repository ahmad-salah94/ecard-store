import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

import {
  LightningBoltIcon,
  GlobeAltIcon,
  ChartPieIcon,
  CogIcon,
} from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";

// Internal Service component
interface ServiceProps {
  icon: IconType;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-4xl mb-4">
        <Icon className="h-12 w-12 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const VisitorServices: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto text-center p-8" id="our-services">
      <motion.h1
        className="text-5xl mt-12 mb-16 font-bold "
        initial={{ opacity: 0, y: 70 }} // Initial opacity and translation
        whileInView={{ opacity: 1, y: 0 }} // Animation based on inView
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        {" "}
        <span className="text-primary">
          {t("our_services_title_span")}
        </span>{" "}
        {t("our_services_title")}
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0, x: -250 }} // Initial opacity and translation
        whileInView={{ opacity: 1, x: 0 }} // Animation based on inView
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <Service
          icon={LightningBoltIcon}
          title={`${t("our_services_one_title")}`}
          description={`${t("our_services_one_text")}`}
        />

        <Service
          icon={GlobeAltIcon}
          title={`${t("our_services_two_title")}`}
          description={`${t("our_services_two_text")}`}
        />
        <Service
          icon={ChartPieIcon}
          title={`${t("our_services_three_title")}`}
          description={`${t("our_services_three_text")}`}
        />
        <Service
          icon={CogIcon}
          title={`${t("our_services_four_title")}`}
          description={`${t("our_services_four_text")}`}
        />
      </motion.div>
    </div>
  );
};

export default VisitorServices;
