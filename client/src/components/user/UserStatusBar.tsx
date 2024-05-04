import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";;
import "./styles/userStatusBar.css";
import { Navigation } from "swiper/modules";

const StatusCard = () => {
  return (
    <div className="bg-foreground text-white shadow-lg flex justify-between w-[300px] p-4 rounded-xl flex-row-reverse">
      <div>
        <h1>
          <span>100</span>
          <span>$</span>
        </h1>
        <h2 className="text-sm">طلبات الانتظار</h2>
      </div>
      <div className="flex justify-center items-center text-2xl text-pointer">
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};
const UserStatusBar = () => {
  return (
    <div className=" relative h-[100px]">
      <FaChevronLeft className="absolute -top-6 left-4 cursor-pointer swiper-button-prev" />
      <FaChevronRight className="absolute -top-6 left-16 cursor-pointer swiper-button-next" />
      <Swiper
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          // // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
        }}
        spaceBetween={10} // Space between slides
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <StatusCard />
        </SwiperSlide>
        <SwiperSlide>
          <StatusCard />
        </SwiperSlide>
        <SwiperSlide>
          <StatusCard />
        </SwiperSlide>
        <SwiperSlide>
          <StatusCard />
        </SwiperSlide>
        <SwiperSlide>
          <StatusCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default UserStatusBar;
