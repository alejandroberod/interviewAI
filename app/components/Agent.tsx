import Image from "next/image";
import TechIcons from "./Interview-cards/TechIcons";
import ProfileScreen from "../(root)/interview/components/ProfileScreen";
import ButtonInterview from "../(root)/interview/components/ButtonInterview";

export default function Agent({ type }: { type: string }) {
  const isSpeaking = true
  return (
    <div>
      <div className="px-4 py-2 sm:py-4 border rounded-lg flex flex-col sm:flex-row items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2 justify-center sm:gap-3">
          <Image
            src="/covers/facebook.png"
            alt="logo"
            width={20}
            height={20}
            className="w-5 h-5 sm:w-7 sm:h-7"
          />
          <p className="text-white text-sm sm:text-2xl font-semibold">
            Frontend Developer Interview
          </p>
          <div>
            <TechIcons
              techStack={["React", "Next.js"]}
              className="w-3 h-3 sm:w-5 sm:h-5"
            />
          </div>
        </div>
        <div className="bg-[#24273A] px-2 py-1 rounded-lg sm:px-4 sm:py-2">
          <p className="text-white text-xs sm:text-sm font-medium">
            Technical Interview
          </p>
        </div>
      </div>
      <div className="flex mt-6 gap-2 sm:gap-3 flex-col sm:flex-row">
        <ProfileScreen isSpeaking={isSpeaking}/>
        <ProfileScreen userName="Alejandro Betancourth (You)" userId="user1" src="profile.svg"/>
      </div>
      <div className="border w-full h-12 sm:h-18 bg-[#1A1A1A] mt-6 rounded-lg text-white text-sm sm:text-lg text-center">
        This is a test text
      </div>
      <div className="flex gap-2 justify-center my-4 px-4">
        <ButtonInterview name="Repeat" />
        <ButtonInterview name="Leave Interview" />
      </div>
    </div>
  );
}
