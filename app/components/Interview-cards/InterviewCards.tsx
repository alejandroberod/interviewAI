import { dummyInterviews } from "@/constants";
import InterviewCard from "./InterviewCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function InterviewCards() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-3 lg:gap-5 xl:gap-7 hidden mt-8">
        {dummyInterviews.map((item) => (
          <InterviewCard key={item.id} {...item}/>
        ))}
      </div>
      <Carousel className="lg:hidden flex flex-col mt-8">
        <CarouselContent>
          {dummyInterviews.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2">
              <InterviewCard {...item}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-8 mt-8">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}
