import Image from "next/image";
import React from "react";
import blogImage from "@/assets/demo.jpg";
import "./index.css";
import likeIcon from "@/assets/love.svg";
import saveIcon from "@/assets/saved_icon.svg";

interface IBlogCard {
  image?: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<IBlogCard> = ({ image, title, description }) => {
  return (
    <div className="box-border p-4 flex flex-row justify-around lg:h-[180px] w-[95%] lg:w-[50vw] shadow-[0_2px_8px_0_#00000014] lg:px-6 lg:py-4 rounded-lg cursor-pointer">
      <div className="w-[70%] lg:w-[70%] flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <span className="text-md text-3xl font-bold">{title}</span>
          <span className=" text-sm lg:text-lg multi-line-clamp">
            {String(description)}
          </span>
        </div>
        <div className="flex gap-10">
          <Image src={likeIcon} alt="like" />
          <Image className = "w-5"src={saveIcon} alt="save" />
        </div>
      </div>
      <div className="w-[130px] lg:w-[21%] lg:h-full flex items-center justify-center">
        <Image
          src={image || blogImage}
          alt="blog_image"
          className="w-full h-[80px] lg:w-full lg:h-[70%]"
          style={{
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
};

export default BlogCard;
