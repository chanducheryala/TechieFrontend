"use client";

import avatar from "../../assets/profile.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isDropdownSelected, setIsDropdownSelected] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[100px] shadow-[0_2px_8px_0_#00000014] flex justify-between items-center px-10 bg-white">
      <div>LOGO</div>
      <div className="relative">
        <div
          className=" flex gap-2 cursor-pointer"
          onClick={() => setIsDropdownSelected((prev) => !prev)}
          ref={dropdownRef}
        >
          <Image src={avatar} alt="avator_fallback" />
          <span>LIONEL MESSI</span>
          <ChevronDown />
        </div>
        {isDropdownSelected && (
          <div className="absolute flex flex-col top-10 bg-white w-full lg:rounded border border-grey shadow-[0_2px_8px_0_#00000014]">
            <div className="text-lg h-10 flex items-center pl-4 hover:bg-zinc-100 cursor-pointer">
              Profile
            </div>
            <div className="text-lg h-10 flex items-center pl-4 hover:bg-zinc-100 cursor-pointer">
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
