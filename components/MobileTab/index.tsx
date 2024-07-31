"use client";

import profileIcon from "@/assets/profile.svg";
import newsletterIcon from "@/assets/newsletter.svg";
import savedIcon from "@/assets/saved_icon.svg";
import Image from "next/image";
import { taboptions } from "@/constants/tabs-constants";
import { useState } from "react";
import Newsletters from "../Newsletters";
import SavedNewsLetters from "../Saved";
import UserProfile from "../UserProfile";

interface ITabOption {
  id: number;
  title: string;
  icon: string;
}

const MobileTab = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabOptions: ITabOption[] = [
    {
      id: 0,
      title: taboptions.PROFILE,
      icon: profileIcon,
    },
    {
      id: 1,
      title: taboptions.NEWSLETTER,
      icon: newsletterIcon,
    },
    {
      id: 2,
      title: taboptions.SAVED,
      icon: savedIcon,
    },
  ];

  const renderView = () => {
    switch (selectedTab) {
      case 0:
        return <UserProfile />;
      case 1:
        return <Newsletters />;
      case 2:
        return <SavedNewsLetters />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <div>
      <div className="fixed lg:hidden h-20 w-full bottom-0 bg-slate-50 rounded-t-2xl flex flex-row justify-evenly">
        {tabOptions.map((option: ITabOption) => (
          <Image
            key={option.id}
            className="w-8"
            src={option.icon}
            alt={option.title}
            onClick={() => setSelectedTab(option.id)}
          />
        ))}
      </div>
      <div className="pt-4">{renderView()}</div>
    </div>
  );
};

export default MobileTab;
