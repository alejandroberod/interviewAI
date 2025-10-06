import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row-reverse gap-7 justify-between">
          <div className="rounded-xl border py-8 shadow-sm bg-[url('/abstract-design.svg')] bg-cover flex justify-center items-center max-w-3xl">
            <Image src="/neural-network.png" height={669} width={755} alt="neural network" className="w-1/2 md:w-3/4"/>
          </div>
          <div className="flex flex-col gap-3 md:items-start justify-center">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">Practice Interviews, Land Your Dream Job</h2>
            <p className="font-extralight text-gray-300 md:text-xl">Build confidence through practice. Experience real interview scenarios and refine your answers before the big day.</p>
            <Button className="md:mt-7 lg:text-xl lg:py-8">Create Interview</Button>
          </div>
        </div>
      </section>
    </>
  );
}
