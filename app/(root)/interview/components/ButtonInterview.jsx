import { FiRepeat, FiPhoneOff } from "react-icons/fi";

export default function ButtonInterview({name}) {
  const isRepeat = name.toLowerCase() === "repeat";
  const icon = isRepeat ? <FiRepeat /> : <FiPhoneOff />;
  
  return (
    <button 
      className={`${isRepeat ? 'bg-[#24273A]' : 'bg-[#F75353]'} p-2 rounded-md w-full sm:w-48 text-sm flex items-center justify-center gap-2 text-white cursor-pointer`}
    >
      {icon}
      {name}
    </button>
  );
}