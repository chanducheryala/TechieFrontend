"use client";

import { Editor } from "primereact/editor";
import { useState } from "react";

const CreateBlogPage = () => {
  const [text, setText] = useState<any>();
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[70vw] h-[60vh] shadow-[0_2px_8px_0_#00000014] rounded-md flex flex-col justify-center gap-6">
        <input
          type="text"
          placeholder="Title"
          className="lg:h-16 md:h-14 sm:h-12  pl-4 focus:outline-none lg:rounded"
        />
        {/* <Editor
          value={text}
          onTextChange={(e) => {
            setText(e.htmlValue), console.log(e.htmlValue);
          }}
          style={{ height: "320px" }}
        /> */}
      </div>
    </div>
  );
};

export default CreateBlogPage;
