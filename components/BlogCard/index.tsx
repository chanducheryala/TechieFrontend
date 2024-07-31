import Image from "next/image";
import React from "react";
import blogImage from "@/assets/demo.jpg";

interface IBlogCard {
  image?: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<IBlogCard> = ({ image, title, description }) => {
  return (
    <div className="w-[50vw] flex flex-col gap-3 shadow-[0_2px_8px_0_#00000014] px-6 py-4 rounded-lg">
      <div className="flex flex-row">
        <div className="flex flex-col gap-3">
          <span className="text-3xl font-bold">{title}</span>
          <span className="text-lg">{description}</span>
        </div>
        <Image
          src={image || blogImage}
          alt="blog_image"
          width={200}
          height={100}
          style={{
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="flex gap-10">
        <span>Like</span>
        <span>save</span>
      </div>
    </div>
  );
};

export default BlogCard;
