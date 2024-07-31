"use client";
import Newsletters from "@/components/Newsletters";
import SavedNewsLetters from "@/components/Saved";
import { taboptions } from "@/constants/tabs-constants";
import { useState } from "react";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabOptions = [
    {
      id: 0,
      title: taboptions.NEWSLETTER,
    },
    {
      id: 1,
      title: taboptions.SAVED,
    },
  ];
  
  const renderView = () => {
    switch (selectedTab) {
      case 0:
        return <Newsletters />;
      case 1:
        return <SavedNewsLetters />;
      default:
        return <Newsletters />;
    }
  };

  const tabHandler = (tabId: number) => {
    setSelectedTab(tabId);
  };
  return (
    <div className="w-full">
      <div className="flex  h-max mt-10 text-xl gap-10 border-b-2 border-gray-200 py-4">
        {tabOptions?.map((option) => {
          return (
            <div
              className="cursor-pointer"
              onClick={() => tabHandler(option?.id)}
            >
              {option?.title}
            </div>
          );
        })}
      </div>
      {renderView()}
    </div>
  );
};
export default Tabs;
