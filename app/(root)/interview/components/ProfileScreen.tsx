import Image from "next/image";
import React from "react";

export default function ProfileScreen({ userName = "IntervAI", src = "logo.svg", isSpeaking }: ProfileScreenProps) {
  return (
    <div className="bg-[#1A1A1A] w-full h-48 lg:h-90 rounded-lg relative flex justify-center items-center border">
      <div className="relative flex justify-center items-center">
        <Image
          src={`/${src}`}
          alt="logo"
          width={30}
          height={30}
          className={`w-12 h-12 sm:w-15 sm:h-15 lg:w-18 lg:h-18 ${
            src === "profile.svg" ? "rounded-full" : undefined
          }`}
        />
        {isSpeaking && (
          <span className="absolute size-2/3 animate-ping rounded-full bg-white opacity-75" />
        )}
      </div>
      <span className="absolute left-2 bottom-2 bg-[#303438] text-white px-2 py-1 rounded-xs sm:rounded-sm text-xs lg:text-sm">
        {userName}
      </span>
    </div>
  );
}
