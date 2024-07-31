import profileIcon from "@/assets/profile.svg";
import newsletterIcon from "@/assets/newsletter.svg";
import savedIcon from "@/assets/saved_icon.svg";

import Image from "next/image";
const MobileTab = () => {
  return (
    <div className="fixed lg:hidden h-20 w-full bottom-0 bg-slate-50 rounded-t-2xl flex flex-row justify-evenly">
      <Image className="w-8" src={profileIcon} alt="profile" />
      <Image className="w-8" src={newsletterIcon} alt="newsletter" />
      <Image className="w-8" src={savedIcon} alt="saved_icon" />
    </div>
  );
};

export default MobileTab;
