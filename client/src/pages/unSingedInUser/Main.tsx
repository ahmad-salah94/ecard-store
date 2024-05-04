import ScrollToTopButton from "@/components/visitor/ScrollToTop";
import AboutUs from "../../components/visitor/AboutUs";
import ContactUs from "../../components/visitor/ContactUs";
import HeroSection from "../../components/visitor/Hero";
import VisitorServices from "../../components/visitor/VisitorServices";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-background " dir={i18n.dir(t("dir"))}>
      <HeroSection />

      <VisitorServices />
      <AboutUs />
      <img
        src="/public/banner.png"
        className="w-full lg:translate-y-[200px]  md:-translate-y-[100px] "
        alt="banner"
      />
      <ContactUs />
      <ScrollToTopButton />
    </div>
  );
};

export default Main;
