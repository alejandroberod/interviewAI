import { getTechLogos } from "@/lib/utils";
import Image from "next/image";

export default async function TechIcons({ techStack }: TechIconProps) {

  const techIcons = (await getTechLogos(techStack)).slice(0,3);

  return (
    <div className="flex gap-1">
      {techIcons.map(({tech, url}, index) => (
        <div key={tech} className={"flex justify-center p-2 border rounded-full"}>
          <Image src={url} alt={tech} width={30} height={30} />
        </div>
      ))}
    </div>
  );
}
