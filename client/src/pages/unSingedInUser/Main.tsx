import AboutUs from "../../components/visitor/AboutUs";
import ContactUs from "../../components/visitor/ContactUs";
import HeroSection from "../../components/visitor/Hero";
import VisitorServices from "../../components/visitor/VisitorServices";

const Main = () => {
  return (
    <div>
      <HeroSection />
      <VisitorServices />
      <AboutUs />
      <img
        src="/public/banner.png"
        className="w-full lg:translate-y-[200px]  md:-translate-y-[100px]"
        alt="banner"
      />
      <ContactUs />
    </div>
  );
};

export default Main;
