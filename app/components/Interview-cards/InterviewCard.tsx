import Image from "next/image";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { getRandomInterviewCover } from "@/lib/utils";
import Link from "next/link";
import TechIcons from "./TechIcons";

export default function InterviewCard({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) {
  const feedback = null as Feedback | null; //Entender
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <article className="border p-5 xl:p-9 rounded-xl flex gap-5 flex-col">
      <header>
        <Image
          src={getRandomInterviewCover()}
          alt="logo"
          width={70}
          height={70}
          className="mb-7"
        />
        <h3 className="text-white font-medium text-xl">{role} Interview</h3>
        <p className="font-extralight text-gray-300">
          {feedback?.finalAssessment ||
            "You haven taken this interview yet. Take it now to improve your skills"}
        </p>
      </header>
      {/* <div className="flex flex-row gap-5 mt-3">
        <div className="flex flex-row gap-2">
          <Image
            src="/calendar-add.svg"
            alt="calendar"
            width={22}
            height={22}
          />
          <p className="font-light">{formattedDate}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Image src="/star-.svg" alt="star" width={22} height={22} />
          <p className="font-light">{feedback?.totalScore || "---"}/100</p>{" "}
        </div>
      </div> */}
      <div className="border py-2 px-3 w-fit bg-[#1A1A1A] rounded-3xl">
        <span className="text-white text-md">{normalizedType}</span>
      </div>
      <footer className="flex justify-between items-center gap-2">
        <TechIcons techStack={techstack} />
        <Button className="w-3/5 lg:text-lg lg:py-6 xl:py-8">
          <Link
            href={
              feedback
                ? `/interview/${interviewId}/feedback`
                : `/interview/${interviewId}`
            }
          >
            {feedback ? "Feedback" : "View Interview"}
          </Link>
        </Button>
      </footer>
    </article>
  );
}
