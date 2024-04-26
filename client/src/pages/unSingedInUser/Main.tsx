import ScrollToTopButton from "@/components/visitor/ScrollToTop";
import AboutUs from "../../components/visitor/AboutUs";
import ContactUs from "../../components/visitor/ContactUs";
import HeroSection from "../../components/visitor/Hero";
import VisitorCategories from "../../components/visitor/VisitorCategories";
import VisitorServices from "../../components/visitor/VisitorServices";

const Main = () => {
  return (
    <div className="bg-background">
      <HeroSection />
      <VisitorCategories />
      <VisitorServices />
      <AboutUs />
      <img
        src="/public/banner.png"
        className="w-full lg:translate-y-[200px]  md:-translate-y-[100px]"
        alt="banner"
      />
      <ContactUs />
      <ScrollToTopButton />
    </div>
  );
};

export default Main;
