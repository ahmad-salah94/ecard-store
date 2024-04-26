import React from "react";
import { IconType } from "react-icons";
import {
  LightningBoltIcon,
  GlobeAltIcon,
  ChartPieIcon,
  CogIcon,
} from "@heroicons/react/solid";

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
  return (
    <div className="container mx-auto text-center p-8" id="our-services">
      <h1 className="text-5xl mb-16 font-bold ">
        {" "}
        <span className="text-primary">خدماتنا</span> سر تميزنا
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Service
          icon={LightningBoltIcon}
          title="خدمة مميزة"
          description="العميل دائما علي حق."
        />
        <Service
          icon={GlobeAltIcon}
          title="اسعار مميزة"
          description="نقدم اسعار تنافس الاسعار العالمية"
        />
        <Service
          icon={ChartPieIcon}
          title="سهولة الاستخدام"
          description="نقدم تصميم سهل وبسيط لأحتياجات االمستخدم"
        />
        <Service
          icon={CogIcon}
          title="دعم فني"
          description="نقدم دعم فني علي مدار 24 ساعة."
        />
      </div>
    </div>
  );
};

export default VisitorServices;
