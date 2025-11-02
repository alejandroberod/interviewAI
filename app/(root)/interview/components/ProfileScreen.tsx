import Image from "next/image";
import React from "react";

export default function ProfileScreen({ name, src }: ProfileScreenProps) {
  return (
    <div className="bg-[#1A1A1A] w-full h-48 lg:h-90 rounded-lg relative flex justify-center items-center border">
      <Image
        src={`/${src}`}
        alt="logo"
        width={30}
        height={30}
        className={`w-12 h-12 sm:w-15 sm:h-15 lg:w-18 lg:h-18 ${src === "profile.svg" ? "rounded-full" : undefined}`}
      />
      <span className="absolute left-2 bottom-2 bg-[#303438] text-white px-2 py-1 rounded-xs sm:rounded-sm text-xs sm:text-sm">
        {name}
      </span>
    </div>
  );
}
