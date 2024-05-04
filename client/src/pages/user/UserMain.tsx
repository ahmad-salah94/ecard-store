import UserStatusBar from "@/components/user/UserStatusBar";
import React from "react";
interface CategoryProps {
  image: string;
  title: string;
}
const Category: React.FC<CategoryProps> = ({ image, title }) => (
  <div className="bg-white p-2 rounded-xl">
    <img src={image} alt={title} className="w-full  object-cover rounded-xl" />
    <h3 className="mt-2 text-center">{title}</h3>
  </div>
);

const UserMain = () => {
  const cards = Array.from({ length: 24 }, (_, index) => ({
    image: `/public/categoryImage.png`,
    title: `Card ${index + 1}`,
  }));
  return (
    <div className="mt-[25px] bg-secondary rounded-xl">
      <UserStatusBar />
      <img src="/public/user-banner.png" alt="" className="rounded-xl" />
      <div className="flex flex-wrap -m-2 w-full mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-2 flex-auto bg-foreg max-w-full h-auto
            w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/7"
          >
            <Category image={card.image} title={card.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMain;
