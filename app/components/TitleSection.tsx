import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TitleSection({title, subtitle, button=false}:{title:string, subtitle:string, button?:boolean}) {
  return (
    <div className="flex flex-col gap-2 md:gap-3 md:items-start justify-center">
      <Image src="/section-item.svg" alt="section item logo" width={40} height={40} className="md:w-1/12 max-w-19"/>
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">{title}</h2>
      <p className="font-extralight text-gray-300 md:text-xl">{subtitle}</p>
      {button && <Button className="md:mt-7 lg:text-xl lg:py-8">Create Interview</Button>}
    </div>
  )
}
