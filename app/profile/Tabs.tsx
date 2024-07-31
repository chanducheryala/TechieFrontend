"use client";
import Newsletters from "@/components/Newsletters";
import SavedNewsLetters from "@/components/Saved";
import { taboptions } from "@/constants/tabs-constants";
import { useState } from "react";
import newletterIcon from "@/assets/newsletter.svg";
import savedIcon from "@/assets/saved_icon.svg";
import Image from "next/image";

interface ITabOption {
  id: number;
  title: string;
  icon: string;
}
const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabOptions = [
    {
      id: 0,
      title: taboptions.NEWSLETTER,
      icon: newletterIcon,
    },
    {
      id: 1,
      title: taboptions.SAVED,
      icon: savedIcon,
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
    <div className="hidden lg:block w-full">
      <div className="lg:flex justify-evenly lg:justify-start h-max mt-10 text-xl gap-10 border-b-2 border-gray-200 py-4">
        {tabOptions?.map((option: ITabOption) => {
          return (
            <div
              className="flex gap-2 text-2xl items-center justify-center cursor-pointer"
              onClick={() => tabHandler(option?.id)}
            >
              <Image src={option?.icon} alt="icon" width={25} height={25} />
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
