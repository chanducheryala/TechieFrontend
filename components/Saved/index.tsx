import BlogCard from "../BlogCard";

interface IBlogCard {
  image?: string;
  title: string;
  description: string;
}

const SavedNewsLetters = () => {
  const newsletters = [
    {
      id: 0,
      title: "Blog1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nulla soluta facere beatae. Ullam, rem quibusdam sunt autem fugiat minima quam quos. Adipisci maxime voluptas reprehenderit modi voluptatibus aliquid sunt!",
    },
    {
      id: 1,
      title: "Blog2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nulla soluta facere beatae. Ullam, rem quibusdam sunt autem fugiat minima quam quos. Adipisci maxime voluptas reprehenderit modi voluptatibus aliquid sunt!",
    },
  ];
  return (
    <div className="w-full h-full pt-6">
      <div className="flex flex-col gap-10 items-center lg:items-start">
        {newsletters?.map((blog: IBlogCard) => {
          return (
            <BlogCard
              image=""
              title={blog?.title}
              description={blog?.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SavedNewsLetters;
