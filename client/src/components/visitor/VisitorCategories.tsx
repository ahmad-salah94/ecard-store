// Define types for the Card component props
interface CategoryProps {
  image: string;
  title: string;
}

// Card Component
const Category: React.FC<CategoryProps> = ({ image, title }) => (
  <div className="bg-white p-2 rounded-xl">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-xl"
    />
    <h3 className="mt-2 text-center">{title}</h3>
  </div>
);

// CardGrid Component
const VisitorCategories: React.FC = () => {
  // Example array of 24 items with image URLs and titles
  const cards = Array.from({ length: 24 }, (_, index) => ({
    image: `/public/categoryImage.png`,
    title: `Card ${index + 1}`,
  }));

  return (
    <div>
      <h1 className="text-5xl mb-12 font-bold text-center text-primary">
        منتجاتنا
      </h1>
      <div className="flex flex-wrap -m-2 container mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-2 flex-auto max-w-full 
            sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
          >
            <Category image={card.image} title={card.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorCategories;
