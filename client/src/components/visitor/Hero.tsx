import "./styles/hero.css";
const HeroSection = () => {
  return (
    <div
      className="container mx-auto flex flex-wrap items-center justify-between p-10 min-h-[70vh]  flex-col md:flex-row-reverse mt-[50px] "
      id="home"
    >
      <div className="w-full flex flex-col gap-4 text-right md:w-1/2">
        <h1 className="text-4xl font-bold mb-6">
          شركتنا هي الافضل في الشرق الاوسط لبيع
          <span className="text-primary"> البطاقات والعملات الالكترونية</span>
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          اشحن تطبيقك او شركتك من منزلك في خطوة واحدة, اينما كنت.
        </p>
        <button className="heroButton">
          <span>قم بتسجيل الدخول</span>
        </button>
      </div>
      <div className="w-full md:w-[45%] lg:w-[40%] mt-20 md:mt-0">
        <img
          src="/public/hero.svg"
          alt="hero image"
          className={`w-80% animate-up-down`}
        />
      </div>
    </div>
  );
};

export default HeroSection;
